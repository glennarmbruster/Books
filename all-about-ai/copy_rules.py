"""Audit the actual text a reader can copy, including local trial excerpts."""
import re

READER = re.compile(r'^\s*(?:paste|copy|send|open|save)\b|\bfresh chat\b|\bthis card\b|\bbelow the data\b|\bon paper\b|(?:^|[.!?]\s+)(?:paste|copy|open|save|send)\s+(?:this|these|the (?:prompt|sample|card|file))\b', re.I)
def check_payload(text, label):
    if not isinstance(text,str) or not text.strip() or READER.search(text):
        raise ValueError('Remove reader instructions from the copy box in '+label)

def page_boxes(row):
    if 'prompt' in row: yield 'lab request',row['prompt']
    for step in row.get('steps',[]):
        if 'code' in step:yield step['title'],step['code']
    for section in row.get('sections',[]):
        if 'practiceCode' in section:yield 'starter file',section['practiceCode']
        for prompt in section.get('prompts',[]):yield prompt['title'],prompt['text']
    for name in ('prompt','followUp'):
        if 'buildSpec' in row:yield name,row['buildSpec'][name]

def case_payload(row, folder):
    text=(folder/row['file']).read_text()
    mode=row.get('copyMode')
    if mode=='read':return None
    if mode=='file':return text
    if mode=='first-prompt':
        match=re.search(r'(?:^|\n)BEGIN\r?\n([\s\S]*?)\r?\nEND(?:\r?\n|$)',text)
        if match:return match[1]
    raise ValueError('Missing practice-file copy boundary for '+row['file'])


def validate_worked(examples):
    """Reject repeated teaching patterns and messages whose boundaries are unclear."""
    from collections import Counter
    def normal(value):
        return ' '.join(re.findall(r'[a-z0-9]+', value.casefold()))
    whys, endings, questions = Counter(), Counter(), Counter()
    stale = ('before looking below','match the values, labels and order shown','in the original card',
             'show the changed row separately','cross out','paste this fictional practice card')
    tools = {'claude-code':'Claude Code','codex':'Codex','devin':'Devin','antigravity':'Antigravity'}
    for ex in examples:
        key = ex['id']
        message = ex.get('rescuePrompt','')
        check_payload(message, key+' / follow-up')
        joined = ' '.join(ex[k] for k in ('premise','before','try','after','why','rescue','rescuePrompt')).casefold()
        if any(phrase in joined for phrase in stale):
            raise ValueError('Replace old worked-example wording in '+key)
        opened = None
        for index,character in enumerate(message):
            before = message[index-1] if index else ' '
            after = message[index+1] if index+1 < len(message) else ' '
            if character in ("'", "’") and before.isalnum() and after.isalnum():
                continue  # Apostrophe inside a word, such as driver's.
            if character in ('“','‘'):
                if opened: raise ValueError('Nested follow-up quotes in '+key)
                opened = {'“':'”','‘':'’'}[character]
            elif character in ('”','’'):
                if opened != character: raise ValueError('Mismatched follow-up quotes in '+key)
                opened = None
            elif character in ('"', "'"):
                if opened == character: opened = None
                elif opened: raise ValueError('Nested follow-up quotes in '+key)
                else: opened = character
        if opened: raise ValueError('Unclosed follow-up quote in '+key)
        why = normal(ex['why'])
        whys[why] += 1
        # A request can end in an imperative. Check that ending too.
        sentences = re.split(r'(?<=[.!?])\s+', ex['before'].strip())
        endings[normal(sentences[-1])] += 1
        actual_questions = re.findall(r'(?:^|(?<=[.!?\n]))\s*([^.!?\n]+\?)', ex['before'])
        if actual_questions:
            questions[re.sub(r'\d+', '#', normal(actual_questions[-1]))] += 1
        for track,tool in tools.items():
            if key.startswith('lab-'+track+'-') and tool.casefold() not in ex['try'].casefold():
                raise ValueError('Show how to use '+tool+' in '+key)
    if max(whys.values()) > 1:
        raise ValueError('A worked explanation is repeated')
    if max(endings.values()) > 3 or max(questions.values(), default=0) > 3:
        raise ValueError('A worked request ending occurs more than three times')

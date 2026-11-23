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

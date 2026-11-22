"""Build the offline film word searches and printable Markdown chapter data packs."""
from pathlib import Path
import json
import random
import re
import string
import unicodedata

HERE = Path(__file__).resolve().parent
BOOK = HERE.parents[1] / 'christmas-picture-show'
DIRECTIONS = [(x, y) for x in (-1, 0, 1) for y in (-1, 0, 1) if (x, y) != (0, 0)]


def letters(text):
    return re.sub('[^A-Z]', '', unicodedata.normalize('NFKD', text).upper())


def vocabulary(words):
    return list({letters(w): w.strip() for w in words}.values())


def draw_counts(films):
    # The editorial tiers express holiday familiarity across both film and broadcast TV.
    # Freeze the draw so both iPads see the same chapter boundaries.
    tiers = [f['tier'] for f in films]
    counts = [12 + (0, 1, 3, 6)[tier] for tier in tiers]
    rng = random.Random(122526)
    while sum(counts) < 400:
        choices = [i for i,tier in enumerate(tiers) if counts[i] < (14,17,19,20)[tier]]
        idx = rng.choices(choices, weights=[1+tiers[i] for i in choices])[0]
        counts[idx] += 1
    return counts


def line_cells(a, b, side):
    x, y = a % side, a // side
    dx, dy = b % side - x, b // side - y
    assert dx == 0 or dy == 0 or abs(dx) == abs(dy)
    step = ((dx > 0) - (dx < 0)) + ((dy > 0) - (dy < 0))*side
    return [a + i*step for i in range(max(abs(dx), abs(dy)) + 1)]


def construct(words, seed, hidden=''):
    rng = random.Random(seed)
    codes = [letters(w) for w in words]
    message = letters(hidden)
    side = 18 if not hidden else max(max(map(len,codes)), int((sum(map(len,codes))+len(message))**0.5)+2)
    for _ in range(120):
        board = [''] * (side * side)
        positions = [None]*len(words)
        for i in sorted(range(len(words)), key=lambda i:-len(codes[i])):
            word = codes[i]
            # Prefer crossings but leave some open space between words.
            candidates = []
            for attempt in range(230):
                dx,dy = rng.choice(DIRECTIONS)
                width, height = dx*(len(word)-1), dy*(len(word)-1)
                x = rng.randrange(max(0,-width),min(side,side-width))
                y = rng.randrange(max(0,-height),min(side,side-height))
                start = y*side+x
                cells = [start+k*(dy*side+dx) for k in range(len(word))]
                if all(board[pos] in ('',ch) for pos,ch in zip(cells,word)):
                    overlap = sum(bool(board[pos]) for pos in cells)
                    candidates.append((min(overlap,3) + rng.random()*2, cells))
                    if len(candidates) == 12: break
            if not candidates: break
            cells = max(candidates)[1]
            for pos,ch in zip(cells,word):board[pos]=ch
            positions[i]=[cells[0],cells[-1]]
        if None in positions:continue
        empty = [j for j,ch in enumerate(board) if not ch]
        if hidden:
            if len(empty)<len(message):continue
            slots = sorted(rng.sample(empty,len(message)))
            for pos in empty:board[pos]='·'
            for pos,ch in zip(slots,message):board[pos]=ch
            # A second occurrence could leave the wrong letters for the final line.
            if any(len(locate(board,side,word))!=1 for word in codes):continue
        else:
            for pos in empty:board[pos]=rng.choice(string.ascii_uppercase)
        rows = [''.join(board[s:s+side]) for s in range(0,len(board),side)]
        assert all(''.join(board[pos] for pos in line_cells(*path,side)) == word for path,word in zip(positions,codes))
        if hidden:
            used = {pos for path in positions for pos in line_cells(*path,side)}
            assert ''.join(ch for pos,ch in enumerate(board) if pos not in used and ch!='·')==message
        return rows,positions
    raise RuntimeError(f'Could not place {words} (seed {seed})')


def locate(board,side,word):
    matches=set()
    for a,ch in enumerate(board):
        if ch!=word[0]:continue
        for dx,dy in DIRECTIONS:
            x,y = a%side+dx*(len(word)-1), a//side+dy*(len(word)-1)
            if 0<=x<side and 0<=y<side and all(board[a+k*(dy*side+dx)]==c for k,c in enumerate(word)):
                matches.add(tuple(sorted((a,y*side+x))))
    return matches


def sample_distinct(words,count,rng,no_substrings=False):
    pool=vocabulary(words);rng.shuffle(pool);chosen=[]
    for w in pool:
        code=letters(w)
        if no_substrings and any(code in letters(v) or letters(v) in code or code[::-1] in letters(v) or letters(v)[::-1] in code for v in chosen):continue
        chosen.append(w)
        if len(chosen)==count:return chosen
    raise ValueError('Insufficient candidate words')


def make_chapter(film,film_id,total):
    themes, clues, extras = film['themes'],film['clues'],film['extras']
    rng=random.Random(42125+film_id)
    assert len(film['trivia'])==3 and 3<=len(film['quotes'])<=4
    assert film['message'] in film['quotes'] and 1<=len(letters(film['message']))<45
    assert len(themes)==9 and len(clues)==15 and len(extras)>=total-12
    pool=[w for _,bank in themes for w in bank]
    pages=[dict(title=t,words=w,kind='standard') for t,w in themes]
    blanks,answers=zip(*clues)
    assert all(line.count('_____')==1 for line in blanks)
    pages.append(dict(title='The missing line · '+film['short'],words=list(answers),clues=list(blanks),kind='blanks',
        rule='These are original scene clues. Fill each blank with a word or name, then find your answers in the grid. Spaces and punctuation disappear.'))
    pages.append(dict(title='A message in the credits · '+film['short'],words=sample_distinct(pool,15,rng,True),kind='hidden',message=film['message'],
        rule='Find the 15 words. Read the unused letters across each row from top to bottom, skipping the dots, to uncover the closing message.'))
    pages.append(dict(title='Superfan screening · '+film['short'],words=film['fanWords'],kind='superfan',rule=film['fan']))
    for extra in extras[:total-12]:
        pages.append(dict(title=extra[0],words=extra[2],kind='bonus',rule='Find the words from this scene.'))
    notes=[]
    for title,fact,_ in extras:
        notes.append(('Scene notes',title,fact))
    for fact in film['trivia']:
        notes.append(('Did you know?','Behind the camera',fact))
    # Use a different note on every spread, including specials with compact casts.
    for line,answer in clues:
        fact=line.replace('_____',answer)
        if not fact.rstrip().endswith('?'): notes.append(('In the picture','Screen memory',fact))
    taken=set()
    for i,p in enumerate(pages):
        is_bonus=i>=12
        if is_bonus:
            title,fact,_=extras[i-12]
            selected=('Scene notes',title,fact)
        elif i in (2,7,8):
            selected=('Did you know?','Behind the camera',film['trivia'][(2,7,8).index(i)])
        else:
            unavailable={e[1] for e in extras[:total-12]} | set(film['trivia']) | taken
            options=[n for n in notes if n[2] not in unavailable]
            keywords=set(re.findall(r'[a-z]{4,}',(' '.join(p['words'])+' '+p['title']).lower()))
            selected=max(options,key=lambda n:len(keywords & set(re.findall(r'[a-z]{4,}',(n[1]+' '+n[2]).lower())))) if options else ('Film notes',film['title'],film['hook'])
        p['noteLabel'],p['noteTitle'],p['note']=selected;taken.add(selected[2])
        if i in (0,4,6) and film['quotes']:
            qidx=(0,4,6).index(i)
            if qidx<len(film['quotes']):p['quote']=film['quotes'][qidx]
        assert 15<=len(p['words'])<=18 and len(p['words'])==len(vocabulary(p['words'])), (film_id,i,p['words'])
        assert all(4<=len(letters(w))<=15 for w in p['words']),(film_id,i,p['words'])
        p['film']=film_id
        p['grid'],p['paths']=construct(p['words'],900002+film_id*100+i,p.get('message',''))
    return pages


def main():
    source=json.loads((HERE/'chapters.json').read_text())
    counts=draw_counts(source)
    films=[];puzzles=[];markdown=['# Christmas Picture Show','400 word searches in 24 chapters. Grid keys omit punctuation and spaces. Scene-cloze lines are original clues.']
    for i,(film,count) in enumerate(zip(source,counts)):
        films.append({k:film[k] for k in ('title','year','hook','quotes','trivia','source','quoteSource') if k in film})
        new=make_chapter(film,i,count)
        markdown.extend([f"## Chapter {i+1}. {film['title']} ({film['year']})",film['hook'],f'{count} puzzles.','### Dialogue excerpts',*['> '+q for q in film['quotes']],'### Did you know?',*['- '+t for t in film['trivia']],f"[Film notes and credits]({film['source']})"])
        if film.get('quoteSource'):markdown.append(f"[Dialogue reference]({film['quoteSource']})")
        for p in new:
            num=len(puzzles)+1;puzzles.append(p)
            markdown.extend([f"### Puzzle {num}. {p['title']}",p.get('rule','Find the listed words in any of eight directions.')])
            if 'clues' in p:markdown.extend(['#### Scene clues','\n'.join(f'{j}. '+s for j,s in enumerate(p['clues'],1))])
            markdown.extend(['#### '+('Editor’s answer key' if p['kind'] in ('superfan','blanks') else 'Display bank and grid keys'),
                '\n'.join(f'- {w} ({letters(w)})' for w in p['words'])])
            if p.get('quote'):markdown.append('Dialogue excerpt: “'+p['quote']+'”')
            if 'message' in p:markdown.append('Leftover-letter message: '+p['message']+' ('+letters(p['message'])+')')
            markdown.extend(['#### Facing page',p['note']])
        print(f"{i+1:2} {film['title']} · {count}",flush=True)
    assert len(puzzles)==400 and len(films)==24
    assert len({tuple(p['grid']) for p in puzzles})==400
    assert len({tuple(sorted(letters(w) for w in p['words'])) for p in puzzles})==400
    (BOOK/'puzzles.js').write_text('const films = '+json.dumps(films,ensure_ascii=False)+';\nconst puzzles = [\n'+',\n'.join(json.dumps(p,ensure_ascii=False,separators=(',',':')) for p in puzzles)+'\n];\n')
    (BOOK/'chapter-packs.md').write_text('\n\n'.join(markdown)+'\n')


if __name__=='__main__':
    main()

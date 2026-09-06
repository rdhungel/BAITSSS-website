from pathlib import Path
from html import unescape
import re, itertools

SKIP_DIRS={'.git','.github','assets'}

def clean_html(s):
    s=re.sub(r'<style\b.*?</style>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<script\b.*?</script>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<header\b.*?</header>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<footer\b.*?</footer>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<!--.*?-->',' ',s,flags=re.S)
    return s

def blocks(s):
    out=[]
    for m in re.finditer(r'<(h1|h2|h3|p|li)\b[^>]*>(.*?)</\1>',s,flags=re.S|re.I):
        tag=m.group(1).lower()
        text=re.sub(r'<[^>]+>',' ',m.group(2))
        text=unescape(re.sub(r'\s+',' ',text)).strip()
        if len(text)>=45:
            out.append((tag,text))
    return out

def tokens(t):
    return {w for w in re.findall(r"[a-z0-9]+",t.lower()) if len(w)>2 and w not in {'the','and','for','with','from','that','this','into','where','when','are','can','its','their','within','through','using'}}

pages={}
for p in sorted(Path('.').rglob('*.html')):
    if any(part in SKIP_DIRS for part in p.parts): continue
    if p.name!='index.html' and p.parent==Path('.'): continue
    s=clean_html(p.read_text(encoding='utf-8',errors='ignore'))
    b=blocks(s)
    if b: pages[str(p)]=b

print('PUBLIC PAGES',len(pages))
for p,b in pages.items():
    title=next((t for tag,t in b if tag=='h1'), '')
    print(f'PAGE\t{p}\t{title[:100]}\t{len(b)} blocks')

pairs=[]
for (pa,ba),(pb,bb) in itertools.combinations(pages.items(),2):
    best=[]
    for taga,a in ba:
        A=tokens(a)
        if len(A)<5: continue
        for tagb,b in bb:
            B=tokens(b)
            if len(B)<5: continue
            j=len(A&B)/max(1,len(A|B))
            containment=len(A&B)/max(1,min(len(A),len(B)))
            if j>=0.38 or containment>=0.62:
                best.append((max(j,containment),a,b))
    best=sorted(best,reverse=True)[:5]
    if best:
        pairs.append((sum(x[0] for x in best)/len(best),pa,pb,best))

print('\nTOP CROSS-PAGE REDUNDANCY')
for score,pa,pb,best in sorted(pairs,reverse=True)[:40]:
    print(f'PAIR\t{score:.2f}\t{pa}\t{pb}')
    for s,a,b in best[:3]:
        print(f'  {s:.2f} A: {a[:220]}')
        print(f'       B: {b[:220]}')

# repeated exact normalized blocks
seen={}
for p,b in pages.items():
    for tag,t in b:
        n=re.sub(r'[^a-z0-9 ]','',t.lower())
        n=re.sub(r'\s+',' ',n).strip()
        seen.setdefault(n,[]).append((p,t))
print('\nEXACT REPEATED CONTENT BLOCKS')
for n,items in sorted(seen.items(), key=lambda kv:len(kv[1]), reverse=True):
    ps=sorted({p for p,_ in items})
    if len(ps)>1 and len(n)>60:
        print('EXACT',len(ps), ' | '.join(ps), ' | ',items[0][1][:260])

# topic density to reveal conceptual duplication
TOPICS={
'science':['two-source','two source','two-layer','two layer','energy balance','soil-water','soil water','evapotranspiration','thermal'],
'capability':['desktop','project','run','results','export','resume','pixel','landsat','nldas'],
'evidence':['verified','proven','evidence','equivalence','comparison','validation'],
'access':['access','collaborat','participat','request','contact','funding'],
'history':['history','developed','development','origin','publication'],
'research':['research','education','teaching','student','university','project']}
print('\nTOPIC DENSITY')
for p,b in pages.items():
    text=' '.join(t.lower() for _,t in b)
    vals=[]
    for topic,keys in TOPICS.items():
        c=sum(text.count(k) for k in keys)
        if c: vals.append(f'{topic}:{c}')
    print('TOPIC\t'+p+'\t'+' '.join(vals))

from pathlib import Path
import re, html

SKIP={'.git','.github','assets'}

def clean(s):
    s=re.sub(r'<style\b.*?</style>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<script\b.*?</script>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<header\b.*?</header>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<footer\b.*?</footer>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<[^>]+>',' ',s)
    s=html.unescape(s)
    return re.sub(r'\s+',' ',s).strip()

pages=[]
for p in sorted(Path('.').rglob('index.html')):
    if any(x in SKIP for x in p.parts):
        continue
    s=p.read_text(encoding='utf-8',errors='ignore')
    redirect=bool(re.search(r'http-equiv=["\']refresh["\']',s,re.I))
    main=re.search(r'<main\b[^>]*>(.*?)</main>',s,re.S|re.I)
    scope=main.group(1) if main else s
    visible=clean(scope)
    words=re.findall(r"[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)?",visible)
    h1=len(re.findall(r'<h1\b',scope,re.I))
    h2=len(re.findall(r'<h2\b',scope,re.I))
    sections=len(re.findall(r'<section\b',scope,re.I))
    articles=len(re.findall(r'<article\b',scope,re.I))
    imgs=len(re.findall(r'<img\b',scope,re.I))
    forms=len(re.findall(r'<form\b',scope,re.I))
    empty_grid=bool(re.search(r'<div\b[^>]*class=["\'][^"\']*\b(?:grid|cards|routes|steps|timeline)[^"\']*["\'][^>]*>\s*</div>',scope,re.S|re.I))
    empty_main=bool(main and not visible)
    hero=bool(re.search(r'<section\b[^>]*class=["\'][^"\']*hero',scope,re.I))
    status='REDIRECT' if redirect else ('BROKEN' if empty_main or empty_grid else ('THIN' if len(words)<90 else 'OK'))
    pages.append((p.as_posix(),status,len(words),sections,articles,imgs,forms,h1,h2,hero,empty_grid,visible[:110]))

print('PAGE SUBSTANCE AUDIT')
for row in pages:
    p,status,words,sections,articles,imgs,forms,h1,h2,hero,empty_grid,snip=row
    print(f'{status:8} {p:42} words={words:4} sections={sections:2} articles={articles:2} images={imgs:2} forms={forms} h1={h1} h2={h2} hero={int(hero)} empty_grid={int(empty_grid)} | {snip}')
print('\nFLAGGED')
for row in pages:
    if row[1] != 'OK':
        print(row[1], row[0], 'words=',row[2], '|',row[-1])

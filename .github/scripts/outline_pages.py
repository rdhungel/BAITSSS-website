from pathlib import Path
from html import unescape
import re
pages=['faq/index.html','software/index.html','documentation/index.html','access-participation/index.html','access-policy/index.html','meet-the-team/index.html','example-project/index.html','system-requirements/index.html','evidence/index.html','research-education/index.html','science/index.html','capabilities/index.html']
for fn in pages:
    p=Path(fn)
    if not p.exists(): continue
    s=p.read_text(encoding='utf-8',errors='ignore')
    s=re.sub(r'<style\b.*?</style>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<script\b.*?</script>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<header\b.*?</header>',' ',s,flags=re.S|re.I)
    s=re.sub(r'<footer\b.*?</footer>',' ',s,flags=re.S|re.I)
    print('\n###',fn)
    i=0
    for m in re.finditer(r'<(h1|h2|h3|p|li)\b[^>]*>(.*?)</\1>',s,flags=re.S|re.I):
        tag=m.group(1).upper()
        text=re.sub(r'<[^>]+>',' ',m.group(2))
        text=unescape(re.sub(r'\s+',' ',text)).strip()
        if not text: continue
        i+=1
        print(f'{i:03d} {tag}: {text}')

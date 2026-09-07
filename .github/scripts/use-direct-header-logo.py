from pathlib import Path

changed=[]
for p in Path('.').rglob('*.html'):
    if '.git' in p.parts:
        continue
    s=p.read_text(encoding='utf-8')
    n=s.replace('brand-mark.svg','brand-logo.png')
    if n!=s:
        p.write_text(n,encoding='utf-8')
        changed.append(str(p))
print('updated',len(changed),'html files')
for x in changed:
    print(x)

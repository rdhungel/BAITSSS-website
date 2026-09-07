from pathlib import Path

changed=[]
for p in Path('.').rglob('*.html'):
    if '.git' in p.parts:
        continue
    s=p.read_text(encoding='utf-8')
    n=s
    # Root-level pages
    n=n.replace('href="assets/baitsss-tab-logo-20260901.png"','href="assets/published-science/BAITSSS%20Logo.png"')
    n=n.replace("href='assets/baitsss-tab-logo-20260901.png'","href='assets/published-science/BAITSSS%20Logo.png'")
    # One-level subpages
    n=n.replace('href="../assets/baitsss-tab-logo-20260901.png"','href="../assets/published-science/BAITSSS%20Logo.png"')
    n=n.replace("href='../assets/baitsss-tab-logo-20260901.png'","href='../assets/published-science/BAITSSS%20Logo.png'")
    # Also normalize any old brand-logo favicon references only when used in rel=icon lines
    lines=[]
    for line in n.splitlines(True):
        if 'rel="icon"' in line or 'rel="shortcut icon"' in line or "rel='icon'" in line or "rel='shortcut icon'" in line:
            line=line.replace('assets/brand-logo.png','assets/published-science/BAITSSS%20Logo.png')
            line=line.replace('../assets/brand-logo.png','../assets/published-science/BAITSSS%20Logo.png')
        lines.append(line)
    n=''.join(lines)
    if n!=s:
        p.write_text(n,encoding='utf-8')
        changed.append(str(p))
print('updated',len(changed),'html files')
for x in changed:
    print(x)

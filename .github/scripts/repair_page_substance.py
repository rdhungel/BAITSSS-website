from pathlib import Path
import re, subprocess

OLD='76285e02ba12f2d3ff8dacefb12dcd8a6cb52637'


def show(ref, path):
    return subprocess.check_output(['git','show',f'{ref}:{path}']).decode('utf-8')

def main_block(s):
    a=s.index('<main>')
    b=s.index('</main>', a)+len('</main>')
    return s[a:b]

# 1) Example Project: restore the substantive tutorial body while keeping the
# current header, shared header stylesheet, cache directives, and current nav.
p=Path('example-project/index.html')
cur=p.read_text(encoding='utf-8')
old=show(OLD,'example-project/index.html')
cur=cur[:cur.index('<main>')] + main_block(old) + cur[cur.index('</main>')+len('</main>'):]
# Keep this page procedural rather than turning it into a second evidence page.
cur=cur.replace('A difference between model output and field observation should be investigated through the data, settings, assumptions, and model interpretation rather than treated as a single accuracy number.','Use later runs to compare defined periods or supported settings while preserving each run as its own traceable record.')
p.write_text(cur,encoding='utf-8')

# 2) Scientific Stewardship: restore substantive interpretation content, but
# keep its identity distinct from the Science page.
p=Path('scientific-stewardship/index.html')
cur=p.read_text(encoding='utf-8')
old=show(OLD,'scientific-stewardship/index.html')
old_main=main_block(old)
# Replace the old science-like temporal section with stewardship-specific guidance.
marker='<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">03 · Temporal simulation</div>'
pos=old_main.find(marker)
if pos<0:
    raise SystemExit('Stewardship section marker not found')
end=old_main.find('</main>',pos)
replacement='''<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">03 · Traceability</div><div><h2>Interpret the exact run that produced the result.</h2></div></div><div class="grid three"><article class="card"><div class="tag">Context</div><h3>Identify the run</h3><p>Record the project, simulation period, software version, settings, and data sources associated with the result being interpreted.</p></article><article class="card"><div class="tag">Separation</div><h3>Keep evidence classes distinct</h3><p>State clearly whether a quantity is an observation, a supplied input, a modeled state, or an independently derived comparison.</p></article><article class="card"><div class="tag">Limits</div><h3>Report uncertainty and scope</h3><p>Interpret conclusions within the spatial scale, time period, available observations, assumptions, and known limitations of the study.</p></article></div><div class="cta-row"><a class="button button-primary" href="../evidence/">Evidence</a><a class="button" href="../science/">Science</a></div></div></section>'''
old_main=old_main[:pos]+replacement+'</main>'
# Preserve the newer current hero language rather than restoring the older generic hero.
old_main=re.sub(r'<section class="hero">.*?</section>', re.search(r'<section class="hero">.*?</section>',cur,re.S).group(0), old_main, count=1, flags=re.S)
cur=cur[:cur.index('<main>')] + old_main + cur[cur.index('</main>')+len('</main>'):]
p.write_text(cur,encoding='utf-8')

# 3) Make the public Research Geography URL contain the real page instead of
# sending a visitor through a nearly empty redirect page.
geo=Path('research-geography/index.html')
map_page=Path('research-map/index.html').read_text(encoding='utf-8')
geo.write_text(map_page,encoding='utf-8')
Path('research-map/index.html').write_text('''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0; url=../research-geography/"><link rel="canonical" href="../research-geography/"><meta name="robots" content="noindex"><title>Research Geography &amp; Timeline | BAITSSS</title></head><body><p><a href="../research-geography/">Open Research Geography &amp; Timeline</a></p></body></html>''',encoding='utf-8')

# 4) Do not send normal internal navigation through legacy Development Status.
for f in Path('.').rglob('*.html'):
    if '.git' in f.parts or f.as_posix()=='development-status/index.html':
        continue
    s=f.read_text(encoding='utf-8',errors='ignore')
    s2=s.replace('href="../development-status/"','href="../meet-the-team/"').replace('href="development-status/"','href="meet-the-team/"')
    if s2!=s:
        f.write_text(s2,encoding='utf-8')

# 5) Sitemap should list authority pages, not redirect-only legacy pages.
urls=['','software/','capabilities/','science/','evidence/','published-science/','research-education/','access-participation/','meet-the-team/','origins-publications/','research-geography/','faq/','scientific-stewardship/','documentation/','example-project/','system-requirements/','citation/','release-notes/','known-issues/','contact/']
xml=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
xml += [f'  <url><loc>https://baitsss.com/{u}</loc></url>' for u in urls]
xml += ['</urlset>','']
Path('sitemap.xml').write_text('\n'.join(xml),encoding='utf-8')

# Acceptance checks
ex=Path('example-project/index.html').read_text(encoding='utf-8')
st=Path('scientific-stewardship/index.html').read_text(encoding='utf-8')
rg=Path('research-geography/index.html').read_text(encoding='utf-8')
assert 'Run one seasonal field from setup to Results.' in ex
assert ex.count('class="step"') >= 8
assert 'assets/published-science/Project.png' in ex and 'assets/published-science/Result.png' in ex
assert 'Observed, supplied, and modeled quantities' in st
assert st.count('class="card"') >= 8
assert 'Interpret the exact run that produced the result.' in st
assert 'Where BAITSSS has actually been applied.' in rg and 'class="map"' in rg
assert 'development-status/' not in Path('sitemap.xml').read_text(encoding='utf-8')
print('Page substance repair PASS')

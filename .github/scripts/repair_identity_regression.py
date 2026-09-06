from pathlib import Path
import re, subprocess

BASE='37cf42c0c10018dd80f810dc13dbdb950f2b8119'

def restore(path):
    data=subprocess.check_output(['git','show',f'{BASE}:{path}'])
    Path(path).write_bytes(data)

restore('research-education/index.html')
restore('meet-the-team/index.html')

# Research & Education: preserve hero, remove only the duplicate workflow section.
p=Path('research-education/index.html')
s=p.read_text(encoding='utf-8')
old='BAITSSS provides a working scientific desktop environment for teaching and research in evapotranspiration, soil water, irrigation, satellite data, and field-scale modeling. By providing the computational environment, more course and research time can be directed toward understanding the science, testing assumptions, analyzing results, and designing agricultural water-management studies.'
new='The desktop system can support coursework, student projects, graduate research, extension education, and collaborative studies where a reproducible field-scale modeling environment serves the academic question.'
if old not in s: raise SystemExit('Research hero source not found')
s=s.replace(old,new,1)
marker='<div class="section-kicker">01 · One scientific workflow</div>'
pos=s.find(marker)
if pos<0: raise SystemExit('Research workflow marker missing')
start=s.rfind('<section',0,pos)
next_section=s.find('<section',pos+len(marker))
if start<0 or next_section<0: raise SystemExit('Research workflow boundaries missing')
s=s[:start]+s[next_section:]
counter=[0]
def renum(m):
    counter[0]+=1
    return m.group(1)+f'{counter[0]:02d} · '
s=re.sub(r'(<div class="section-kicker">)\d+ · ',renum,s)
p.write_text(s,encoding='utf-8')

# Development & History: preserve full history page and remove only foreign product wording.
p=Path('meet-the-team/index.html')
s=p.read_text(encoding='utf-8')
repls={
'BAITSSS has developed through work in evapotranspiration, irrigation, remote sensing, soil water balance, field measurement, and scientific computing. The current desktop generation brings that scientific history into an integrated software system.':'The development record traces BAITSSS from its research origins through successive scientific and desktop software stages.',
'The current desktop software builds on this research history while reorganizing the model into a maintained project workflow for data preparation, simulation, Results, scientific inspection, and reproducible use.':'The current desktop generation is the latest stage in that development lineage.',
'The desktop implementation is developed around the established BAITSSS scientific capability set, with software verification kept distinct from scientific evaluation and comparison.':'Scientific changes remain governed by the established BAITSSS model lineage during desktop development.'}
for a,b in repls.items():
    if a not in s: raise SystemExit('History source text not found: '+a[:55])
    s=s.replace(a,b,1)
marker='<h2>Development history stays separate from product and evidence detail.</h2>'
pos=s.find(marker)
if pos>=0:
    start=s.rfind('<section',0,pos)
    end=s.find('</main>',pos)
    if start<0 or end<0: raise SystemExit('History routing boundaries missing')
    s=s[:start]+s[end:]
counter=[0]
def renum_history(m):
    counter[0]+=1
    return m.group(1)+f'{counter[0]:02d} · '
s=re.sub(r'(<div class="section-kicker">)\d+ · ',renum_history,s)
p.write_text(s,encoding='utf-8')

# Access & Participation: keep a compact collaboration example as the target of
# the existing Research & Education "MIT collaboration" link, without research-result detail.
p=Path('access-participation/index.html')
s=p.read_text(encoding='utf-8')
if 'id="mit-collaboration"' not in s:
    anchor='<section class="section"><div class="wrap"><div class="request-box">'
    idx=s.find(anchor)
    if idx<0: raise SystemExit('Access project collaboration anchor missing')
    block='''<section class="section" id="mit-collaboration"><div class="wrap"><div class="section-head"><div class="section-kicker">02 · Collaboration example</div><div><h2>MIT student collaboration</h2></div></div><article class="route" style="min-height:0;max-width:760px"><div class="num">UNIVERSITY RESEARCH</div><h3>Higher-resolution data for irrigation management</h3><p>A documented MIT student collaboration used BAITSSS within a university research project in Cheyenne County, Kansas.</p></article></div></section>\n'''
    s=s[:idx]+block+s[idx:]
s=s.replace('<div class="section-kicker">04 · Project collaboration</div>','<div class="section-kicker">03 · Project collaboration</div>',1)
p.write_text(s,encoding='utf-8')

# Acceptance checks
r=Path('research-education/index.html').read_text(encoding='utf-8')
h=Path('meet-the-team/index.html').read_text(encoding='utf-8')
a=Path('access-participation/index.html').read_text(encoding='utf-8')
assert '<section class="hero">' in r and 'Keep the scientific questions at the center.' in r
assert 'From field data to scientific interpretation' not in r
assert 'MIT collaboration' in r and '../access-participation/#mit-collaboration' in r
assert '<section class="hero">' in h and 'Research and development lineage' in h
assert '<main>\n</main>' not in h
assert 'id="mit-collaboration"' in a and '02 · Collaboration example' in a and '03 · Project collaboration' in a
print('Identity repair and numbering PASS')

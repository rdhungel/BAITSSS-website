from pathlib import Path
import re

# Research & Education: academic use only, not a miniature Science/Software page.
p=Path('research-education/index.html')
s=p.read_text(encoding='utf-8')
old='BAITSSS provides a working scientific desktop environment for teaching and research in evapotranspiration, soil water, irrigation, satellite data, and field-scale modeling. By providing the computational environment, more course and research time can be directed toward understanding the science, testing assumptions, analyzing results, and designing agricultural water-management studies.'
new='The desktop system can support coursework, student projects, graduate research, extension education, and collaborative studies where a reproducible field-scale modeling environment serves the academic question.'
if old not in s:
    raise SystemExit('Research hero text not found')
s=s.replace(old,new,1)
pat=re.compile(r'<section\b[^>]*>.*?<h2>From field data to scientific interpretation</h2>.*?</section>',re.S|re.I)
s,n=pat.subn('',s,count=1)
if n!=1:
    raise SystemExit('Research workflow section not found')
p.write_text(s,encoding='utf-8')

# Development & History: lineage and development stage only, not product identity.
p=Path('meet-the-team/index.html')
s=p.read_text(encoding='utf-8')
old='BAITSSS has developed through work in evapotranspiration, irrigation, remote sensing, soil water balance, field measurement, and scientific computing. The current desktop generation brings that scientific history into an integrated software system.'
new='The development record traces BAITSSS from its research origins through successive scientific and desktop-software stages.'
if old not in s:
    raise SystemExit('History hero text not found')
s=s.replace(old,new,1)
old2='The current desktop software builds on this research history while reorganizing the model into a maintained project workflow for data preparation, simulation, Results, scientific inspection, and reproducible use.'
new2='The current desktop generation is the latest stage in that development lineage.'
if old2 not in s:
    raise SystemExit('History lineage text not found')
s=s.replace(old2,new2,1)
s=s.replace('The desktop implementation is developed around the established BAITSSS scientific capability set, with software verification kept distinct from scientific evaluation and comparison.','Scientific changes remain governed by the established BAITSSS model lineage during desktop development.',1)
pat=re.compile(r'<section\b[^>]*>.*?<h2>Development history stays separate from product and evidence detail\.</h2>.*?</section>',re.S|re.I)
s,n=pat.subn('',s,count=1)
if n!=1:
    raise SystemExit('History routing section not found')
p.write_text(s,encoding='utf-8')

# FAQ: clarification only; Documentation owns navigation/indexing.
p=Path('faq/index.html')
s=p.read_text(encoding='utf-8')
s=s.replace('The FAQ is intentionally narrow. Capabilities, model science, software workflow, evidence, research use, access, and development history each have their own authority page.','The FAQ is intentionally narrow and answers interpretation questions that are not explained more appropriately elsewhere.',1)
pat=re.compile(r'<article class="faq"><h2>Where should I look for everything else\?</h2>.*?</article>',re.S|re.I)
s,n=pat.subn('',s,count=1)
if n!=1:
    raise SystemExit('FAQ directory article not found')
p.write_text(s,encoding='utf-8')

# Verify the foreign-identity blocks are gone.
checks={
'research-education/index.html':['From field data to scientific interpretation','BAITSSS provides a working scientific desktop environment for teaching and research in evapotranspiration'],
'meet-the-team/index.html':['The current desktop software builds on this research history while reorganizing the model','Development history stays separate from product and evidence detail.'],
'faq/index.html':['Where should I look for everything else?','Capabilities, model science, software workflow, evidence, research use, access, and development history each have their own authority page.']
}
for fn,terms in checks.items():
    txt=Path(fn).read_text(encoding='utf-8')
    for term in terms:
        if term in txt:
            raise SystemExit(f'{fn} still contains foreign identity: {term}')
print('Final semantic identity cleanup PASS')

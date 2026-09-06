from pathlib import Path
import re

# SOFTWARE: keep the workflow step, remove evidence-page language from it.
p=Path('software/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('Use independent observations and other suitable evidence, when available, to investigate model behavior and scientific performance.','Use the selected run and its exported products for the intended analysis or downstream evaluation.')
p.write_text(s,encoding='utf-8')

# CAPABILITIES: capability inventory only, not evidence philosophy.
p=Path('capabilities/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('The maintained desktop route preserves the established BAITSSS science while software verification, numerical equivalence, and independent scientific evaluation remain distinct forms of evidence.','The maintained desktop route preserves the established BAITSSS scientific formulation across supported workflows.')
p.write_text(s,encoding='utf-8')

# SCIENTIFIC STEWARDSHIP: interpretation principles only. Evidence taxonomy belongs to Evidence/FAQ.
p=Path('scientific-stewardship/index.html'); s=p.read_text(encoding='utf-8')
pat=re.compile(r'<article class="card">.*?<h3>Software proof is not field validation</h3>.*?</article>',re.S)
s,n=pat.subn('',s,count=1)
# tighten section heading if the grid now has three cards
s=s.replace('<h2>Keep the evidence boundary visible.</h2>','<h2>Keep interpretation tied to scale and traceability.</h2>',1)
p.write_text(s,encoding='utf-8')

# FAQ: genuine clarification, but point to Evidence rather than restating evidence categories.
p=Path('faq/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('No. Software verification and scientific evaluation answer different questions. Numerical equivalence, workflow reliability, field comparison, and published validation are kept separate on Evidence .','No. A completed run establishes that the workflow completed, not that a scientific conclusion has been validated. See <a href="../evidence/">Evidence</a>.')
# source HTML has embedded anchor, handle exact raw variant too
s=re.sub(r'No\. Software verification and scientific evaluation answer different questions\. Numerical equivalence, workflow reliability, field comparison, and published validation are kept separate on <a href="\.\./evidence/">Evidence</a>\.', 'No. A completed run establishes that the workflow completed, not that a scientific conclusion has been validated. See <a href="../evidence/">Evidence</a>.', s)
p.write_text(s,encoding='utf-8')

# RESEARCH & EDUCATION: academic-use identity, not a second product definition.
p=Path('research-education/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('BAITSSS provides a working scientific desktop environment for teaching and research in evapotranspiration, soil water, irrigation, satellite data, and field-scale modeling. By providing the computational environment, more time can be spent on scientific questions, assumptions, comparison, and interpretation.','The desktop system can support coursework, student projects, graduate research, and collaborative studies where the scientific question benefits from a reproducible field-scale modeling environment.')
s=s.replace('Compare BAITSSS with independent ET products, field observations, and other modeling approaches.','Design student or research exercises around comparison, interpretation, sensitivity, and reproducible analysis.')
p.write_text(s,encoding='utf-8')

# ACCESS & PARTICIPATION: engagement mechanics, not scientific-evidence content.
p=Path('access-participation/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('BAITSSS welcomes independent evaluation using field observations, flux measurements, irrigation records, remote-sensing products, or comparison with other models and ET systems.','Projects centered on independent evaluation can use the collaboration route to discuss scope, data responsibilities, and an appropriate evaluation plan.')
p.write_text(s,encoding='utf-8')

# DEVELOPMENT & HISTORY: history identity, not a second BAITSSS definition or release-notes summary.
p=Path('meet-the-team/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('BAITSSS has developed through work in evapotranspiration, irrigation, remote sensing, soil water balance, field measurement, and scientific computing. The current desktop generation brings that scientific history into an integrated project-based system.','The development record traces BAITSSS from its research origins through successive scientific and desktop-software stages.')
s=s.replace('Core workflow is implemented. Testing, packaging, documentation, and release preparation continue.','The current stage is pre-release development. Release-specific preparation is tracked in Release Notes.')
p.write_text(s,encoding='utf-8')

print('Final identity cleanup applied')

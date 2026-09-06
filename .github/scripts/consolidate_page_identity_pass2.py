from pathlib import Path
import re

# DOCUMENTATION: pure directory, no substantive summaries of destination pages.
p=Path('documentation/index.html'); s=p.read_text(encoding='utf-8')
main='''<main>
<section class="hero"><div class="wrap"><div class="eyebrow">Documentation</div><h1>BAITSSS reference index.</h1><p class="lede">A directory to the public workflow, reference, science, evidence, release, access, and support pages.</p></div></section>
<section class="section"><div class="wrap"><h2>Desktop and use</h2><div class="grid">
<a class="card" href="../software/"><div class="label">Software</div><h3>Desktop workflow</h3></a>
<a class="card" href="../example-project/"><div class="label">Tutorial</div><h3>Example project</h3></a>
<a class="card" href="../capabilities/"><div class="label">Inventory</div><h3>Capabilities</h3></a>
<a class="card" href="../system-requirements/"><div class="label">Platform</div><h3>System requirements</h3></a>
<a class="card" href="../faq/"><div class="label">Clarification</div><h3>Frequently Asked Questions</h3></a>
</div></div></section>
<section class="section"><div class="wrap"><h2>Science and record</h2><div class="grid">
<a class="card" href="../science/"><div class="label">Model</div><h3>Science</h3></a>
<a class="card" href="../evidence/"><div class="label">Verification</div><h3>Evidence</h3></a>
<a class="card" href="../published-science/"><div class="label">Studies</div><h3>Published Science</h3></a>
<a class="card" href="../research-geography/"><div class="label">Places and dates</div><h3>Research Geography &amp; Timeline</h3></a>
<a class="card" href="../origins-publications/"><div class="label">Literature</div><h3>Origins &amp; Publications</h3></a>
<a class="card" href="../scientific-stewardship/"><div class="label">Interpretation</div><h3>Scientific Stewardship</h3></a>
<a class="card" href="../citation/"><div class="label">Citation</div><h3>How to cite BAITSSS</h3></a>
</div></div></section>
<section class="section"><div class="wrap"><h2>Release, access, and support</h2><div class="grid">
<a class="card" href="../meet-the-team/"><div class="label">Development</div><h3>Development &amp; History</h3></a>
<a class="card" href="../release-notes/"><div class="label">Releases</div><h3>Release Notes</h3></a>
<a class="card" href="../known-issues/"><div class="label">Issues</div><h3>Known Issues</h3></a>
<a class="card" href="../access-participation/"><div class="label">Engagement</div><h3>Access &amp; Participation</h3></a>
<a class="card" href="../access-policy/"><div class="label">Policy</div><h3>Access Principles</h3></a>
<a class="card" href="../research-education/"><div class="label">Academic use</div><h3>Research &amp; Education</h3></a>
<a class="card" href="../contact/"><div class="label">Support</div><h3>Contact</h3></a>
</div></div></section>
</main>'''
s,n=re.subn(r'<main>.*?</main>',main,s,count=1,flags=re.S|re.I)
if n!=1: raise SystemExit('documentation replacement failed')
p.write_text(s,encoding='utf-8')

# ACCESS & PARTICIPATION: collaboration pathways only. Access rules belong to policy.
p=Path('access-participation/index.html'); s=p.read_text(encoding='utf-8')
# Replace hero text, preserving structure/classes.
s=re.sub(r'<h1>Access BAITSSS</h1>.*?</section>', '<h1>Ways to work with BAITSSS.</h1><p class="lede">Research groups, institutions, agencies, and projects can identify the collaboration pathway that matches their scientific or professional purpose. Software-access rules are maintained separately in <a href="../access-policy/">Access Principles</a>.</p></div></section>', s, count=1, flags=re.S)
# Remove compact collaboration-record routing section added in pass 1; it belongs elsewhere.
pat=re.compile(r'<section\b[^>]*>.*?</section>',re.S|re.I)
def drop_access_record(m):
    b=m.group(0)
    return '' if 'Examples are documented elsewhere.' in b else b
s=pat.sub(drop_access_record,s)
p.write_text(s,encoding='utf-8')

# ORIGINS & PUBLICATIONS: origin + bibliography only. Development history is separate.
p=Path('origins-publications/index.html'); s=p.read_text(encoding='utf-8')
s=s.replace('<h1>Scientific development over time.</h1><p class="hero-lede">BAITSSS developed through research on evapotranspiration, surface energy balance, soil-water accounting, irrigation, remote sensing, and later computational and desktop software development.</p>', '<h1>Scientific origin and publication record.</h1><p class="hero-lede">The scientific literature documents the origin, formulation, evaluation, and application of BAITSSS.</p>',1)
s=s.replace('<div class="label">Scientific record</div><p>The publication record documents the scientific development of BAITSSS. Current desktop development builds on that research history.</p>', '<div class="label">Page authority</div><p>This page is the bibliographic record. Current software development is documented separately.</p>',1)
pat=re.compile(r'<section\b[^>]*>.*?</section>',re.S|re.I)
def drop_origin_foreign(m):
    b=m.group(0)
    if '02 · Development timeline' in b or '03 · Research history' in b:
        return ''
    return b
s=pat.sub(drop_origin_foreign,s)
# Renumber publication kicker if present.
s=s.replace('04 · Selected peer-reviewed record','02 · Selected peer-reviewed record')
p.write_text(s,encoding='utf-8')

# RESEARCH GEOGRAPHY: geography and chronology only, no study-result summaries or desktop history.
p=Path('research-map/index.html'); s=p.read_text(encoding='utf-8')
geo={
'Near American Falls, Idaho':'Published BAITSSS study area near American Falls, Idaho; shown as an area because the paper does not provide one exact site coordinate.',
'San Joaquin County, California':'Published BAITSSS study area in San Joaquin County, California; shown at regional scale rather than as an invented point.',
'Near Visalia, California':'Two documented commercial citrus study sites near Visalia, California, approximately 15 km apart.',
'Yuma Valley, Arizona / Bard, California':'Documented BAITSSS study locations in the Yuma Valley and Bard agricultural region.',
'Northwest Kansas / Sheridan 6':'Documented BAITSSS research area in northwest Kansas, including the Sheridan 6 region.',
'Bushland, Texas':'Documented USDA-ARS field site at Bushland, Texas, with the published coordinate shown below.'}
for heading,text in geo.items():
    pattern=re.compile(r'(<h3>'+re.escape(heading)+r'</h3>)<p>.*?</p>',re.S)
    s,n=pattern.subn(r'\1<p>'+text+'</p>',s,count=1)
    if n!=1: raise SystemExit('research-map site not found: '+heading)
# Replace timeline with place-and-date chronology, not study findings.
new_timeline='''<section class="section"><div class="wrap"><h2>Research through time</h2><p class="section-copy">The timeline records when documented BAITSSS study locations entered the public research record. Scientific findings remain on Published Science and in the cited papers.</p><div class="timeline"><article class="event"><div class="year">2016</div><h3>Idaho and California</h3><p>Methodology study areas near American Falls and in San Joaquin County.</p></article><article class="event"><div class="year">2019</div><h3>Bushland, Texas</h3><p>Documented field-evaluation site.</p></article><article class="event"><div class="year">2020</div><h3>Northwest Kansas</h3><p>Documented landscape-scale application region.</p></article><article class="event"><div class="year">2023–2025</div><h3>Yuma and Bard</h3><p>Documented agricultural study locations in Arizona and California.</p></article><article class="event"><div class="year">2024</div><h3>Visalia, California</h3><p>Documented commercial citrus study sites.</p></article></div><div class="links"><a href="../published-science/">Published Science →</a><a href="../origins-publications/">Publication record →</a></div></div></section>'''
sections=list(re.finditer(r'<section\b[^>]*>.*?</section>',s,re.S|re.I))
replaced=False
for m in sections:
    if 'Research through time' in m.group(0):
        s=s[:m.start()]+new_timeline+s[m.end():]
        replaced=True
        break
if not replaced: raise SystemExit('research timeline section not found')
p.write_text(s,encoding='utf-8')

# SCIENTIFIC STEWARDSHIP: general interpretation rules only, not science/process restatement.
p=Path('scientific-stewardship/index.html'); s=p.read_text(encoding='utf-8')
new_main='''<main>
<section class="hero"><div class="wrap hero-grid"><div><div class="eyebrow"><span></span>Scientific Stewardship</div><h1>Keep observations, assumptions, model outputs, and conclusions distinct.</h1><p class="hero-lede">Scientific interpretation depends on knowing what was observed, what was supplied to the model, what BAITSSS calculated, and what evidence supports the conclusion.</p></div><aside class="hero-aside"><div class="label">Stewardship rule</div><p>Trace the conclusion back to the data, configuration, run, software version, and evidence that support it.</p></aside></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">01 · Classification</div><div><h2>Do not blur the source of a quantity.</h2></div></div><div class="grid three"><article class="card"><div class="tag">Observed</div><h3>Measurements and records</h3><p>Identify independent observations and records as observations, including their spatial and temporal scale.</p></article><article class="card"><div class="tag">Supplied</div><h3>Inputs and assumptions</h3><p>Identify project data, configuration, parameters, and management assumptions as supplied information.</p></article><article class="card"><div class="tag">Modeled</div><h3>Calculated quantities</h3><p>Identify BAITSSS outputs as modeled quantities rather than measurements.</p></article></div></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">02 · Interpretation</div><div><h2>Keep the evidence boundary visible.</h2></div></div><div class="grid two"><article class="card"><div class="tag">Scale</div><h3>Compare like with like</h3><p>Account for spatial support, temporal aggregation, timing, and measurement uncertainty before interpreting differences.</p></article><article class="card"><div class="tag">Traceability</div><h3>Tie conclusions to the actual run</h3><p>Interpretation should identify the project, period, configuration, data authority, software version, and Results used.</p></article><article class="card"><div class="tag">Scope</div><h3>Do not generalize beyond the evidence</h3><p>A result from one site, period, crop, or comparison does not establish universal performance.</p></article><article class="card"><div class="tag">Separation</div><h3>Software proof is not field validation</h3><p>Workflow verification, numerical equivalence, and scientific evaluation remain different forms of evidence.</p></article></div><div class="cta-row"><a class="button button-primary" href="../evidence/">Evidence</a><a class="button" href="../science/">Science</a></div></div></section>
</main>'''
s,n=re.subn(r'<main>.*?</main>',new_main,s,count=1,flags=re.S|re.I)
if n!=1: raise SystemExit('stewardship replacement failed')
p.write_text(s,encoding='utf-8')

# EXAMPLE PROJECT: procedure only. Remove capability/science explanations from steps.
p=Path('example-project/index.html'); s=p.read_text(encoding='utf-8')
repls={
'Use a field for which the project period is covered by the supported Landsat and NLDAS data path. BAITSSS already uses its registered base layers for land cover, elevation, Soil Field Capacity, and Soil Available Water Capacity.':'Choose a field and study period for which the required project data can be made ready before execution.',
'Use the AOI Viewer to locate the field and define or import the Area of Interest. Review the saved AOI against the available base information.':'Use the AOI Viewer to locate the field and define or import the Area of Interest. Confirm that the saved boundary is the intended study area.',
'Use File → Import → Landsat and File → Import → NLDAS. Review the registered archive and use Download Missing when required data are not yet present.':'Complete the Landsat and NLDAS readiness steps for the selected project period before execution.',
'Start the BAITSSS simulation for the selected period. BAITSSS advances the coupled water and energy balance hourly while carrying the model state forward through time.':'Start the selected run and monitor its progress to completion or a deliberate stop.',
'Open Results and examine evapotranspiration, soil water conditions, modeled irrigation behavior, spatial maps, and time series outputs for the selected run.':'Open Results and confirm that the intended run is selected before beginning analysis.',
'Export the available CSV tables and PNG figures or maps needed for analysis, reporting, teaching, or comparison. Preserve the run information, settings, assumptions, and input provenance with the project.':'Export the analysis products needed for the study and keep them associated with the selected run record.'}
for a,b in repls.items():
    if a not in s:
        # tolerate arrow-space normalization in source for import text
        if 'File → Import' in a:
            continue
        raise SystemExit('example text not found: '+a[:60])
    s=s.replace(a,b,1)
# Replace concluding tutorial interpretation paragraph with procedural close.
s=re.sub(r'<section\b[^>]*>.*?<h2>How to use this tutorial</h2>.*?</section>', '<section class="section"><div class="wrap"><h2>Repeat with a new run when the study changes.</h2><p>Keep each simulation period or supported configuration change as its own traceable run rather than altering the record of an earlier result.</p><div class="actions"><a class="button" href="../software/">Desktop workflow</a><a class="button" href="../capabilities/">Capabilities</a></div></div></section>', s, count=1, flags=re.S|re.I)
p.write_text(s,encoding='utf-8')

# Acceptance checks
for fn,forbidden in {
'documentation/index.html':['Project setup, data preparation, simulation, results, and export.','Energy balance, soil water, vegetation, atmospheric forcing'],
'origins-publications/index.html':['Current development implements the research model within a desktop application','Research history and current development'],
'research-map/index.html':['Current development reorganizes the research model into a Windows desktop scientific workflow','Compared citrus ET estimates with eddy covariance'],
'scientific-stewardship/index.html':['Modeled irrigation is not documented farmer-applied irrigation','Continuous hourly accounting'],
'example-project/index.html':['BAITSSS advances the coupled water and energy balance hourly','Open Results and examine evapotranspiration, soil water conditions']}.items():
    txt=Path(fn).read_text(encoding='utf-8')
    for term in forbidden:
        if term in txt: raise SystemExit(f'{fn} still contains foreign identity: {term}')
print('Page identity consolidation pass 2 PASS')

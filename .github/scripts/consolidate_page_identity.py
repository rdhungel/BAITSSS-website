from pathlib import Path
import re


def remove_section_with(path, needle):
    p=Path(path); s=p.read_text(encoding='utf-8')
    pat=re.compile(r'<section\b[^>]*>.*?</section>', re.S|re.I)
    found=False
    def repl(m):
        nonlocal found
        block=m.group(0)
        if needle in block:
            found=True
            return ''
        return block
    s2=pat.sub(repl,s)
    if not found:
        raise SystemExit(f'Could not find section {needle!r} in {path}')
    p.write_text(s2,encoding='utf-8')

# SCIENCE: the at-a-glance flow is now the overview authority. Remove the older
# component-card overview and start the detailed page with the governing balance.
p=Path('science/index.html'); s=p.read_text(encoding='utf-8')
pat=re.compile(r'<section\b[^>]*id="architecture"[^>]*>.*?</section>',re.S|re.I)
m=pat.search(s)
if not m or 'Model components' not in m.group(0):
    raise SystemExit('Science architecture overview section not found')
s=s[:m.start()]+s[m.end():]
s=s.replace('href="#architecture">Model architecture →','href="#governing-balance">Scientific formulation →')
s=s.replace('href="#architecture">Explore model components →','href="#governing-balance">Explore scientific formulation →')
# identify the governing-balance section without changing its visual structure
s=s.replace('<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">02 · Governing balance</div>', '<section class="section" id="governing-balance"><div class="wrap"><div class="section-head"><div class="section-kicker">02 · Governing balance</div>',1)
p.write_text(s,encoding='utf-8')

# SOFTWARE: own the desktop interface and workflow. Remove science, capability,
# release-status and benchmark explanations that have dedicated authority pages.
for heading in ['Current Release Status','How BAITSSS Runs the Model','What BAITSSS Produces','Computational Scale','Current Software Status']:
    remove_section_with('software/index.html',heading)
p=Path('software/index.html'); s=p.read_text(encoding='utf-8')
# Add a compact routing section before the footer, not another content summary.
route='''<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">Go deeper</div><div><h2>Use the page that owns the question.</h2><p class="section-intro">For the complete capability inventory, scientific formulation, evidence, or development status, continue to the corresponding authority page.</p></div></div><div class="release-links"><a href="../capabilities/">Capabilities →</a><a href="../science/">Science →</a><a href="../evidence/">Evidence →</a><a href="../meet-the-team/">Development &amp; History →</a></div></div></section>'''
if 'Use the page that owns the question.' not in s:
    s=s.replace('</main>',route+'</main>',1)
p.write_text(s,encoding='utf-8')

# FAQ: clarification only. Replace broad duplicated product/science/history/access
# explanations with a small set of genuine interpretation questions.
p=Path('faq/index.html'); s=p.read_text(encoding='utf-8')
new_main='''<main>
<section class="hero"><div class="wrap"><div class="eyebrow">Frequently Asked Questions</div><h1>Clarifications that do not belong on another page.</h1><p class="lede">The FAQ is intentionally narrow. Capabilities, model science, software workflow, evidence, research use, access, and development history each have their own authority page.</p></div></section>
<section class="faqs"><div class="wrap">
<article class="faq"><h2>Does BAITSSS forecast future ET or irrigation demand?</h2><p>No. The maintained BAITSSS route is a scientific simulation system, not a future-weather forecasting system. It runs defined periods using supported observations and forcing. See <a href="../capabilities/">Capabilities</a>.</p></article>
<article class="faq"><h2>Can I use alternative satellite or weather sources?</h2><p>The established route uses the supported Landsat and NLDAS pathways. Alternative forcing or satellite sources are not automatically interchangeable with those maintained routes. The Local Weather Station forcing route is listed separately as <strong>in development</strong> on <a href="../capabilities/">Capabilities</a>.</p></article>
<article class="faq"><h2>Does higher spatial resolution automatically improve BAITSSS accuracy?</h2><p>No. Finer spatial data may resolve field variability more clearly, but resolution alone does not establish scientific accuracy. The source must also be reliable, correctly timed, spatially compatible, and scientifically appropriate for the model.</p></article>
<article class="faq"><h2>Does BAITSSS simulate biological root growth?</h2><p>No. Vegetation state changes through the maintained vegetation route, while rooting depth is a scientific configuration where exposed. Biological root growth is not dynamically predicted through time.</p></article>
<article class="faq"><h2>Is observed Landsat thermal used to drive the model?</h2><p>No. BAITSSS models soil and canopy temperature internally. Observed Landsat surface temperature can be retained for independent selected-pixel comparison when a valid acquisition exists; it is not assimilated into the maintained model trajectory. See <a href="../science/">Science</a>.</p></article>
<article class="faq"><h2>Does BAITSSS use reference ET?</h2><p>The maintained weather route includes internal reference ET preparation, but BAITSSS evapotranspiration is not produced by applying a simple reference-ET multiplier or calibration factor. The ET solution comes from the coupled BAITSSS scientific formulation. See <a href="../science/">Science</a>.</p></article>
<article class="faq"><h2>Does a successful software run prove that the model is accurate?</h2><p>No. Software verification and scientific evaluation answer different questions. Numerical equivalence, workflow reliability, field comparison, and published validation are kept separate on <a href="../evidence/">Evidence</a>.</p></article>
<article class="faq"><h2>Where should I look for everything else?</h2><p><a href="../software/">Software</a> explains the desktop workflow. <a href="../capabilities/">Capabilities</a> lists what the maintained system can do. <a href="../science/">Science</a> explains the model. <a href="../research-education/">Research &amp; Education</a> covers academic use. <a href="../access-participation/">Access &amp; Participation</a> explains engagement pathways. <a href="../meet-the-team/">Development &amp; History</a> covers the development record.</p></article>
</div></section>
</main>'''
s2,n=re.subn(r'<main>.*?</main>',new_main,s,count=1,flags=re.S|re.I)
if n!=1: raise SystemExit('FAQ main replacement failed')
p.write_text(s2,encoding='utf-8')

# ACCESS & PARTICIPATION: own pathways and project engagement. Detailed examples
# and scientific outcomes belong to research/evidence/publication pages.
for heading in ['BAITSSS has already been used through funded, multi-institution research','BAITSSS described and used beyond its originating publications']:
    remove_section_with('access-participation/index.html',heading)
p=Path('access-participation/index.html'); s=p.read_text(encoding='utf-8')
compact='''<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">Collaboration record</div><div><h2>Examples are documented elsewhere.</h2><p class="section-intro">Published studies, institutional records, student work, and scientific comparisons are kept on the pages that document research and evidence rather than repeated here.</p></div></div><div class="actions"><a class="button" href="../research-education/">Research &amp; Education</a><a class="button" href="../published-science/">Published Science</a><a class="button" href="../evidence/">Evidence</a></div></div></section>'''
if 'Examples are documented elsewhere.' not in s:
    marker='<section'
    idx=s.find('Planning a project involving BAITSSS?')
    if idx<0: raise SystemExit('Access planning section not found')
    sec_start=s.rfind('<section',0,idx)
    s=s[:sec_start]+compact+s[sec_start:]
p.write_text(s,encoding='utf-8')

# DEVELOPMENT & HISTORY: own lineage and release stage, not desktop workflow or
# evidence directories.
for heading in ['Project setup through Results','Related scientific and project records']:
    remove_section_with('meet-the-team/index.html',heading)
p=Path('meet-the-team/index.html'); s=p.read_text(encoding='utf-8')
if 'For the desktop workflow, capability inventory, and evidence' not in s:
    note='''<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">Related authority</div><div><h2>Development history stays separate from product and evidence detail.</h2><p class="section-intro">For the desktop workflow, capability inventory, and evidence, use <a href="../software/">Software</a>, <a href="../capabilities/">Capabilities</a>, and <a href="../evidence/">Evidence</a>.</p></div></div></div></section>'''
    s=s.replace('</main>',note+'</main>',1)
p.write_text(s,encoding='utf-8')

# Basic acceptance checks
checks={
'science/index.html':['BAITSSS at a glance','Surface energy balance'],
'software/index.html':['One desktop scientific workflow.','See the actual desktop workflow','Prepare. Verify. Simulate. Examine. Evaluate.'],
'faq/index.html':['Clarifications that do not belong on another page.','Does a successful software run prove that the model is accurate?'],
'access-participation/index.html':['Ways to use and collaborate with BAITSSS','Examples are documented elsewhere.'],
'meet-the-team/index.html':['Research and development lineage','Testing and release preparation']}
for fn,terms in checks.items():
    txt=Path(fn).read_text(encoding='utf-8')
    for term in terms:
        if term not in txt: raise SystemExit(f'{fn} missing {term}')
# ensure removed identities are truly gone from their non-authority pages
for fn,terms in {
'software/index.html':['How BAITSSS Runs the Model','What BAITSSS Produces','Computational Scale','Current Software Status'],
'meet-the-team/index.html':['Project setup through Results','Related scientific and project records'],
'access-participation/index.html':['BAITSSS has already been used through funded, multi-institution research','BAITSSS described and used beyond its originating publications']}.items():
    txt=Path(fn).read_text(encoding='utf-8')
    for term in terms:
        if term in txt: raise SystemExit(f'{fn} still contains removed identity: {term}')
print('Page identity consolidation PASS')

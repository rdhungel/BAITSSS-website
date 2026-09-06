from pathlib import Path
import re

# Make the distinction visible in navigation and directory labels sitewide.
for p in Path('.').rglob('*.html'):
    s = p.read_text(encoding='utf-8')
    s2 = s.replace('>Development &amp; History</a>', '>Software Development &amp; History</a>')
    s2 = s2.replace('>Origins &amp; Publications</a>', '>Scientific History &amp; Publications</a>')
    if s2 != s:
        p.write_text(s2, encoding='utf-8')

# Software Development & History page: remove scientific-history ownership and make the software lineage explicit.
p = Path('meet-the-team/index.html')
s = p.read_text(encoding='utf-8')
s = s.replace('<title>Development &amp; History | BAITSSS</title>', '<title>Software Development &amp; History | BAITSSS</title>')
s = s.replace('content="BAITSSS scientific history, current desktop development, testing, release preparation, and project record."', 'content="BAITSSS software development history, desktop modernization, testing, packaging, release preparation, and current software status."')
s = s.replace('<div class="eyebrow"><span></span>Development &amp; History</div><h1>Scientific history, current development, and release status.</h1><p class="hero-lede">The development record traces BAITSSS from its research origins through successive scientific and desktop software stages.</p>', '<div class="eyebrow"><span></span>Software Development &amp; History</div><h1>From research code to maintained desktop software.</h1><p class="hero-lede">This page follows the software transition: how BAITSSS moved from research code into a project-based Windows desktop system, and how that software is being tested, packaged, and prepared for release.</p>')
old = '''<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">01 · Scientific history</div><div><h2>Research and development lineage</h2></div></div><p class="readable">The scientific development began with work at the University of Idaho, continued through research at Kansas State University, and was subsequently extended through work involving the USDA Agricultural Research Service and Desert Research Institute.</p><div class="lineage"><p class="readable">The current desktop generation is the latest stage in that development lineage.</p></div></div></section>'''
new = '''<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">01 · Software lineage</div><div><h2>Research code to desktop system</h2></div></div><div class="status-grid"><article class="status-card"><div class="label">Earlier stage</div><h3>Research implementation</h3><p>Earlier BAITSSS implementations were research-oriented code used to investigate and evaluate the scientific model.</p></article><article class="status-card"><div class="label">Transformation</div><h3>Desktop modernization</h3><p>The software was reorganized into a project-based desktop environment with structured data handling, validation, long-run execution, Results, recovery, provenance, and scientific export.</p></article><article class="status-card"><div class="label">Current stage</div><h3>Maintained desktop product</h3><p>Current work is focused on reliability, packaging, documentation, release preparation, and preserving scientific continuity while the desktop becomes the maintained software route.</p></article></div><div class="lineage"><p class="readable">The scientific origin, institutional history, and peer-reviewed model record are intentionally kept separate on <a href="../origins-publications/" style="color:var(--accent);font-weight:700">Scientific History &amp; Publications</a>.</p></div></div></section>'''
if old not in s:
    raise SystemExit('software history section not found')
s = s.replace(old, new)
s = s.replace('<div class="section-kicker">02 · Current development</div><div><h2>Testing and release preparation</h2>', '<div class="section-kicker">02 · Current software development</div><div><h2>Testing and release preparation</h2>')
p.write_text(s, encoding='utf-8')

# Scientific History & Publications page: make scientific ownership explicit and exclude software history.
p = Path('origins-publications/index.html')
s = p.read_text(encoding='utf-8')
s = s.replace('<title>Origins & Publications | BAITSSS</title>', '<title>Scientific History & Publications | BAITSSS</title>')
s = s.replace('content="Scientific origins, development history, and selected peer-reviewed BAITSSS publications."', 'content="BAITSSS scientific origin, institutional research lineage, model evolution, and selected peer-reviewed publications."')
s = s.replace('<div class="eyebrow"><span></span>Origins &amp; Publications</div><h1>Scientific origin and publication record.</h1><p class="hero-lede">The scientific literature documents the origin, formulation, evaluation, and application of BAITSSS.</p>', '<div class="eyebrow"><span></span>Scientific History &amp; Publications</div><h1>Scientific origin, evolution, and publication record.</h1><p class="hero-lede">This page follows the scientific model: where BAITSSS came from, how the research evolved across institutions and applications, and where that work appears in the peer-reviewed literature.</p>')
s = s.replace('<div class="label">Page authority</div><p>This page is the bibliographic record. Current software development is documented separately.</p>', '<div class="label">Scientific history</div><p>This page owns the model and publication history. Desktop modernization, packaging, and release work are documented separately under Software Development &amp; History.</p>')
s = s.replace('<div class="section-kicker">01 · Origins</div><div><h2>Between satellite observations</h2>', '<div class="section-kicker">01 · Scientific origin</div><div><h2>Between satellite observations</h2>')
p.write_text(s, encoding='utf-8')

# Permanent content-authority rule.
p = Path('SITE_CONTENT_AUTHORITY.md')
s = p.read_text(encoding='utf-8')
s = s.replace('- Development & History: scientific and software development history and current development stage.\n- Origins & Publications: bibliographic publication authority and scientific lineage.', '- Software Development & History: software lineage only, beginning with the transition from research code to the maintained desktop system; desktop architecture, testing, recovery, packaging, release preparation, and current software status belong here.\n- Scientific History & Publications: scientific model history only; origin, institutions, research evolution, documented collaborations in the scientific record, and peer-reviewed publications belong here.')
marker = '## Preservation of documented scientific history\n'
addition = '''## Scientific history versus software history\n\nThese are separate records and must remain visually and editorially distinct. Scientific History & Publications explains the model lineage and published research. Software Development & History explains the transformation and maintenance of the desktop software. A page may cross-link to the other history, but it must not retell the other page's timeline.\n\n'''
if addition not in s:
    s = s.replace(marker, addition + marker)
p.write_text(s, encoding='utf-8')

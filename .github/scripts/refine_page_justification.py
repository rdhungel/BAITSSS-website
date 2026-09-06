from pathlib import Path
import re

# 1) Documentation: keep it a useful directory, but remove pre-release placeholder destinations
# from the visible directory and add one-line navigational descriptions so the page does not feel empty.
p = Path('documentation/index.html')
s = p.read_text(encoding='utf-8')
repls = {
'<a class="card" href="../software/"><div class="label">Software</div><h3>Desktop workflow</h3></a>': '<a class="card" href="../software/"><div class="label">Software</div><h3>Desktop workflow</h3><p>See the maintained desktop workflow and interface.</p></a>',
'<a class="card" href="../example-project/"><div class="label">Tutorial</div><h3>Example project</h3></a>': '<a class="card" href="../example-project/"><div class="label">Tutorial</div><h3>Example project</h3><p>Follow one seasonal field from setup through Results.</p></a>',
'<a class="card" href="../capabilities/"><div class="label">Inventory</div><h3>Capabilities</h3></a>': '<a class="card" href="../capabilities/"><div class="label">Inventory</div><h3>Capabilities</h3><p>Review established, proven, and in-development user-visible functions.</p></a>',
'<a class="card" href="../system-requirements/"><div class="label">Platform</div><h3>System requirements</h3></a>': '<a class="card" href="../system-requirements/"><div class="label">Platform</div><h3>System requirements</h3><p>Check the supported Windows environment and installation requirements.</p></a>',
'<a class="card" href="../faq/"><div class="label">Clarification</div><h3>Frequently Asked Questions</h3></a>': '<a class="card" href="../faq/"><div class="label">Clarification</div><h3>Frequently Asked Questions</h3><p>Read short answers to recurring interpretation questions.</p></a>',
'<a class="card" href="../science/"><div class="label">Model</div><h3>Science</h3></a>': '<a class="card" href="../science/"><div class="label">Model</div><h3>Science</h3><p>Understand the coupled scientific formulation and model processes.</p></a>',
'<a class="card" href="../evidence/"><div class="label">Verification</div><h3>Evidence</h3></a>': '<a class="card" href="../evidence/"><div class="label">Verification</div><h3>Evidence</h3><p>See what has been evaluated, compared, and numerically verified.</p></a>',
'<a class="card" href="../published-science/"><div class="label">Studies</div><h3>Published Science</h3></a>': '<a class="card" href="../published-science/"><div class="label">Studies</div><h3>Published Science</h3><p>View selected published results and scientific figures.</p></a>',
'<a class="card" href="../research-geography/"><div class="label">Places and dates</div><h3>Research Geography &amp; Timeline</h3></a>': '<a class="card" href="../research-geography/"><div class="label">Places and dates</div><h3>Research Geography &amp; Timeline</h3><p>See documented study locations and the research timeline.</p></a>',
'<a class="card" href="../origins-publications/"><div class="label">Literature</div><h3>Origins &amp; Publications</h3></a>': '<a class="card" href="../origins-publications/"><div class="label">Literature</div><h3>Origins &amp; Publications</h3><p>Use the bibliographic record and scientific lineage.</p></a>',
'<a class="card" href="../scientific-stewardship/"><div class="label">Interpretation</div><h3>Scientific Stewardship</h3></a>': '<a class="card" href="../scientific-stewardship/"><div class="label">Interpretation</div><h3>Scientific Stewardship</h3><p>Keep observed, supplied, modeled, and concluded quantities distinct.</p></a>',
'<a class="card" href="../citation/"><div class="label">Citation</div><h3>How to cite BAITSSS</h3></a>': '<a class="card" href="../citation/"><div class="label">Citation</div><h3>How to cite BAITSSS</h3><p>Find the scientific and software citation guidance.</p></a>',
'<a class="card" href="../meet-the-team/"><div class="label">Development</div><h3>Development &amp; History</h3></a>': '<a class="card" href="../meet-the-team/"><div class="label">Development</div><h3>Development &amp; History</h3><p>Follow the scientific and software development record.</p></a>',
'<a class="card" href="../access-participation/"><div class="label">Engagement</div><h3>Access &amp; Participation</h3></a>': '<a class="card" href="../access-participation/"><div class="label">Engagement</div><h3>Access &amp; Participation</h3><p>See the available routes for projects, institutions, and collaborators.</p></a>',
'<a class="card" href="../access-policy/"><div class="label">Policy</div><h3>Access Principles</h3></a>': '<a class="card" href="../access-policy/"><div class="label">Policy</div><h3>Access Principles</h3><p>Read the principles that govern software access and use.</p></a>',
'<a class="card" href="../research-education/"><div class="label">Academic use</div><h3>Research &amp; Education</h3></a>': '<a class="card" href="../research-education/"><div class="label">Academic use</div><h3>Research &amp; Education</h3><p>Explore research, teaching, student work, and collaboration examples.</p></a>',
'<a class="card" href="../contact/"><div class="label">Support</div><h3>Contact</h3></a>': '<a class="card" href="../contact/"><div class="label">Contact</div><h3>Contact BAITSSS</h3><p>Send a research, software, access, or collaboration inquiry.</p></a>'
}
for a,b in repls.items():
    s = s.replace(a,b)
# remove placeholder release pages from the visible directory until there is a verified release record
s = re.sub(r'\n<a class="card" href="\.\./release-notes/">.*?</a>', '', s, flags=re.S)
s = re.sub(r'\n<a class="card" href="\.\./known-issues/">.*?</a>', '', s, flags=re.S)
s = s.replace('<h2>Release, access, and support</h2>', '<h2>Access, development, and support</h2>')
p.write_text(s, encoding='utf-8')

# 2) Replace any user-facing links that still route through old redirect pages.
for p in Path('.').rglob('*.html'):
    text = p.read_text(encoding='utf-8')
    text2 = text.replace('href="../development-status/"', 'href="../meet-the-team/"')
    text2 = text2.replace('href="development-status/"', 'href="meet-the-team/"')
    text2 = text2.replace('href="../research-map/"', 'href="../research-geography/"')
    if text2 != text:
        p.write_text(text2, encoding='utf-8')

# 3) Sitemap should contain only real public authority pages, not redirect or placeholder pages.
p = Path('sitemap.xml')
s = p.read_text(encoding='utf-8')
s = s.replace('  <url><loc>https://baitsss.com/development-status/</loc></url>\n', '')
for url in [
    'https://baitsss.com/capabilities/',
    'https://baitsss.com/published-science/',
    'https://baitsss.com/research-geography/',
    'https://baitsss.com/faq/',
    'https://baitsss.com/origins-publications/',
    'https://baitsss.com/documentation/',
    'https://baitsss.com/system-requirements/',
    'https://baitsss.com/citation/'
]:
    entry = f'  <url><loc>{url}</loc></url>\n'
    if entry not in s:
        s = s.replace('</urlset>', entry + '</urlset>')
p.write_text(s, encoding='utf-8')

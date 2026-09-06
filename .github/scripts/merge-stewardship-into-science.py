from pathlib import Path
import re

science_path = Path('science/index.html')
steward_path = Path('scientific-stewardship/index.html')
science = science_path.read_text(encoding='utf-8')
steward = steward_path.read_text(encoding='utf-8')

# Preserve both existing bodies, but make Science the single public authority.
sci_main = re.search(r'<main>(.*)</main>', science, flags=re.S)
stew_main = re.search(r'<main>(.*)</main>', steward, flags=re.S)
if not sci_main or not stew_main:
    raise SystemExit('Could not locate main content in Science or Scientific Stewardship')

sci_body = sci_main.group(1)
stew_body = stew_main.group(1)

# Remove the standalone stewardship hero; the combined Science page gets one shared hero.
stew_body = re.sub(r'^\s*<section class="hero">.*?</section>\s*', '', stew_body, count=1, flags=re.S)

# Remove the old Science hero; it becomes the opening of the second equal part.
science_hero_match = re.match(r'\s*<section class="hero">(.*?)</section>\s*', sci_body, flags=re.S)
if not science_hero_match:
    raise SystemExit('Science hero not found')
science_hero_inner = science_hero_match.group(1)
sci_rest = sci_body[science_hero_match.end():]

science_lede = re.search(r'<p class="hero-lede">(.*?)</p>', science_hero_inner, flags=re.S)
science_note = re.search(r'<p class="hero-note">(.*?)</p>', science_hero_inner, flags=re.S)
if not science_lede or not science_note:
    raise SystemExit('Science hero text not found')

shared_hero = '''<section class="hero" id="science-top"><div class="wrap hero-grid"><div><div class="eyebrow"><span></span>Science</div><h1>Scientific stewardship and BAITSSS model science.</h1><p class="hero-lede">The scientific responsibility of BAITSSS has two equal parts: understanding how a result should be traced, evaluated, and interpreted, and understanding the physical model that produces that result. Scientific stewardship comes first here because the meaning of a model result depends on the evidence, assumptions, uncertainty, and context carried with it.</p><div class="glance-links" style="margin-top:24px"><a href="#scientific-stewardship">Scientific Stewardship →</a><a href="#baitsss-model-science">BAITSSS Model Science →</a></div></div><aside class="hero-aside"><div class="label">Two parts of one scientific record</div><p><strong>Scientific Stewardship</strong> addresses evidence, interpretation, uncertainty, validation, provenance, and reporting.</p><p><strong>BAITSSS model science</strong> addresses the coupled energy balance, soil water, vegetation, forcing, temperature, and irrigation processes.</p></aside></div></section>'''

stew_intro = '''<section class="section" id="scientific-stewardship"><div class="wrap"><div class="section-head"><div class="section-kicker">Part I</div><div><h2>Scientific Stewardship</h2><p class="section-intro">A model result is scientifically useful only when its origin, configuration, evidence, uncertainty, limitations, and interpretation remain visible. The following stewardship story comes before the model formulation for that reason.</p></div></div></div></section>'''

science_intro = f'''<section class="section" id="baitsss-model-science"><div class="wrap"><div class="section-head"><div class="section-kicker">Part II</div><div><h2>BAITSSS Model Science</h2><p class="section-intro">{science_lede.group(1)}</p><p class="section-intro">{science_note.group(1)}</p></div></div></div></section>'''

combined_main = '<main>' + shared_hero + stew_intro + stew_body + science_intro + sci_rest + '</main>'
science = science[:sci_main.start()] + combined_main + science[sci_main.end():]

science = science.replace(
    'content="The scientific structure of the BAITSSS model: coupled energy balance, soil water, vegetation, weather, and irrigation logic."',
    'content="Scientific stewardship and BAITSSS model science: evidence, interpretation, uncertainty, validation, provenance, coupled energy balance, soil water, vegetation, weather, and irrigation logic."'
)
science = science.replace('<a href="../scientific-stewardship/">Scientific Stewardship</a>', '')
science_path.write_text(science, encoding='utf-8')

redirect = '''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0; url=../science/#scientific-stewardship"><link rel="canonical" href="../science/#scientific-stewardship"><meta name="robots" content="noindex"><title>Scientific Stewardship | BAITSSS</title></head><body><p>Scientific Stewardship is now part of <a href="../science/#scientific-stewardship">Science</a>.</p></body></html>'''
steward_path.write_text(redirect, encoding='utf-8')

patterns = [
    '<a href="../scientific-stewardship/">Scientific Stewardship</a>',
    '<a class="active" href="../scientific-stewardship/">Scientific Stewardship</a>',
    '<a href="./scientific-stewardship/">Scientific Stewardship</a>',
]
for p in Path('.').rglob('*.html'):
    if '.git' in p.parts or p == steward_path:
        continue
    text = p.read_text(encoding='utf-8')
    new = text
    for pat in patterns:
        new = new.replace(pat, '')
    new = new.replace('href="../scientific-stewardship/"', 'href="../science/#scientific-stewardship"')
    if new != text:
        p.write_text(new, encoding='utf-8')

print('Merged Scientific Stewardship into Science with stewardship first and model science second')

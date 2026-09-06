from pathlib import Path

p = Path('science/index.html')
s = p.read_text(encoding='utf-8')

css_anchor = '.section{padding:56px 0;border-bottom:1px solid var(--line)}'
css = '''.science-glance{padding:44px 0 50px;border-bottom:1px solid var(--line);background:#081522}.glance-head{max-width:920px;margin-bottom:28px}.glance-head .mini{margin-bottom:10px}.glance-head h2{margin:0;font-size:clamp(30px,3.4vw,42px);line-height:1.14;letter-spacing:-.025em}.glance-head p{margin:14px 0 0;color:var(--text-dim);font-size:16px;line-height:1.72}.glance-flow{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;align-items:stretch}.glance-step{position:relative;min-height:154px;padding:18px 16px;border:1px solid var(--line-strong);border-radius:12px;background:rgba(255,255,255,.018)}.glance-step:not(:last-child)::after{content:"›";position:absolute;right:-9px;top:50%;transform:translateY(-50%);z-index:2;width:18px;height:26px;display:flex;align-items:center;justify-content:center;background:#081522;color:var(--accent);font-size:24px}.glance-step .glabel{margin-bottom:9px;color:var(--accent);font-size:10.5px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}.glance-step h3{margin:0 0 8px;font-size:16px;line-height:1.3}.glance-step p{margin:0;color:var(--text-dim);font-size:12.8px;line-height:1.55}.glance-links{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}.glance-links a{display:inline-flex;align-items:center;min-height:40px;padding:0 13px;border:1px solid var(--line-strong);border-radius:7px;color:#dce8f2;text-decoration:none;font-size:13.5px;font-weight:700}.glance-links a:first-child{border-color:rgba(201,238,130,.28);color:var(--accent)}.glance-links a:hover{border-color:var(--accent);color:var(--accent)}@media(max-width:1080px){.glance-flow{grid-template-columns:repeat(3,1fr)}.glance-step:nth-child(3)::after{display:none}}@media(max-width:700px){.science-glance{padding:36px 0 40px}.glance-flow{grid-template-columns:1fr}.glance-step{min-height:0}.glance-step::after{display:none!important}}'''
if css not in s:
    if css_anchor not in s:
        raise SystemExit('CSS anchor not found')
    s = s.replace(css_anchor, css + css_anchor, 1)

hero_end = '</section>\n<section class="section" id="architecture">'
section = '''</section>\n<section class="science-glance" aria-labelledby="science-at-a-glance"><div class="wrap"><div class="glance-head"><div class="mini">BAITSSS at a glance</div><h2>Satellite observations and hourly forcing drive a coupled field scale energy and water balance.</h2><p>BAITSSS links a 30 m Landsat based field grid with vegetation state, hourly meteorological forcing, a two-source energy balance, a two-layer soil-water balance, modeled irrigation, and hour to hour state progression to produce spatial and time-series Results.</p></div><div class="glance-flow"><article class="glance-step"><div class="glabel">Observation</div><h3>Landsat and field grid</h3><p>Landsat 7, 8, and 9, NDVI, LAI, and the 30 m model grid establish vegetation and spatial context.</p></article><article class="glance-step"><div class="glabel">Atmosphere</div><h3>Hourly forcing</h3><p>Meteorological forcing and reference ET preparation provide the changing atmospheric conditions for each model hour.</p></article><article class="glance-step"><div class="glabel">Energy</div><h3>Two-source balance</h3><p>Soil and canopy exchange are represented separately, partitioning evaporation and transpiration within total ET.</p></article><article class="glance-step"><div class="glabel">Water</div><h3>Two-layer soil water</h3><p>Surface and root-zone water states are carried forward and coupled to the hourly energy balance.</p></article><article class="glance-step"><div class="glabel">Management</div><h3>Modeled irrigation</h3><p>Configured vegetation, soil-water, and management conditions determine modeled irrigation response.</p></article><article class="glance-step"><div class="glabel">Results</div><h3>Field to selected pixel</h3><p>ET, soil water, irrigation, thermal behavior, spatial variability, time series, and selected 30 m pixel histories remain tied to the run.</p></article></div><div class="glance-links"><a href="#architecture">Explore model components →</a><a href="../published-science/">Published science →</a><a href="../evidence/">Scientific evidence →</a></div></div></section>\n<section class="section" id="architecture">'''
if 'id="science-at-a-glance"' not in s and 'BAITSSS at a glance' not in s:
    if hero_end not in s:
        raise SystemExit('Hero insertion anchor not found')
    s = s.replace(hero_end, section, 1)

# Give the heading its id for the aria reference.
s = s.replace('<h2>Satellite observations and hourly forcing drive a coupled field scale energy and water balance.</h2>', '<h2 id="science-at-a-glance">Satellite observations and hourly forcing drive a coupled field scale energy and water balance.</h2>', 1)

# Acceptance checks
required = [
    'BAITSSS at a glance', 'Landsat and field grid', 'Hourly forcing',
    'Two-source balance', 'Two-layer soil water', 'Modeled irrigation',
    'Field to selected pixel', '../published-science/', '../evidence/'
]
for item in required:
    if item not in s:
        raise SystemExit(f'Missing required item: {item}')
if 'Fundamental equations' in s and '.pdf' in s:
    raise SystemExit('Unexpected unverified equation PDF link')

p.write_text(s, encoding='utf-8')
print('Science glance section added and verified')

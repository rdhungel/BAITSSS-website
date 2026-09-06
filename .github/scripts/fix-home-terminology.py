from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="BAITSSS is Windows desktop scientific software for field-scale evapotranspiration, soil water, and irrigation analysis."': 'content="BAITSSS Desktop is Windows desktop scientific software for field-scale evapotranspiration, soil water, and irrigation analysis."',
    'BAITSSS IS A SCIENTIFIC MODELING SYSTEM FOR FIELD-SCALE EVAPOTRANSPIRATION, SOIL WATER, AND IRRIGATION ANALYSIS.': 'BAITSSS DESKTOP IS A SCIENTIFIC SOFTWARE SYSTEM BUILT AROUND THE BAITSSS MODEL FOR FIELD-SCALE EVAPOTRANSPIRATION, SOIL WATER, AND IRRIGATION ANALYSIS.',
    '>Access BAITSSS<': '>Access BAITSSS Desktop<',
    'aria-label="BAITSSS runtime architecture animation"': 'aria-label="BAITSSS Desktop runtime architecture animation"',
    'title="BAITSSS runtime architecture animation"': 'title="BAITSSS Desktop runtime architecture animation"',
    'within the same BAITSSS project.': 'within the same BAITSSS Desktop project.',
    '>See your field in BAITSSS<': '>See your field in BAITSSS Desktop<',
    'BAITSSS guides a project from field definition': 'BAITSSS Desktop guides a project from field definition',
    '>Open BAITSSS<': '>Open BAITSSS Desktop<',
    'inside one BAITSSS project.': 'inside one BAITSSS Desktop project.',
    'BAITSSS shows the saved AOI directly on the map.': 'BAITSSS Desktop shows the saved AOI directly on the map.',
    'BAITSSS displays the AOI over': 'BAITSSS Desktop displays the AOI over',
    'part of the BAITSSS system.': 'part of the BAITSSS Desktop system.',
    'period you want BAITSSS to simulate.': 'period you want the BAITSSS model to simulate.',
    '>Download Landsat and NLDAS from BAITSSS<': '>Download Landsat and NLDAS from BAITSSS Desktop<',
    'The BAITSSS desktop already works with': 'BAITSSS Desktop already works with',
    'shown in the BAITSSS import workflow.': 'shown in the BAITSSS Desktop import workflow.',
    '>Explore the complete BAITSSS capability set<': '>Explore the complete BAITSSS Desktop capability set<',
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

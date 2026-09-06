from pathlib import Path

p = Path('example-project/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'BAITSSS already uses its registered base layers for land cover, elevation, Soil Field Capacity, and Soil Available Water Capacity.': 'BAITSSS Desktop already uses its registered base layers for land cover, elevation, Soil Field Capacity, and Soil Available Water Capacity.',
    'Open BAITSSS and create a new project.': 'Open BAITSSS Desktop and create a new project.',
    'data readiness is complete for the selected period before running the model.': 'data readiness is complete for the selected period before running the BAITSSS model.',
    'Start the BAITSSS simulation for the selected period. BAITSSS advances the coupled water and energy balance hourly while carrying the model state forward through time.': 'Start the BAITSSS model simulation for the selected period in BAITSSS Desktop. The BAITSSS model advances the coupled water and energy balance hourly while carrying the model state forward through time.',
    'BAITSSS software version used.': 'BAITSSS Desktop version used.'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

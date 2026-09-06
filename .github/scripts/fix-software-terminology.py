from pathlib import Path

p = Path('software/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="BAITSSS Desktop organizes project inputs, scientific checks, hourly simulation, Results, and scientific exports in one Windows desktop workflow."': 'content="BAITSSS Desktop organizes project inputs, scientific checks, execution of the BAITSSS model, Results, and scientific exports in one Windows desktop workflow."',
    'BAITSSS Desktop organizes project definition, scientific input checks, hourly simulation, Results inspection, and export within one persistent project environment.': 'BAITSSS Desktop organizes project definition, scientific input checks, hourly execution of the BAITSSS model, Results inspection, and export within one persistent project environment.',
    'Organize Landsat, weather, terrain, soil, land cover, and other required model inputs while keeping readiness visible.': 'Organize Landsat, weather, terrain, soil, land cover, and other required BAITSSS model inputs while keeping readiness visible.',
    'Review execution status, progress, and the current simulation while the hourly model advances.': 'Review execution status, progress, and the current simulation while the BAITSSS model advances hour by hour.',
    'Run the continuous hourly water and energy balance while preserving the state carried from one hour to the next.': 'Run the BAITSSS model continuous hourly water and energy balance while preserving the state carried from one hour to the next.',
    '<strong>BAITSSS</strong><br>A scientific model and desktop software.<br>BAITSSS Desktop is under active development.': '<strong>BAITSSS</strong><br>The BAITSSS model is the scientific model. BAITSSS Desktop is the current software application.<br>BAITSSS Desktop is under active development.',
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

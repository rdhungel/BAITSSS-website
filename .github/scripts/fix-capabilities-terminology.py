from pathlib import Path

p = Path('capabilities/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="Established BAITSSS capabilities for desktop projects, spatial modeling, Landsat, hourly weather, evapotranspiration, soil water, modeled irrigation, thermal comparison, Results, pixel analysis, export, recovery, and reproducible research."': 'content="Established BAITSSS Desktop capabilities for desktop projects, spatial modeling, Landsat, hourly weather, execution of the BAITSSS model, Results, pixel analysis, export, recovery, and reproducible research."',
    '<h1>What BAITSSS can do as one integrated scientific system.</h1>': '<h1>What BAITSSS Desktop can do as one integrated scientific system.</h1>',
    '<p class="lede">BAITSSS connects field definition, environmental data, hourly water and energy balance, evapotranspiration, soil water, modeled irrigation, thermal analysis, spatial Results, selected pixel science, scientific export, and reproducible run management within one Windows desktop workflow.</p>': '<p class="lede">BAITSSS Desktop connects field definition, environmental data, execution of the BAITSSS model, evapotranspiration, soil water, modeled irrigation, thermal analysis, spatial Results, selected pixel science, scientific export, and reproducible run management within one Windows desktop workflow.</p>',
    'The maintained BAITSSS workflow combines project setup, AOI definition, Landsat and environmental preparation, hourly forcing, scientific execution, long run recovery, Results inspection, selected pixel analysis, and export without separating the science from the project record.': 'The maintained BAITSSS Desktop workflow combines project setup, AOI definition, Landsat and environmental preparation, hourly forcing, execution of the BAITSSS model, long run recovery, Results inspection, selected pixel analysis, and export without separating the science from the project record.',
    '<li>BAITSSS base data library for supported layers</li>': '<li>BAITSSS Desktop base data library for supported layers</li>',
    '<h3>Core BAITSSS science</h3>': '<h3>Core BAITSSS model science</h3>',
    '<li>Compare BAITSSS outputs with independent ET or flux observations</li>': '<li>Compare BAITSSS model outputs with independent ET or flux observations</li>',
    '<p class="section-intro">BAITSSS supports reproducible scientific analysis without changing the underlying model science for presentation purposes.</p>': '<p class="section-intro">BAITSSS Desktop supports reproducible scientific analysis without changing the underlying BAITSSS model science for presentation purposes.</p>',
    'The maintained desktop route preserves the established BAITSSS scientific formulation across supported workflows.': 'The maintained BAITSSS Desktop route preserves the established BAITSSS model formulation across supported workflows.',
    'It is not presented as currently available until end-to-end execution through BAITSSS is proven.': 'It is not presented as currently available until end-to-end execution through BAITSSS Desktop is proven.',
    '<li>Conditioning into BAITSSS forcing</li>': '<li>Conditioning into forcing required by the BAITSSS model</li>',
    'the route is intended to execute through the normal BAITSSS scientific engine.': 'the route is intended to execute through the normal BAITSSS Desktop path for the BAITSSS model.',
    '<footer class="footer"><div class="wrap footer-inner"><div><strong>BAITSSS</strong><br>Scientific desktop software for field-scale water and energy analysis.</div>': '<footer class="footer"><div class="wrap footer-inner"><div><strong>BAITSSS Desktop</strong><br>Scientific desktop software built around the BAITSSS model for field-scale water and energy analysis.</div>',
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

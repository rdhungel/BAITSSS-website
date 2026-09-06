from pathlib import Path

p = Path('origins-publications/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="BAITSSS scientific origin, peer-reviewed publications, published study results, documented research geography, and scientific and software evidence."': 'content="BAITSSS model scientific origin, peer-reviewed publications, published study results, documented research geography, and BAITSSS Desktop software evidence."',
    'This page follows the scientific model: where BAITSSS came from, how the research evolved across institutions and applications, and where that work appears in the peer-reviewed literature.': 'This page follows the BAITSSS model: where the model came from, how the research evolved across institutions and applications, and where that work appears in the peer-reviewed literature.',
    'Field processes continue between satellite observations. BAITSSS was developed to carry the water and energy balance': 'Field processes continue between satellite observations. The BAITSSS model was developed to carry the water and energy balance',
    'Selected peer-reviewed BAITSSS publications verified from the reviewed publication sources.': 'Selected peer-reviewed BAITSSS model publications verified from the reviewed publication sources.',
    'This visual set follows major stages of the BAITSSS record:': 'This visual set follows major stages of the BAITSSS model record:',
    'BAITSSS carries water and energy balance between observations': 'BAITSSS model carries water and energy balance between observations',
    'The paper introduced the BAITSSS framework': 'The paper introduced the BAITSSS model framework',
    '<div>BAITSSS</div>': '<div>BAITSSS model</div>',
    '<strong>Question:</strong> How does BAITSSS perform without prior site calibration': '<strong>Question:</strong> How does the BAITSSS model perform without prior site calibration',
    'not as a universal BAITSSS accuracy claim.': 'not as a universal BAITSSS model accuracy claim.',
    'alt="Kansas 2013 BAITSSS total evapotranspiration result"': 'alt="Kansas 2013 BAITSSS model total evapotranspiration result"',
    '<strong>Question:</strong> How do BAITSSS and OpenET ET estimates compare': '<strong>Question:</strong> How do BAITSSS model and OpenET ET estimates compare',
    'BAITSSS ET results were generated using actual irrigation records': 'BAITSSS model ET results were generated using actual irrigation records',
    'EC 908 mm · OpenET ensemble 1169 mm · BAITSSS 867 mm': 'EC 908 mm · OpenET ensemble 1169 mm · BAITSSS model 867 mm',
    'BAITSSS totals were within about ±10%': 'BAITSSS model totals were within about ±10%',
    'from the BAITSSS research program.': 'from the BAITSSS model research program.',
    'BAITSSS can be used to examine how different soil representations influence': 'The BAITSSS model can be used to examine how different soil representations influence',
    'while BAITSSS is evaluated with POLARIS and SSURGO soil representations.': 'while the BAITSSS model is evaluated with POLARIS and SSURGO soil representations.',
    'Published BAITSSS study area near American Falls': 'Published BAITSSS model study area near American Falls',
    'Published BAITSSS study area in San Joaquin County': 'Published BAITSSS model study area in San Joaquin County',
    'Documented BAITSSS study locations in the Yuma Valley': 'Documented BAITSSS model study locations in the Yuma Valley',
    'Documented BAITSSS research area in northwest Kansas': 'Documented BAITSSS model research area in northwest Kansas',
    'The timeline records when documented BAITSSS study locations entered the public research record.': 'The timeline records when documented BAITSSS model study locations entered the public research record.',
    'This separation is central to interpreting BAITSSS results correctly.': 'This separation is central to interpreting BAITSSS model results correctly.',
    'How do BAITSSS outputs compare with independent observations or products': 'How do BAITSSS model outputs compare with independent observations or products',
    'BAITSSS has a peer-reviewed publication record': 'The BAITSSS model has a peer-reviewed publication record',
    '<h2>Tests of the desktop execution system</h2>': '<h2>Tests of the BAITSSS Desktop execution system</h2>',
    'These tests address whether the software executes the intended scientific workflow reliably.': 'These tests address whether BAITSSS Desktop executes the intended BAITSSS model scientific workflow reliably.',
    'Modernized execution methods are compared with the accepted scientific reference': 'BAITSSS Desktop execution methods are compared with the accepted BAITSSS model scientific reference',
    'Project inputs, run configuration, software state, outputs, and execution records are preserved': 'BAITSSS Desktop project inputs, run configuration, software state, outputs, and execution records are preserved',
    '<strong>BAITSSS</strong><br>Scientific history and selected publications.': '<strong>BAITSSS model</strong><br>Scientific history and selected publications.'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

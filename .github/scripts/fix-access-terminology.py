from pathlib import Path

p = Path('access-participation/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="Institutional access and participation pathways for BAITSSS research, education, validation, agency, and professional use."': 'content="Institutional access and participation pathways for BAITSSS Desktop, BAITSSS model research, education, validation, agency, and professional use."',
    '<h1>Ways to work with BAITSSS.</h1>': '<h1>Ways to work with BAITSSS Desktop and the BAITSSS model.</h1>',
    '<h2>Ways to use and collaborate with BAITSSS</h2>': '<h2>Ways to use BAITSSS Desktop and collaborate around the BAITSSS model</h2>',
    'may use BAITSSS for research, graduate projects, teaching, and scientific investigation': 'may use BAITSSS Desktop for research, graduate projects, teaching, and scientific investigation',
    'may collaborate with BAITSSS on agricultural-water, evapotranspiration, irrigation, environmental, or programmatic applications': 'may collaborate on BAITSSS model applications in agricultural water, evapotranspiration, irrigation, environmental, or programmatic research',
    'Professional and commercial applications may be considered where BAITSSS is scientifically appropriate.': 'Professional and commercial applications may be considered where BAITSSS Desktop and the BAITSSS model are scientifically appropriate.',
    'may collaborate with BAITSSS on model application, evaluation, comparative studies, scientific development, and related research.': 'may collaborate on BAITSSS model application, evaluation, comparative studies, scientific development, and related research.',
    'can first examine BAITSSS through the public website, scientific evidence, publications, documentation, videos, and demonstrations before discussing software access or collaboration.': 'can first examine the BAITSSS model through the scientific evidence and publications, and BAITSSS Desktop through the website, documentation, videos, and demonstrations, before discussing software access or collaboration.',
    '<h2>BAITSSS has developed through collaboration across universities, agencies, water managers, and student research.</h2>': '<h2>The BAITSSS model has developed through collaboration across universities, agencies, water managers, and student research.</h2>',
    'BAITSSS has been used within the USDA-NIFA funded': 'The BAITSSS model has been used within the USDA-NIFA funded',
    'BAITSSS was applied with Kansas Groundwater Management District No. 4': 'The BAITSSS model was applied with Kansas Groundwater Management District No. 4',
    'to evaluate BAITSSS against field observations': 'to evaluate the BAITSSS model against field observations',
    'Later BAITSSS research in California included': 'Later BAITSSS model research in California included',
    'used BAITSSS within a university research project': 'used the BAITSSS model within a university research project',
    '<h2>Planning a project involving BAITSSS?</h2>': '<h2>Planning a project involving BAITSSS Desktop or the BAITSSS model?</h2>',
    'BAITSSS welcomes discussions with universities, research organizations, agencies, and other partners developing proposals or already leading funded projects where the system may be useful.': 'We welcome discussions with universities, research organizations, agencies, and other partners developing proposals or already leading funded projects where BAITSSS Desktop or the BAITSSS model may be useful.',
    '<strong>BAITSSS</strong><br>Access and participation.': '<strong>BAITSSS</strong><br>Access to BAITSSS Desktop and participation in BAITSSS model research.'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

from pathlib import Path

p = Path('research-education/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="BAITSSS for university teaching, graduate research, extension education, atmospheric and water science, model evaluation, and field-scale agricultural water research."': 'content="BAITSSS Desktop for university teaching, graduate research, extension education, and investigation of the BAITSSS model in field-scale agricultural water research."',
    'The desktop system can support coursework, student projects, graduate research, extension education, and collaborative studies where a reproducible field-scale modeling environment serves the academic question.': 'BAITSSS Desktop can support coursework, student projects, graduate research, extension education, and collaborative studies where a reproducible field-scale modeling environment serves the academic question.',
    'BAITSSS can support classroom instruction, graduate research, extension education, field demonstrations, and interdisciplinary work across agricultural and atmospheric water science.': 'BAITSSS Desktop can support classroom instruction, graduate research, extension education, field demonstrations, and interdisciplinary work across agricultural and atmospheric water science.',
    'BAITSSS can provide a common scientific workflow across the disciplines that contribute observations, process understanding, field management, and interpretation.': 'BAITSSS Desktop can provide a common scientific workflow across the disciplines that contribute observations, process understanding, field management, and interpretation.',
    'Graduate students can examine model assumptions, sensitivity, spatial variability, irrigation scenarios, independent observations, and scientific limitations without first constructing the full application framework.': 'Graduate students can examine BAITSSS model assumptions, sensitivity, spatial variability, irrigation scenarios, independent observations, and scientific limitations without first constructing the full application framework.',
    'BAITSSS is not intended to replace programming or scientific-computing education. It provides the computational framework when the primary objective is to study evapotranspiration, soil water, irrigation, remote sensing, model behavior, and scientific interpretation.': 'BAITSSS Desktop is not intended to replace programming or scientific-computing education. It provides the computational framework when the primary objective is to study evapotranspiration, soil water, irrigation, remote sensing, BAITSSS model behavior, and scientific interpretation.',
    '<strong>BAITSSS</strong><br>Research, education, extension, and independent evaluation.': '<strong>BAITSSS Desktop</strong><br>Research and education software built around the BAITSSS model.',
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

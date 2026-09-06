from pathlib import Path

p = Path('contact/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    'content="Contact BAITSSS for research, software, collaboration, access, or professional inquiries."': 'content="Contact BAITSSS for BAITSSS model research and validation, BAITSSS Desktop software and access, collaboration, or professional inquiries."',
    '<p class="hero-lede">Research, software, validation, collaboration, access, and professional inquiries.</p>': '<p class="hero-lede">BAITSSS model research and validation, BAITSSS Desktop software and access, collaboration, and professional inquiries.</p>',
    '<option>Research</option><option>Validation</option><option>Software</option><option>Access</option>': '<option>BAITSSS model research</option><option>BAITSSS model validation</option><option>BAITSSS Desktop software</option><option>BAITSSS Desktop access</option>',
    '<strong>BAITSSS</strong><br>Scientific model and desktop software.': '<strong>BAITSSS</strong><br>BAITSSS model and BAITSSS Desktop.'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

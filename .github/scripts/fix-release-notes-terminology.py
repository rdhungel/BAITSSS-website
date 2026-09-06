from pathlib import Path

p = Path('release-notes/index.html')
s = p.read_text(encoding='utf-8')

repls = {
    '<li><strong>Scientific impact</strong> when a change affects equations, assumptions, parameters, inputs, or outputs</li>': '<li><strong>Scientific impact</strong> when a change affects BAITSSS model equations, assumptions, parameters, inputs, or outputs</li>',
    '<li><strong>Verification status</strong> for installer, workflow, and scientific checks</li>': '<li><strong>Verification status</strong> for BAITSSS Desktop installer and workflow checks, and BAITSSS model scientific checks</li>'
}

for old, new in repls.items():
    if old not in s:
        raise SystemExit(f'Missing expected text: {old}')
    s = s.replace(old, new)

p.write_text(s, encoding='utf-8')

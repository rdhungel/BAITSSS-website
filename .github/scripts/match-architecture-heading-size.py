from pathlib import Path

p = Path('animation-evaluation-chip-test.html')
s = p.read_text(encoding='utf-8')
old = "architectureLabel.setAttribute('style','font-size:15.5px;font-weight:800;fill:#f4f7fa');"
new = "architectureLabel.setAttribute('style','font-size:18px;font-weight:800;fill:#f4f7fa');"
if old not in s:
    raise SystemExit('architecture font style not found')
s = s.replace(old, new, 1)
p.write_text(s, encoding='utf-8')

home = Path('index.html')
h = home.read_text(encoding='utf-8')
old_q = 'animation-evaluation-chip-test.html?v=homepage-workflow-20260907-architecture-heading-2line-1'
new_q = 'animation-evaluation-chip-test.html?v=homepage-workflow-20260907-architecture-heading-18px-1'
if old_q not in h:
    raise SystemExit('homepage animation cache token not found')
h = h.replace(old_q, new_q, 1)
home.write_text(h, encoding='utf-8')
print('matched Modernized BAITSSS Desktop Architecture font size to report heading')

from pathlib import Path
import re

for p in sorted(Path('.').rglob('*.html')):
    if '.git' in p.parts:
        continue
    text = p.read_text(encoding='utf-8', errors='ignore')
    for i, line in enumerate(text.splitlines(), 1):
        if 'BAITSSS' not in line:
            continue
        # Report every line containing BAITSSS so context can be classified manually.
        cleaned = re.sub(r'\s+', ' ', line).strip()
        print(f'{p}:{i}: {cleaned}')

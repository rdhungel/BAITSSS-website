from pathlib import Path

chip = Path('animation-evaluation-chip-test.html')
s = chip.read_text(encoding='utf-8')
old = """  if(architectureLabel){\n    architectureLabel.textContent='MODERNIZED BAITSSS DESKTOP ARCHITECTURE';\n    architectureLabel.setAttribute('x','758');\n  }"""
new = """  if(architectureLabel){\n    architectureLabel.textContent='';\n    architectureLabel.setAttribute('x','758');\n    architectureLabel.setAttribute('y','207');\n    architectureLabel.setAttribute('dominant-baseline','auto');\n    architectureLabel.setAttribute('style','font-size:15.5px;font-weight:800;fill:#f4f7fa');\n    const line1=doc.createElementNS(NS,'tspan');\n    line1.setAttribute('x','758');\n    line1.setAttribute('y','207');\n    line1.textContent='MODERNIZED BAITSSS';\n    const line2=doc.createElementNS(NS,'tspan');\n    line2.setAttribute('x','758');\n    line2.setAttribute('dy','18');\n    line2.textContent='DESKTOP ARCHITECTURE';\n    architectureLabel.appendChild(line1);\n    architectureLabel.appendChild(line2);\n  }"""
if old not in s:
    raise SystemExit('architecture heading block not found')
s = s.replace(old, new, 1)
chip.write_text(s, encoding='utf-8')

home = Path('index.html')
h = home.read_text(encoding='utf-8')
old_q = 'animation-evaluation-chip-test.html?v=homepage-workflow-20260907-spacing-fix-1'
new_q = 'animation-evaluation-chip-test.html?v=homepage-workflow-20260907-architecture-heading-2line-1'
if old_q not in h:
    raise SystemExit('homepage animation cache token not found')
h = h.replace(old_q, new_q, 1)
home.write_text(h, encoding='utf-8')
print('split architecture heading into two lines and refreshed homepage animation cache')

from pathlib import Path

p = Path('science/index.html')
s = p.read_text(encoding='utf-8')

anchor = '.section-intro{max-width:860px;margin:14px 0 0;color:var(--text-dim);font-size:16px;line-height:1.7}'
addition = anchor + '.story{max-width:900px}.story p{margin:0 0 18px;color:var(--text-dim);font-size:17px;line-height:1.78}.story p:last-child{margin-bottom:0}.story strong{color:var(--text)}.story-lead{font-size:20px!important;line-height:1.68!important;color:#dce8f2!important}.story-band{margin:28px 0;padding:24px 26px;border-left:3px solid var(--accent);background:var(--accent-soft);color:#dce8f2;font-size:16px;line-height:1.75}.story-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:28px 0}.story-step{padding:22px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.02)}.story-step .num{color:var(--accent);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.story-step h3{margin:10px 0 8px;font-size:17px}.story-step p{margin:0;color:var(--text-dim);font-size:14px;line-height:1.65}.story-list{margin:18px 0 0;padding-left:20px}.story-list li{margin:0 0 10px;color:var(--text-dim);font-size:16px;line-height:1.7}@media(max-width:900px){.story-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.story-grid{grid-template-columns:1fr}}'

if '.story{max-width:900px}' not in s:
    if anchor not in s:
        raise SystemExit('Science CSS anchor not found')
    s = s.replace(anchor, addition, 1)

s = s.replace('href="../science/">BAITSSS Model Science</a>', 'href="#baitsss-model-science">BAITSSS Model Science</a>')

p.write_text(s, encoding='utf-8')
print('Finished combined Science presentation')

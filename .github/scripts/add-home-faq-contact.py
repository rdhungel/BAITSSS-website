from pathlib import Path

p = Path('index.html')
s = p.read_text(encoding='utf-8')

css_anchor = "footer{padding:28px 0;border-top:1px solid var(--line)}"
css = ".home-close{padding:56px 0 60px;border-bottom:1px solid var(--line);background:#07131f}.home-close-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.home-close-card{display:flex;flex-direction:column;min-height:250px;padding:30px;border:1px solid var(--line-strong);border-radius:16px;background:linear-gradient(180deg,rgba(255,255,255,.026),rgba(255,255,255,.012))}.home-close-card .eyebrow{margin-bottom:14px}.home-close-card h2{font-size:30px;line-height:1.18;margin:0 0 14px}.home-close-card p{max-width:520px;color:#dbe7f2;font-size:16px;line-height:1.68}.home-close-actions{margin-top:auto;padding-top:24px}.home-close-card.contact-card{border-color:rgba(201,238,130,.22);background:linear-gradient(145deg,rgba(201,238,130,.055),rgba(255,255,255,.012))}@media(max-width:760px){.home-close{padding:46px 0 50px}.home-close-grid{grid-template-columns:1fr}.home-close-card{min-height:0}.home-close-card h2{font-size:27px}}"
if '.home-close{' not in s:
    if css_anchor not in s:
        raise SystemExit('footer CSS anchor not found')
    s = s.replace(css_anchor, css + css_anchor, 1)

section = '''\n<section class="home-close" aria-label="Frequently Asked Questions and Contact"><div class="wrap"><div class="home-close-grid"><article class="home-close-card"><p class="eyebrow">Questions</p><h2>Frequently Asked Questions</h2><p>Find concise answers about who developed BAITSSS, how BAITSSS Desktop differs from the earlier research implementation, required data, access, scientific use, and current development status.</p><div class="home-close-actions"><a class="btn btn-secondary" href="faq/">View Frequently Asked Questions</a></div></article><article class="home-close-card contact-card"><p class="eyebrow">Contact</p><h2>Interested in BAITSSS Desktop?</h2><p>Contact BAITSSS for questions about the software, scientific use, research or educational collaboration, institutional interest, or access pathways.</p><div class="home-close-actions"><a class="btn btn-primary" href="contact/">Contact BAITSSS</a></div></article></div></div></section>\n'''
if 'aria-label="Frequently Asked Questions and Contact"' not in s:
    if '</main>' not in s:
        raise SystemExit('main closing tag not found')
    s = s.replace('</main>', section + '</main>', 1)

p.write_text(s, encoding='utf-8')
print('Added Home FAQ left and Contact right closing section')

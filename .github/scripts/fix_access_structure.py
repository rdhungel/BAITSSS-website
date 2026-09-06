from pathlib import Path
p=Path('access-participation/index.html')
s=p.read_text(encoding='utf-8')
old='<p class="lede">Research groups, institutions, agencies, and projects can identify the collaboration pathway that matches their scientific or professional purpose. Software-access rules are maintained separately in <a href="../access-policy/">Access Principles</a>.</p></div></section>'
new='<p class="lede">Research groups, institutions, agencies, and projects can identify the collaboration pathway that matches their scientific or professional purpose. Software access rules are maintained separately in <a href="../access-policy/">Access Principles</a>.</p></div></div></section>'
if old not in s:
    raise SystemExit('Expected access hero structure not found')
s=s.replace(old,new,1)
s=s.replace('<a href="../development-status/">Development Status</a>','<a href="../meet-the-team/">Development &amp; History</a>')
p.write_text(s,encoding='utf-8')
print('Access page structure repaired')

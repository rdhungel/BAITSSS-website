from pathlib import Path
import re

R=Path('.')
orig=(R/'origins-publications/index.html').read_text(encoding='utf-8')
pub=(R/'published-science/index.html').read_text(encoding='utf-8')
geo=(R/'research-geography/index.html').read_text(encoding='utf-8')
evd=(R/'evidence/index.html').read_text(encoding='utf-8')

def css(s):
    return re.search(r'<style>(.*?)</style>',s,re.S).group(1)
def sections(s):
    x=re.search(r'<main>(.*)</main>',s,re.S).group(1)
    x=re.sub(r'^\s*<section class="hero".*?</section>\s*','',x,1,flags=re.S)
    return x.strip()

pc, gc, ec = css(pub), css(geo), css(evd)
ps, gs, es = sections(pub), sections(geo), sections(evd)
# prevent the two timeline styles from colliding
pc=pc.replace('.timeline','.satellite-timeline'); ps=ps.replace('class="timeline"','class="satellite-timeline"')
gc=gc.replace('.timeline','.research-timeline').replace('.year','.geo-year'); gs=gs.replace('class="timeline"','class="research-timeline"').replace('class="year"','class="geo-year"')
# add section anchors
ps=ps.replace('<section class="section">','<section class="section" id="published-studies">',1)
gs=gs.replace('<section class="section">','<section class="section" id="research-geography">',1)
es=es.replace('<section class="section">','<section class="section" id="evidence">',1)
# internal links point to consolidated anchors
for a,b in [('../published-science/','../origins-publications/#published-studies'),('../research-geography/','../origins-publications/#research-geography'),('../evidence/','../origins-publications/#evidence')]:
    ps=ps.replace(a,b); gs=gs.replace(a,b); es=es.replace(a,b)
# import source component styling after the existing stylesheet
orig=orig.replace('</style><link rel="stylesheet"', '\n'+pc+'\n'+gc+'\n'+ec+'\n</style><link rel="stylesheet"',1)
# stable anchors on original material
orig=orig.replace('<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">01 · Scientific origin</div>','<section class="section" id="scientific-origin"><div class="wrap"><div class="section-head"><div class="section-kicker">01 · Scientific origin</div>',1)
orig=orig.replace('<section class="section"><div class="wrap"><div class="section-head"><div class="section-kicker">02 · Selected peer-reviewed record</div>','<section class="section" id="publications"><div class="wrap"><div class="section-head"><div class="section-kicker">02 · Selected peer-reviewed record</div>',1)
# add a compact in-page index
jump='<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:22px"><a class="text-link" href="#scientific-origin">Scientific origin</a><a class="text-link" href="#publications">Publications</a><a class="text-link" href="#published-studies">Published studies</a><a class="text-link" href="#research-geography">Research geography</a><a class="text-link" href="#evidence">Evidence</a></div>'
orig=orig.replace('</aside></div></section>','</aside>'+jump+'</div></section>',1)
orig=orig.replace('</main>','\n'+ps+'\n'+gs+'\n'+es+'\n</main>',1)
orig=re.sub(r'<meta name="description" content="[^"]*">','<meta name="description" content="BAITSSS scientific origin, peer-reviewed publications, published study results, documented research geography, and scientific and software evidence.">',orig,count=1)
(R/'origins-publications/index.html').write_text(orig,encoding='utf-8')

# old destinations remain only as redirects
for path,anchor,label in [
 ('published-science/index.html','#published-studies','Published Science'),
 ('research-geography/index.html','#research-geography','Research Geography & Timeline'),
 ('evidence/index.html','#evidence','Evidence')]:
    (R/path).write_text(f'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=../origins-publications/{anchor}"><title>{label} | BAITSSS</title></head><body><p>{label} is now part of <a href="../origins-publications/{anchor}">Scientific History &amp; Publications</a>.</p></body></html>',encoding='utf-8')

# clean More menu and redirect ordinary links to the consolidated anchors
for p in R.rglob('*.html'):
    if p.as_posix() in {'published-science/index.html','research-geography/index.html','evidence/index.html'}: continue
    s=p.read_text(encoding='utf-8')
    for item in ['<a href="../published-science/">Published Science</a>','<a href="../research-geography/">Research Geography &amp; Timeline</a>','<a href="../evidence/">Evidence</a>']:
        s=s.replace(item,'')
    for a,b in [('href="../published-science/"','href="../origins-publications/#published-studies"'),('href="published-science/"','href="origins-publications/#published-studies"'),('href="../research-geography/"','href="../origins-publications/#research-geography"'),('href="research-geography/"','href="origins-publications/#research-geography"'),('href="../evidence/"','href="../origins-publications/#evidence"'),('href="evidence/"','href="origins-publications/#evidence"')]:
        s=s.replace(a,b)
    p.write_text(s,encoding='utf-8')

# permanent content authority
a=R/'SITE_CONTENT_AUTHORITY.md'; s=a.read_text(encoding='utf-8')
s=re.sub(r'- Evidence:.*\n','',s); s=re.sub(r'- Published Science:.*\n','',s)
s=re.sub(r'- Scientific History & Publications:.*\n','- Scientific History & Publications: scientific origin, institutional research lineage, peer-reviewed publications, published study results and figures, documented research geography and timeline, and evidence categories.\n',s)
a.write_text(s,encoding='utf-8')

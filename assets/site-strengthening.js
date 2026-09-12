(function(){
  'use strict';

  function text(el,value){ if(el&&value) el.textContent=value; }
  function first(root,selectors){
    for(var i=0;i<selectors.length;i++){
      var el=root.querySelector(selectors[i]);
      if(el) return el;
    }
    return null;
  }
  function setMeta(description,canonical){
    if(description){
      var meta=document.querySelector('meta[name="description"]');
      if(!meta){ meta=document.createElement('meta'); meta.name='description'; document.head.appendChild(meta); }
      meta.content=description;
    }
    if(canonical){
      var link=document.querySelector('link[rel="canonical"]');
      if(!link){ link=document.createElement('link'); link.rel='canonical'; document.head.appendChild(link); }
      link.href=canonical;
    }
  }

  function addHomepageFlagshipVideo(hero){
    if(!hero || hero.querySelector('.hero-flagship-video')) return;
    var wrap=hero.querySelector('.wrap');
    var copy=hero.querySelector('.hero-copy');
    if(!wrap || !copy) return;

    var style=document.createElement('style');
    style.textContent='\
      .hero.has-flagship-video .wrap{display:grid;grid-template-columns:minmax(0,1.38fr) minmax(390px,.92fr);gap:54px;align-items:center}\
      .hero.has-flagship-video .hero-copy{max-width:none}\
      .hero.has-flagship-video .hero-title{font-size:clamp(40px,4.2vw,62px);max-width:900px}\
      .hero-flagship-video{min-width:0}\
      .hero-video-frame{position:relative;width:100%;aspect-ratio:16/9;border:1px solid rgba(255,255,255,.14);border-radius:16px;overflow:hidden;background:#02070b;box-shadow:0 22px 58px rgba(0,0,0,.34)}\
      .hero-video-frame iframe{display:block;width:100%;height:100%;border:0;background:#02070b}\
      .hero-video-caption{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 3px 0;color:#9db0c2;font-size:12.5px;line-height:1.45}\
      .hero-video-caption strong{color:#dbe7f2;font-weight:650}\
      .hero-video-caption a{color:#c9ee82;text-decoration:none;font-weight:700;white-space:nowrap}\
      .hero-video-caption a:hover{text-decoration:underline;text-underline-offset:3px}\
      @media(max-width:1040px){.hero.has-flagship-video .wrap{grid-template-columns:1fr;gap:36px}.hero-flagship-video{max-width:820px}.hero.has-flagship-video .hero-title{max-width:940px}}\
      @media(max-width:560px){.hero.has-flagship-video .wrap{gap:28px}.hero-video-frame{border-radius:12px}.hero-video-caption{display:block}.hero-video-caption a{display:inline-block;margin-top:5px}}';
    document.head.appendChild(style);

    var card=document.createElement('div');
    card.className='hero-flagship-video';
    card.setAttribute('aria-label','BAITSSS Desktop V1 flagship video');
    card.innerHTML='<div class="hero-video-frame"><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7504650076615786496" title="BAITSSS Desktop V1 flagship video" loading="eager" allowfullscreen></iframe></div><div class="hero-video-caption"><strong>BAITSSS Desktop V1 overview</strong><a href="https://www.linkedin.com/feed/update/urn:li:activity:7504650076615786496" target="_blank" rel="noopener">Watch on LinkedIn ↗</a></div>';
    wrap.appendChild(card);
    hero.classList.add('has-flagship-video');
  }

  function strengthen(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    var hero=document.querySelector('main .hero');
    var h1=hero&&hero.querySelector('h1');
    var lede=hero&&first(hero,['.hero-lede','.lede','.hero-copy p:not(.eyebrow):not(.hero-kicker)']);
    var eyebrow=hero&&first(hero,['.eyebrow','.hero-kicker']);

    if(path==='/'){
      setMeta('BAITSSS Desktop V1 is the first release version of a field-scale scientific system for evapotranspiration, soil water, irrigation analysis, and field investigation.','https://baitsss.com/');
      addHomepageFlagshipVideo(hero);
    }

    if(path==='/software'){
      setMeta('BAITSSS Desktop V1 is the first release version, organizing project definition, scientific input checks, hourly simulation, Results inspection, and export within one persistent Windows desktop workflow.','https://baitsss.com/software/');
      if(eyebrow) text(eyebrow,'Software · First release version');
      if(lede) text(lede,'BAITSSS Desktop V1 organizes project definition, scientific input checks, hourly execution of the BAITSSS model, Results inspection, and export within one persistent project environment.');
      var status=hero&&hero.querySelector('.status');
      if(status) text(status,'BAITSSS Desktop V1 · First release version · final validation and cleanup.');
    }

    if(path==='/access-participation'){
      setMeta('BAITSSS participation is organized around defined scientific, educational, evaluation, institutional, or professional purposes rather than general software distribution.','https://baitsss.com/access-participation/');
      text(h1,'Start with the work you want to do.');
      if(lede) text(lede,'BAITSSS participation is organized around a defined scientific, educational, evaluation, institutional, or professional purpose rather than general software distribution.');
    }

    if(path==='/research-education'){
      setMeta('BAITSSS supports research and education built around field experiments, monitoring sites, independent datasets, teaching objectives, and model-evaluation questions.','https://baitsss.com/research-education/');
      text(h1,'Bring the scientific question. Use BAITSSS as the modeling environment.');
      if(lede) text(lede,'BAITSSS can support research built around a field experiment, monitoring site, independent dataset, teaching objective, or model-evaluation question.');
    }

    if(path==='/contact'){
      setMeta('Contact BAITSSS for research, collaboration, scientific questions, software feedback, professional use, and general inquiries.','https://baitsss.com/contact/');
      text(h1,'Contact BAITSSS');
      if(lede) text(lede,'Research, collaboration, scientific questions, software feedback, professional use, and general inquiries can all begin here.');
    }

    if(path==='/evidence'){
      setMeta('BAITSSS evidence separates peer-reviewed studies, software testing, and ongoing scientific evaluation so conclusions remain tied to the conditions under which they were tested.','https://baitsss.com/evidence/');
      text(h1,'What does the evidence show?');
      if(lede) text(lede,'Peer-reviewed studies, software testing, and ongoing scientific evaluation support different kinds of conclusions. Results remain tied to the conditions under which they were tested.');
    }

    if(path==='/science'){
      setMeta('BAITSSS is a process-based scientific model and desktop software for field-scale evapotranspiration, soil-water, and irrigation analysis, with assumptions and limitations documented for interpretation.','https://baitsss.com/science/');
      if(lede) text(lede,'BAITSSS is both a scientific model and desktop software. Results depend on the inputs, assumptions, and uncertainty in each application.');
    }

    if(path==='/origins-publications'){
      setMeta('BAITSSS scientific history and publications trace the development of the model through evapotranspiration, energy-balance, soil-water, irrigation, remote-sensing, and desktop-software research.','https://baitsss.com/origins-publications/');
      if(lede) text(lede,'BAITSSS developed through research on evapotranspiration, surface energy balance, soil-water accounting, irrigation, remote sensing, and later computational and desktop software development.');
    }

    /* Keep language consistent where the same concepts appear in visible text. */
    Array.prototype.forEach.call(document.querySelectorAll('h1,h2,h3,p,span,div'),function(el){
      if(el.children.length) return;
      var t=el.textContent;
      if(!t) return;
      if(t==='Peer reviewed research record') el.textContent='Peer-reviewed research record';
      if(t.indexOf('first release-version desktop application')!==-1) el.textContent=t.replace('first release-version desktop application','first desktop release');
      if(t.indexOf('hardware independent')!==-1) el.textContent=t.replace(/hardware independent/g,'hardware-independent');
      if(t.indexOf('large area')!==-1) el.textContent=t.replace(/large area/g,'large-area');
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',strengthen,{once:true});
  else strengthen();
})();

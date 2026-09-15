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

  function installValidationBoundary(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/access-participation' && path!=='/research-education') return;
    var main=document.querySelector('main');
    if(!main || main.querySelector('[data-baitsss-validation-boundary]')) return;

    var section=document.createElement('section');
    section.className='section';
    section.setAttribute('data-baitsss-validation-boundary','true');
    section.innerHTML='<div class="wrap"><div style="padding:28px 30px;border:1px solid rgba(201,238,130,.24);border-radius:15px;background:linear-gradient(145deg,rgba(201,238,130,.055),rgba(255,255,255,.012))"><div class="section-kicker" style="margin-bottom:8px">Independent evaluation and validation</div><h2 style="margin:0 0 12px">Validation is a defined project, not a reason for free software or source-code access.</h2><p style="margin:0;color:var(--text-dim);font-size:15px;line-height:1.72;max-width:980px">BAITSSS does not depend on outside users taking a free copy in order to validate the system. Researchers who want to use BAITSSS to evaluate, benchmark, or validate their own method are welcome to propose that work, but the analysis, software access, technical support, and any required BAITSSS participation must be scoped like other research or professional work. Source-code transfer is a separate decision and is never automatic.</p></div></div>';

    var target=main.lastElementChild;
    if(target) main.insertBefore(section,target);
    else main.appendChild(section);
  }

  function tuneHomepageFlagshipVideo(hero){
    if(!hero) return;

    Array.prototype.forEach.call(document.querySelectorAll('.hero-flagship-video'),function(node){
      node.remove();
    });

    var video=hero.querySelector('.hero-video');
    var frame=video&&video.querySelector('.hero-video-frame');
    var iframe=frame&&frame.querySelector('iframe[src*="linkedin.com/embed/feed/update"]');
    if(!video || !frame || !iframe) return;

    var W0=504;
    var Y0=285;
    var H0=284;
    var IFRAME_H=900;

    iframe.setAttribute('width',String(W0));
    iframe.setAttribute('height',String(IFRAME_H));
    iframe.setAttribute('scrolling','no');
    iframe.setAttribute('frameborder','0');

    function applyFixedLinkedInCrop(){
      var containerWidth=frame.clientWidth;
      if(!containerWidth) return;
      var scale=containerWidth/W0;

      frame.style.setProperty('height',(H0*scale)+'px','important');
      frame.style.setProperty('aspect-ratio','auto','important');

      iframe.style.setProperty('position','absolute','important');
      iframe.style.setProperty('left','0','important');
      iframe.style.setProperty('top',(-Y0*scale)+'px','important');
      iframe.style.setProperty('width',W0+'px','important');
      iframe.style.setProperty('height',IFRAME_H+'px','important');
      iframe.style.setProperty('max-width','none','important');
      iframe.style.setProperty('transform-origin','top left','important');
      iframe.style.setProperty('transform','scale('+scale+')','important');
      iframe.style.setProperty('border','0','important');
    }

    applyFixedLinkedInCrop();
    window.addEventListener('resize',applyFixedLinkedInCrop,{passive:true});
    if(window.ResizeObserver){
      var observer=new ResizeObserver(applyFixedLinkedInCrop);
      observer.observe(frame);
    }
    window.setTimeout(applyFixedLinkedInCrop,100);
    window.setTimeout(applyFixedLinkedInCrop,500);
  }

  function strengthen(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    var hero=document.querySelector('main .hero');
    var h1=hero&&hero.querySelector('h1');
    var lede=hero&&first(hero,['.hero-lede','.lede','.hero-copy p:not(.eyebrow):not(.hero-kicker)']);
    var eyebrow=hero&&first(hero,['.eyebrow','.hero-kicker']);

    if(path==='/'){
      setMeta('BAITSSS Desktop V1 is the first release version of a field-scale scientific system for evapotranspiration, soil water, irrigation analysis, and field investigation.','https://baitsss.com/');
      tuneHomepageFlagshipVideo(hero);
    }

    if(path==='/software'){
      setMeta('BAITSSS Desktop V1 is the first release version, organizing project definition, scientific input checks, hourly simulation, Results inspection, and export within one persistent Windows desktop workflow.','https://baitsss.com/software/');
      if(eyebrow) text(eyebrow,'Software · First release version');
      if(lede) text(lede,'BAITSSS Desktop V1 organizes project definition, scientific input checks, hourly execution of the BAITSSS model, Results inspection, and export within one persistent project environment.');
      var status=hero&&hero.querySelector('.status');
      if(status) text(status,'BAITSSS Desktop V1 · First release version · final validation and cleanup.');
    }

    if(path==='/access-participation'){
      setMeta('BAITSSS participation is organized around defined scientific, educational, institutional, project, or professional purposes rather than general software distribution. Evaluation or validation work is handled as a scoped project, not as a basis for free software or source-code access.','https://baitsss.com/access-participation/');
      text(h1,'Start with the work you want to do.');
      if(lede) text(lede,'BAITSSS participation is organized around a defined scientific, educational, institutional, project, or professional purpose rather than general software distribution. Evaluation and validation requests follow the same scoped-project pathway.');
      installValidationBoundary();
    }

    if(path==='/research-education'){
      setMeta('BAITSSS supports research and education built around field experiments, monitoring sites, independent datasets, teaching objectives, and defined research questions. Validation and benchmarking projects are scoped research work, not a route to free software or source code.','https://baitsss.com/research-education/');
      text(h1,'Bring the scientific question. Use BAITSSS as the modeling environment.');
      if(lede) text(lede,'BAITSSS can support research built around a field experiment, monitoring site, independent dataset, teaching objective, or defined research question.');
      installValidationBoundary();
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

    if(path==='/faq'){
      var faqWrap=document.querySelector('.faqs .wrap');
      if(faqWrap && !document.getElementById('faq-weather-routes-parallel')){
        var article=document.createElement('article');
        article.className='faq';
        article.id='faq-weather-routes-parallel';
        article.innerHTML='<h2>Can I run the Weather Station and gridded NLDAS routes at the same time?</h2><p>Yes. The <strong>Weather Station route and gridded NLDAS route are independent</strong>, so they can run at the same time. Running one does not restrict or block the other.</p>';
        var anchor=Array.prototype.find.call(faqWrap.querySelectorAll('.faq'),function(node){
          var title=node.querySelector('h2');
          return title && title.textContent.indexOf('Can I use my own satellite or weather data?')===0;
        });
        if(anchor) faqWrap.insertBefore(article,anchor);
        else faqWrap.appendChild(article);
      }
    }

    if(path==='/origins-publications'){
      setMeta('BAITSSS scientific history and publications trace the development of the model through evapotranspiration, energy-balance, soil-water, irrigation, remote-sensing, and desktop-software research.','https://baitsss.com/origins-publications/');
      if(lede) text(lede,'BAITSSS developed through research on evapotranspiration, surface energy balance, soil-water accounting, irrigation, remote sensing, and later computational and desktop software development.');
    }

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
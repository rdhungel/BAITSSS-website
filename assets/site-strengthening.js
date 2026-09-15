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

  function setExact(selector,from,to){
    Array.prototype.forEach.call(document.querySelectorAll(selector),function(el){
      if((el.textContent||'').trim()===from) el.textContent=to;
    });
  }

  function installValidationBoundary(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/access-participation' && path!=='/research-education') return;
    var main=document.querySelector('main');
    if(!main || main.querySelector('[data-baitsss-validation-boundary]')) return;

    var section=document.createElement('section');
    section.className='section';
    section.setAttribute('data-baitsss-validation-boundary','true');
    section.innerHTML='<div class="wrap"><div style="padding:28px 30px;border:1px solid rgba(201,238,130,.24);border-radius:15px;background:linear-gradient(145deg,rgba(201,238,130,.055),rgba(255,255,255,.012))"><div class="section-kicker" style="margin-bottom:8px">Independent evaluation and validation</div><h2 style="margin:0 0 12px">Validation and benchmarking can be discussed as defined project work.</h2><p style="margin:0;color:var(--text-dim);font-size:15px;line-height:1.72;max-width:980px">Researchers interested in evaluating, benchmarking, or comparing methods are welcome to contact us. Because this work may involve software access, model execution, technical support, or interpretation, the appropriate scope and access arrangement are considered together with the project team. Source-code access, where relevant, is considered separately in the context of the project and institutional arrangement.</p></div></div>';

    var target=main.lastElementChild;
    if(target) main.insertBefore(section,target);
    else main.appendChild(section);
  }

  function installHomepageAudienceValue(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/') return;
    var section=document.querySelector('main .user-value');
    if(!section || section.getAttribute('data-baitsss-audience-value')==='true') return;

    section.setAttribute('data-baitsss-audience-value','true');
    section.innerHTML='<div class="wrap"><div class="user-value-head"><div class="eyebrow">Why this matters in practice</div><h2 class="user-value-title">A scientific model becomes useful when it helps move real work forward.</h2><p class="user-value-copy">BAITSSS is designed for projects where field-scale water analysis must become a report, research result, proposal, management decision, technical record, or repeatable workflow. The value is not a single ET number; it is the scientific and computational framework around the analysis.</p></div><div class="home-audience-list"><article class="home-audience-row"><div class="home-audience-role">Water managers &amp; districts</div><div><h3>Support reporting and management questions with a reproducible field record.</h3><p>When a report, allocation review, or management decision is due, BAITSSS can bring ET, soil-water, irrigation, spatial patterns, and time-series evidence into one documented project workflow.</p></div></article><article class="home-audience-row"><div class="home-audience-role">Students</div><div><h3>Keep limited research time focused on the scientific question.</h3><p>Graduate and student projects often have fixed deadlines. BAITSSS provides a working environment for data preparation, hourly simulation, Results, and provenance so a project does not have to rebuild the full modeling infrastructure before analysis can begin.</p></div></article><article class="home-audience-row"><div class="home-audience-role">Faculty &amp; researchers</div><div><h3>Use an established workflow inside proposals, funded studies, and collaborative research.</h3><p>BAITSSS can provide a defined modeling environment for studies that need field-scale water analysis, reproducible execution, documented assumptions, and outputs that can be carried into interpretation and publication work.</p></div></article><article class="home-audience-row"><div class="home-audience-role">State &amp; federal programs</div><div><h3>Connect technical analysis with program questions and field-level outcomes.</h3><p>Program teams often need to explain how technical work relates to agricultural water use, irrigation behavior, and field conditions. BAITSSS can support documented analyses and interpretable outputs that help communicate those relationships to leadership, partners, and producers.</p></div></article><article class="home-audience-row"><div class="home-audience-role">Consulting &amp; technology organizations</div><div><h3>Add a scientific modeling component without rebuilding the entire workflow.</h3><p>For projects that need field-scale ET, soil-water, irrigation analysis, repeatable runs, and technical documentation, BAITSSS can serve as a scientific component within a broader consulting, engineering, or data pipeline.</p></div></article></div><div class="user-actions"><a class="btn btn-primary" href="business/">Projects &amp; Services</a><a class="btn btn-secondary" href="research-education/">Research &amp; Education</a><a class="btn btn-secondary" href="contact/">Discuss a Project</a></div></div>';

    if(!document.getElementById('baitsss-home-audience-style')){
      var style=document.createElement('style');
      style.id='baitsss-home-audience-style';
      style.textContent='.home-audience-list{border-top:1px solid var(--line-strong)}.home-audience-row{display:grid;grid-template-columns:minmax(180px,.34fr) minmax(0,1fr);gap:34px;padding:25px 0;border-bottom:1px solid var(--line)}.home-audience-role{padding-top:4px;color:var(--accent);font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.home-audience-row h3{margin:0 0 8px;font-size:20px;line-height:1.35}.home-audience-row p{margin:0;max-width:870px;color:var(--text-dim);font-size:14.5px;line-height:1.68}@media(max-width:760px){.home-audience-row{grid-template-columns:1fr;gap:8px;padding:21px 0}}';
      document.head.appendChild(style);
    }
  }

  function applyNeutralTone(path){
    if(path==='/access-participation'){
      setExact('h2','Different projects can enter at different levels.','Different projects may call for different forms of participation.');
      setExact('p','The goal is not to force every visitor into software access. Some projects may need only guidance, some need a defined analysis, some become research collaborations, and some organizations may want the software or a larger technical integration.','Different projects may be best served by different forms of participation. Some may benefit from a brief discussion or defined analysis, while others may develop into research collaboration, software use, training, or a larger technical arrangement.');
      setExact('p','Start with the research question rather than a request for the model itself. We can discuss whether BAITSSS fits the scientific problem and whether the useful next step is guidance, a defined analysis, training, or a broader research collaboration.','For student work, it is usually most helpful to begin with the research question and study context. We can then discuss whether BAITSSS is a reasonable fit and whether guidance, a defined analysis, training, software use, or a broader collaboration would be appropriate.');
      setExact('p','If the project is not yet fully defined, that is still a valid starting point. Review the public science and software, request a demonstration, or contact us with the problem so we can determine whether a more substantial pathway is justified.','If a project is still being developed, an early discussion can still be useful. The public science and software materials may provide a starting point, and a demonstration or short conversation can help clarify whether a more substantial pathway would be useful.');
    }

    if(path==='/research-education'){
      var inquiry=document.querySelector('[data-baitsss-research-inquiry]');
      if(inquiry){
        var intro=inquiry.querySelector('.section-intro');
        if(intro) text(intro,'A useful starting point is to send the place, period, question, and available evidence. From there, we can consider whether BAITSSS is a reasonable fit and what kind of support may be appropriate.');
        var noticeStrong=inquiry.querySelector('.notice strong');
        if(noticeStrong) text(noticeStrong,'For student projects and access questions');
        var noticeP=inquiry.querySelector('.notice p');
        if(noticeP) text(noticeP,'Student projects are welcome. When a request involves substantial technical support, software access, validation, benchmarking, or source-code questions, including the advisor or project lead helps us understand the research objective and discuss an appropriate arrangement. Access options are considered in the context of the project.');
      }
    }

    if(path==='/business'){
      var businessHero=document.querySelector('main .hero');
      var businessH1=businessHero&&businessHero.querySelector('h1');
      var businessLede=businessHero&&first(businessHero,['.lede','.hero-lede']);
      if(businessH1) text(businessH1,'Bring the water problem. We can explore whether BAITSSS can support the analysis.');
      if(businessLede) text(businessLede,'For a defined field, study area, research question, or water-management need, BAITSSS may provide a useful framework for project-specific analysis. An initial discussion can help clarify the question, available evidence, possible outputs, and an appropriate level of technical involvement.');
      setExact('h2','You do not have to become the software operator first.','A project can begin with the question rather than with software operation.');
      setExact('p','A useful project begins with the decision, research question, field, district, or technical problem. We can determine whether BAITSSS is appropriate, what data are needed, what can be analyzed defensibly, and what form of result is useful.','A useful project often begins with the decision, research question, field, district, or technical problem. An initial discussion can help determine whether BAITSSS is appropriate, what information may be needed, and what form of analysis or result would be useful.');
      setExact('h3','Use BAITSSS as the analysis environment, not as the research question','Use BAITSSS as a possible analysis environment around a defined research question');
      setExact('p','Support university, agency, consulting, and collaborative studies that need a reproducible satellite-to-field workflow without rebuilding the complete scientific software stack for every project.','For university, agency, consulting, and collaborative studies, BAITSSS may provide a reproducible satellite-to-field workflow when that approach is suitable for the project.');
      setExact('p','Define the study area, period, available information, and question. We perform the agreed analysis and provide the resulting maps, time series, exports, interpretation, and technical record appropriate to the scope.','After the study area, period, available information, and question are defined, a project scope may include analysis, maps, time series, exports, interpretation, and a technical record appropriate to the agreed work.');
    }
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
      setMeta('BAITSSS Desktop V1 supports field-scale water analysis for research, reporting, management, public programs, and professional technical workflows.','https://baitsss.com/');
      tuneHomepageFlagshipVideo(hero);
      installHomepageAudienceValue();
    }

    if(path==='/software'){
      setMeta('BAITSSS Desktop V1 is the first release version, organizing project definition, scientific input checks, hourly simulation, Results inspection, and export within one persistent Windows desktop workflow.','https://baitsss.com/software/');
      if(eyebrow) text(eyebrow,'Software · First release version');
      if(lede) text(lede,'BAITSSS Desktop V1 organizes project definition, scientific input checks, hourly execution of the BAITSSS model, Results inspection, and export within one persistent project environment.');
      var status=hero&&hero.querySelector('.status');
      if(status) text(status,'BAITSSS Desktop V1 · First release version · final validation and cleanup.');
    }

    if(path==='/access-participation'){
      setMeta('BAITSSS participation can take different forms depending on the scientific, educational, institutional, project, or professional context. Evaluation and validation work can be discussed as part of an appropriately defined project.','https://baitsss.com/access-participation/');
      text(h1,'Start with the question or project you would like to explore.');
      if(lede) text(lede,'Students, advisors, researchers, universities, agencies, professionals, and organizations are welcome to begin with the problem, study context, or intended use. From there, we can discuss whether BAITSSS is a reasonable fit and what form of participation may be appropriate.');
      installValidationBoundary();
    }

    if(path==='/research-education'){
      setMeta('BAITSSS supports research and education built around field experiments, monitoring sites, independent datasets, teaching objectives, and defined research questions. Evaluation and benchmarking work can be discussed within an appropriately scoped project.','https://baitsss.com/research-education/');
      text(h1,'Bring the scientific question. We can explore whether BAITSSS fits the work.');
      if(lede) text(lede,'BAITSSS may support research built around a field experiment, monitoring site, independent dataset, teaching objective, or defined research question. The first step is to understand the scientific need and available evidence.');
      installValidationBoundary();
    }

    if(path==='/business'){
      setMeta('BAITSSS can support project-specific field-water, evapotranspiration, soil-water, irrigation, and satellite-analysis work where the scientific and technical fit is appropriate.','https://baitsss.com/business/');
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

    applyNeutralTone(path);

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
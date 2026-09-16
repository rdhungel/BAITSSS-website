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
    section.innerHTML='<div class="wrap"><div style="padding:28px 30px;border:1px solid rgba(201,238,130,.24);border-radius:15px;background:linear-gradient(145deg,rgba(201,238,130,.055),rgba(255,255,255,.012))"><div class="section-kicker" style="margin-bottom:8px">Independent evaluation and validation</div><h2 style="margin:0 0 12px">Validation and benchmarking can be discussed as defined project work.</h2><p style="margin:0;color:var(--text-dim);font-size:15px;line-height:1.72;max-width:980px">Researchers interested in evaluating, benchmarking, or comparing methods are welcome to contact us. This work may combine independent observations, existing water-use products, measured irrigation, field records, and BAITSSS process simulation. The appropriate scope and access arrangement are considered with the project team. Source-code access, where relevant, is considered separately in the context of the project and institutional arrangement.</p></div></div>';

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
    section.innerHTML='<div class="wrap"><div class="user-value-head"><div class="eyebrow">Where BAITSSS fits</div><h2 class="user-value-title">Field-scale water analysis inside a larger water-management system.</h2><p class="user-value-copy">BAITSSS works with the information organizations already use: weather, satellite observations, soils, land cover, irrigation records, field measurements, agency data, and other water-management tools. It adds an hourly field-process layer for evapotranspiration, soil-water state, irrigation behavior, spatial variability, scenario analysis, and reproducible technical interpretation.</p></div><div class="home-audience-list"><article class="home-audience-row"><div class="home-audience-role">Water managers &amp; districts</div><div><h3>Move from measured deliveries and reported use to field response and management scenarios.</h3><p>BAITSSS can support conservation analysis, allocation review, irrigation-demand questions, field diagnosis, scenario testing, and technical records while working alongside meters, delivery records, remote-sensing products, and existing agency systems.</p></div></article><article class="home-audience-row"><div class="home-audience-role">State &amp; federal programs</div><div><h3>Add field-scale process evidence to broader planning, reporting, and program questions.</h3><p>Program teams can use BAITSSS to examine how field conditions, irrigation behavior, soil-water dynamics, and water-use patterns relate to conservation, verification, drought response, groundwater demand, recycled-water use, or other agricultural water questions.</p></div></article><article class="home-audience-row"><div class="home-audience-role">Consulting &amp; technology organizations</div><div><h3>Add a reusable scientific analysis layer to a larger project.</h3><p>BAITSSS can complement GIS, remote sensing, monitoring, engineering, groundwater models, and client data with field-scale process simulation, scenario analysis, repeatable runs, and documented outputs.</p></div></article><article class="home-audience-row"><div class="home-audience-role">Faculty &amp; researchers</div><div><h3>Use an established process-modeling environment for experiments, comparison, and scenario work.</h3><p>Studies can focus on the scientific question while retaining hourly simulation, spatial outputs, documented assumptions, reproducible execution, and a persistent project record.</p></div></article><article class="home-audience-row"><div class="home-audience-role">Students</div><div><h3>Investigate the science without rebuilding the entire modeling workflow first.</h3><p>Student projects can work with field-scale evapotranspiration, soil water, irrigation, spatial variability, and management scenarios inside a traceable scientific environment.</p></div></article></div><div class="user-actions"><a class="btn btn-primary" href="business/">Projects &amp; Services</a><a class="btn btn-secondary" href="capabilities/">See Capabilities</a><a class="btn btn-secondary" href="contact/">Discuss a Project</a></div></div>';

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
      setExact('p','Public agencies and research organizations may work with BAITSSS on agricultural water, evapotranspiration, irrigation, environmental analysis, field investigation, and related program or research needs.','Public agencies and research organizations may use BAITSSS for agricultural water analysis, conservation and verification studies, irrigation and demand scenarios, field-scale groundwater-demand inputs, recycled-water questions, method comparison, drought analysis, and related program or research work.');
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
      if(businessH1) text(businessH1,'Bring the water-management question. BAITSSS can support the field-scale analysis.');
      if(businessLede) text(businessLede,'BAITSSS supports project-specific work in agricultural water use, irrigation, soil-water dynamics, conservation, demand analysis, verification, method comparison, management scenarios, and field investigation. It can work alongside measured deliveries, satellite products, weather networks, agency records, GIS, groundwater models, and other established systems.');
      setExact('h2','You do not have to become the software operator first.','Start with the water-management question.');
      setExact('h2','A project can begin with the question rather than with software operation.','Start with the water-management question.');
      setExact('p','A useful project begins with the decision, research question, field, district, or technical problem. We can determine whether BAITSSS is appropriate, what data are needed, what can be analyzed defensibly, and what form of result is useful.','A project may begin with a conservation program, allocation review, irrigation-management question, field anomaly, groundwater-demand question, recycled-water study, drought scenario, research experiment, or another defined technical need. The analysis can then be built around the available evidence and the decision that needs support.');
      setExact('p','A useful project often begins with the decision, research question, field, district, or technical problem. An initial discussion can help determine whether BAITSSS is appropriate, what information may be needed, and what form of analysis or result would be useful.','A project may begin with a conservation program, allocation review, irrigation-management question, field anomaly, groundwater-demand question, recycled-water study, drought scenario, research experiment, or another defined technical need. The analysis can then be built around the available evidence and the decision that needs support.');
      setExact('h3','Understand ET and field-water behavior through time','Connect water use with field response through time');
      setExact('p','Evaluate evapotranspiration, vegetation and soil contributions, root-zone and surface soil-water states, irrigation behavior, spatial patterns, selected locations, and seasonal change for a defined project.','Analyze evapotranspiration, vegetation and soil contributions, root-zone and surface soil-water states, irrigation behavior, spatial patterns, selected locations, and seasonal change within the context of a defined water-management question.');
      setExact('h3','Investigate how a field responds to water and management','Test management and water-use scenarios at field scale');
      setExact('p','Use the model and project record to examine irrigation timing, drying and refill behavior, seasonal water demand, alternative supported scenarios, and differences among locations or periods.','Examine irrigation timing, drying and refill behavior, seasonal demand, conservation or deficit scenarios, alternative management settings, and differences among locations or periods.');
      setExact('h3','Use BAITSSS as the analysis environment, not as the research question','Use BAITSSS for research, verification, and technical comparison');
      setExact('h3','Use BAITSSS as a possible analysis environment around a defined research question','Use BAITSSS for research, verification, and technical comparison');
      setExact('p','Support university, agency, consulting, and collaborative studies that need a reproducible satellite-to-field workflow without rebuilding the complete scientific software stack for every project.','BAITSSS can support university, agency, consulting, and collaborative studies that need a reproducible field-scale process model for independent comparison, verification, scenario analysis, or technical interpretation.');
      setExact('p','For university, agency, consulting, and collaborative studies, BAITSSS may provide a reproducible satellite-to-field workflow when that approach is suitable for the project.','BAITSSS can support university, agency, consulting, and collaborative studies that need a reproducible field-scale process model for independent comparison, verification, scenario analysis, or technical interpretation.');
      setExact('p','Define the study area, period, available information, and question. We perform the agreed analysis and provide the resulting maps, time series, exports, interpretation, and technical record appropriate to the scope.','After the study area, period, available information, and question are defined, project work can include model setup, analysis, maps, time series, scenario results, exports, interpretation, and a technical record appropriate to the agreed scope.');
      setExact('p','After the study area, period, available information, and question are defined, a project scope may include analysis, maps, time series, exports, interpretation, and a technical record appropriate to the agreed work.','After the study area, period, available information, and question are defined, project work can include model setup, analysis, maps, time series, scenario results, exports, interpretation, and a technical record appropriate to the agreed scope.');
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
      setMeta('BAITSSS is a field-scale water analysis and scientific decision-support system for evapotranspiration, soil-water dynamics, irrigation behavior, conservation and management scenarios, verification, research, and technical planning.','https://baitsss.com/');
      if(h1) text(h1,'Field-scale water analysis for management, research, and decision support.');
      if(lede) text(lede,'BAITSSS connects satellite observations, hourly weather, soils, vegetation, irrigation information, and process-based simulation to examine water use, soil-water response, irrigation behavior, spatial variability, and management scenarios. It is designed to work alongside the measurements, records, and planning systems already used in water management.');
      if(eyebrow) text(eyebrow,'Field-scale water analysis · Desktop V1');
      tuneHomepageFlagshipVideo(hero);
      installHomepageAudienceValue();
    }

    if(path==='/software'){
      setMeta('BAITSSS Desktop V1 is the first release version, organizing project definition, scientific input checks, hourly simulation, Results inspection, and export within one persistent Windows desktop workflow.','https://baitsss.com/software/');
      if(eyebrow) text(eyebrow,'Software · First release version');
      if(lede) text(lede,'BAITSSS Desktop V1 is the working environment behind field-scale water analysis: project definition, scientific input checks, hourly process simulation, Results inspection, scenario reruns, export, recovery, and provenance within one persistent project.');
      var status=hero&&hero.querySelector('.status');
      if(status) text(status,'BAITSSS Desktop V1 · First release version · final validation and cleanup.');
    }

    if(path==='/capabilities'){
      setMeta('BAITSSS capabilities include hourly field-scale evapotranspiration and soil-water analysis, irrigation behavior, spatial variability, scenario comparison, method evaluation, technical exports, and reproducible project records.','https://baitsss.com/capabilities/');
      if(h1) text(h1,'Field-scale water analysis, from observations to scenarios.');
      if(lede) text(lede,'BAITSSS combines environmental inputs and field information with hourly process simulation to examine evapotranspiration, soil-water state, irrigation behavior, spatial variability, seasonal change, and supported management scenarios. The detailed software inventory remains below.');
      setExact('p','Track total ET, vegetation ET, soil ET, surface soil water, root-zone soil water, vegetation, irrigation, and thermal behavior through time.','Track total ET, vegetation ET, soil ET, surface soil water, root-zone soil water, vegetation, irrigation, and field-water behavior through time.');
      setExact('p','BAITSSS takes a field from environmental inputs to hourly water analysis, mapped Results, scenario comparison, and a traceable project record.','BAITSSS takes a field from environmental inputs and observations to hourly water analysis, mapped Results, scenario comparison, and a traceable project record.');
    }

    if(path==='/access-participation'){
      setMeta('BAITSSS participation can support research, public-agency work, professional analysis, teaching, validation, software use, and technical collaboration around defined water-management questions.','https://baitsss.com/access-participation/');
      text(h1,'Start with the water, research, or management question.');
      if(lede) text(lede,'Students, advisors, researchers, agencies, water managers, consultants, and organizations can begin with the problem, study context, available evidence, and intended decision. From there, the appropriate form of analysis, software use, training, evaluation, or collaboration can be defined.');
      installValidationBoundary();
    }

    if(path==='/research-education'){
      setMeta('BAITSSS supports field experiments, independent datasets, teaching, model comparison, irrigation and soil-water studies, scenario analysis, and applied agricultural-water research.','https://baitsss.com/research-education/');
      text(h1,'Use a working field-scale system to investigate the scientific question.');
      if(lede) text(lede,'BAITSSS supports research and education where evapotranspiration, soil water, irrigation, spatial variability, management scenarios, or method comparison are part of the question. The system provides the process-modeling environment while the project remains centered on the evidence and scientific objective.');
      installValidationBoundary();
    }

    if(path==='/business'){
      setMeta('BAITSSS supports field-scale agricultural water analysis for conservation, irrigation, demand, verification, management scenarios, research, planning inputs, and professional technical projects.','https://baitsss.com/business/');
    }

    if(path==='/contact'){
      setMeta('Contact BAITSSS about agricultural water analysis, research, conservation, irrigation, verification, management scenarios, software, collaboration, or professional technical work.','https://baitsss.com/contact/');
      text(h1,'Contact BAITSSS');
      if(lede) text(lede,'Questions about agricultural water analysis, conservation, irrigation, field-scale demand, verification, research, management scenarios, software, collaboration, and professional technical work can all begin here.');
    }

    if(path==='/evidence'){
      setMeta('BAITSSS evidence separates peer-reviewed studies, software testing, and ongoing scientific evaluation so conclusions remain tied to the conditions under which they were tested.','https://baitsss.com/evidence/');
      text(h1,'What does the evidence show?');
      if(lede) text(lede,'Peer-reviewed studies, software testing, and ongoing scientific evaluation support different kinds of conclusions. Results remain tied to the conditions under which they were tested.');
    }

    if(path==='/science'){
      setMeta('BAITSSS is a process-based scientific model and desktop software for field-scale evapotranspiration, soil-water, irrigation, and management-scenario analysis, with assumptions and limitations documented for interpretation.','https://baitsss.com/science/');
      if(lede) text(lede,'BAITSSS is a process-based field-scale model and desktop analysis system. It represents evapotranspiration, soil-water states, vegetation and irrigation behavior through time so measured and modeled evidence can be interpreted within the conditions, assumptions, and uncertainty of each application.');
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
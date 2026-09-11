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

  function strengthen(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    var hero=document.querySelector('main .hero');
    var h1=hero&&hero.querySelector('h1');
    var lede=hero&&first(hero,['.hero-lede','.lede','.hero-copy p:not(.eyebrow):not(.hero-kicker)']);
    var eyebrow=hero&&first(hero,['.eyebrow','.hero-kicker']);

    if(path==='/'){
      setMeta('BAITSSS Desktop V1 is the first release version of a field-scale scientific system for evapotranspiration, soil water, irrigation analysis, and field investigation.','https://baitsss.com/');
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

(function(){
  'use strict';

  function txt(el,value){ if(el) el.textContent=value; }
  function first(root,selectors){
    if(!root) return null;
    for(var i=0;i<selectors.length;i++){
      var el=root.querySelector(selectors[i]);
      if(el) return el;
    }
    return null;
  }
  function replaceLeafText(root,from,to){
    if(!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('h1,h2,h3,p,span,div,li,strong'),function(el){
      if(el.children.length) return;
      var t=(el.textContent||'').trim();
      if(t===from) el.textContent=to;
    });
  }
  function setMeta(description){
    if(!description) return;
    var meta=document.querySelector('meta[name="description"]');
    if(!meta){ meta=document.createElement('meta'); meta.name='description'; document.head.appendChild(meta); }
    meta.content=description;
  }
  function addOption(select,label){
    if(!select) return;
    var exists=Array.prototype.some.call(select.options,function(o){ return o.textContent.trim()===label; });
    if(exists) return;
    var opt=document.createElement('option');
    opt.textContent=label;
    opt.value=label;
    select.appendChild(opt);
  }
  function installFooterPositioning(){
    var footer=document.querySelector('footer');
    if(!footer || footer.querySelector('[data-baitsss-positioning-line]')) return;
    var line=document.createElement('div');
    line.setAttribute('data-baitsss-positioning-line','true');
    line.textContent='BAITSSS · Field-scale water analysis for management, research, and decision support.';
    line.style.marginTop='12px';
    line.style.fontSize='12px';
    line.style.lineHeight='1.5';
    line.style.color='var(--text-faint, #65788c)';
    var wrap=footer.querySelector('.wrap')||footer;
    wrap.appendChild(line);
  }
  function tuneContact(path,hero){
    if(path!=='/contact') return;
    setMeta('Contact BAITSSS about agricultural water analysis, conservation, allocation, irrigation, verification, groundwater-demand inputs, recycled-water questions, drought scenarios, research, software, or professional technical work.');
    txt(hero&&hero.querySelector('h1'),'Start with the water-management or research problem.');
    txt(first(hero,['.lede','.hero-lede']),'A first conversation can begin with a conservation program, allocation question, irrigation or demand problem, field anomaly, verification need, groundwater or recycled-water study, drought scenario, research experiment, or another defined technical question. Existing measurements, records, satellite products, GIS, models, and field observations can all be part of the discussion.');
    var sel=document.querySelector('select[name="inquiry_type"]');
    addOption(sel,'Conservation / allocation / verification');
    addOption(sel,'Groundwater / recycled-water / drought planning');
    addOption(sel,'Field diagnosis / irrigation / demand analysis');
  }
  function tuneSoftware(path,hero){
    if(path!=='/software') return;
    txt(hero&&hero.querySelector('h1'),'A working desktop environment for field-scale water analysis.');
    var aside=hero&&hero.querySelector('.hero-aside p');
    if(aside) txt(aside,'The desktop system keeps project inputs, scientific checks, hourly simulation, scenario runs, Results, exports, recovery, and provenance together so field-scale analysis can be repeated and carried into research or water-management work.');
  }
  function tuneCapabilities(path){
    if(path!=='/capabilities') return;
    var quick=document.querySelector('.quick-head');
    var h2=quick&&quick.querySelector('h2');
    var p=quick&&quick.querySelector('p');
    txt(h2,'From observations to field processes to management scenarios.');
    txt(p,'BAITSSS connects environmental inputs and field information with hourly process simulation, mapped Results, scenario comparison, and a traceable project record. The detailed capability reference below shows how those pieces are implemented.');
  }
  function tuneResearch(path,main){
    if(path!=='/research-education') return;
    replaceLeafText(main,'Thermal observations','Field observations and independent measurements');
    replaceLeafText(main,'thermal observations','field observations and independent measurements');
    replaceLeafText(main,'Model comparison','Water-balance evaluation');
    replaceLeafText(main,'MODEL COMPARISON','WATER-BALANCE EVALUATION');
  }
  function tuneAccess(path,main){
    if(path!=='/access-participation') return;
    replaceLeafText(main,'Government / agency','Water agencies & public programs');
    replaceLeafText(main,'Commercial / professional','Consulting & professional');
  }
  function tuneScience(path,hero){
    if(path!=='/science') return;
    var note=hero&&first(hero,['.hero-note']);
    if(note) txt(note,'The model is one layer in a larger water-management workflow. Measurements, field records, weather networks, satellite products, and other models remain important evidence for interpretation and comparison.');
  }
  function tuneOrigins(path,hero){
    if(path!=='/origins-publications') return;
    var h1=hero&&hero.querySelector('h1');
    if(h1 && /history|origins/i.test(h1.textContent||'')){
      // Keep the historical title, but make the role of the history explicit in the lead.
      var lede=first(hero,['.hero-lede','.lede']);
      if(lede) txt(lede,'The BAITSSS record traces how field-scale water analysis developed through evapotranspiration, energy balance, soil-water accounting, irrigation, remote sensing, field evaluation, and later computational and desktop-software work across different agricultural water settings.');
    }
  }
  function tuneDevelopment(path,hero){
    if(path!=='/software-development') return;
    var lede=first(hero,['.hero-lede','.lede']);
    if(lede) txt(lede,'This page documents the engineering work that makes the field-scale water-analysis system usable as software: numerical continuity, performance, recovery, packaging, provenance, verification, and release preparation.');
  }
  function tuneDocumentation(path,hero){
    if(path!=='/documentation') return;
    var lede=first(hero,['.hero-lede','.lede']);
    if(lede) txt(lede,'Documentation connects the scientific model, desktop workflow, project setup, Results, reproducibility, and access pathways used in field-scale water analysis.');
  }
  function tunePeople(path,hero){
    if(path!=='/people') return;
    var lede=first(hero,['.hero-lede','.lede']);
    if(lede) txt(lede,'Current stewardship covers the scientific continuity, desktop software, verification, documentation, release preparation, and collaboration pathways needed to maintain BAITSSS as a field-scale water-analysis system.');
  }

  function apply(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    var main=document.querySelector('main');
    var hero=main&&main.querySelector('.hero');
    tuneContact(path,hero);
    tuneSoftware(path,hero);
    tuneCapabilities(path);
    tuneResearch(path,main);
    tuneAccess(path,main);
    tuneScience(path,hero);
    tuneOrigins(path,hero);
    tuneDevelopment(path,hero);
    tuneDocumentation(path,hero);
    tunePeople(path,hero);
    installFooterPositioning();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();

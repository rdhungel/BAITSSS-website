(function(){
  'use strict';

  function pathNow(){ return window.location.pathname.replace(/\/+$/,'')||'/'; }
  function first(root,selectors){
    if(!root) return null;
    for(var i=0;i<selectors.length;i++){
      var el=root.querySelector(selectors[i]);
      if(el) return el;
    }
    return null;
  }
  function setMeta(text){
    var meta=document.querySelector('meta[name="description"]');
    if(meta&&text) meta.content=text;
  }

  function tuneOrigins(){
    if(pathNow()!=='/origins-publications') return;
    var main=document.querySelector('main');
    var hero=main&&main.querySelector('.hero');
    var h1=hero&&hero.querySelector('h1');
    var lede=hero&&first(hero,['.hero-lede','.lede']);
    if(h1) h1.textContent='Scientific history across different water problems.';
    if(lede) lede.textContent='The BAITSSS record is a history of field-scale water questions, not one isolated ET study. Work in California, Kansas, Arizona, and Texas has tested the system under different crops, water constraints, soils, climates, observations, and management conditions while keeping the same core question in view: how water moves through the field and how that evidence can support a larger decision.';
    setMeta('Scientific history, research geography, publications, and evidence showing how BAITSSS developed across field-scale water-management problems in California, Kansas, Arizona, and Texas.');

    if(!main || main.querySelector('[data-baitsss-history-context]')) return;
    var section=document.createElement('section');
    section.className='section';
    section.setAttribute('data-baitsss-history-context','true');
    section.innerHTML='<div class="wrap"><div class="section-head"><div class="section-kicker">Why the research geography matters</div><div><h2>Different settings exposed different parts of the same water problem.</h2><p class="section-copy">California brought specialty crops, soil heterogeneity, salinity, remote sensing, and comparison with independent observations and existing ET products. Kansas brought groundwater limits, irrigation management, seasonal water use, and the question of modeled versus reported irrigation. Yuma provided a hot desert setting for continuous hourly simulation under strong evaporative demand. Bushland provided a semiarid, advective environment with strong field observations for scientific evaluation.</p></div></div><div class="notice"><strong>What connects the record.</strong> Across these settings, the recurring questions are water consumption, root-zone response, vegetation and soil contributions, irrigation timing and demand, response to constrained supply or changed management, spatial variability, and comparison with measured or independently estimated evidence. The published studies and software work document different pieces of that larger field-scale water-analysis problem.</div></div>';
    var target=hero&&hero.nextElementSibling;
    if(target) main.insertBefore(section,target);
    else main.appendChild(section);
  }

  function tuneFaq(){
    if(pathNow()!=='/faq') return;
    var main=document.querySelector('main');
    var hero=main&&main.querySelector('.hero');
    var h1=hero&&hero.querySelector('h1');
    var lede=hero&&first(hero,['.lede','.hero-lede']);
    if(h1) h1.textContent='How does BAITSSS fit into real water-management and research work?';
    if(lede) lede.textContent='Direct answers about where BAITSSS fits, what it analyzes, how it works with measurements and existing water-management systems, what evidence it has been tested against, and how the current desktop software is used.';
    setMeta('Frequently asked questions about BAITSSS field-scale water analysis, existing measurements and water-management systems, irrigation and soil-water simulation, evidence, software, and project use.');

    var wrap=document.querySelector('.faqs .wrap');
    if(!wrap || wrap.querySelector('[data-baitsss-water-system-faq]')) return;
    var article=document.createElement('article');
    article.className='faq';
    article.setAttribute('data-baitsss-water-system-faq','true');
    article.innerHTML='<h2>Where does BAITSSS fit with meters, CIMIS, OpenET, GIS, groundwater models, and agency systems?</h2><p>Those systems do different jobs and can remain part of the same project. Meters and sensors provide measurements. Weather networks provide atmospheric data. Satellite products provide independent spatial estimates. GIS and agency records organize field and program information. Groundwater and regional models address larger-scale system behavior. <strong>BAITSSS adds a field-scale process and scenario layer</strong>: hourly evapotranspiration, soil-water states, irrigation behavior, spatial variability, scenario testing, and a reproducible technical record.</p><p class="fact">Existing systems do not disable BAITSSS. They can be inputs, comparison sources, or neighboring parts of the same analysis.</p>';
    wrap.insertBefore(article,wrap.firstChild);

    var article2=document.createElement('article');
    article2.className='faq';
    article2.setAttribute('data-baitsss-experience-faq','true');
    article2.innerHTML='<h2>What kinds of water problems has BAITSSS been used to investigate?</h2><p>The research record includes groundwater-limited irrigated agriculture in Kansas, citrus and soil-variability studies in California, desert-system testing in Yuma, Arizona, and field evaluation under semiarid advective conditions in Bushland, Texas. Across those settings, the work has addressed crop and field water use, soil-water behavior, irrigation demand, constrained supply, spatial variability, method comparison, and comparison with independent observations or reported irrigation.</p><p>The locations differ, but the underlying questions are closely related: what is happening in the field, how management changes it, how the result compares with available evidence, and how that information can support research or a water-management decision.</p>';
    article.insertAdjacentElement('afterend',article2);
  }

  function apply(){
    tuneOrigins();
    tuneFaq();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();

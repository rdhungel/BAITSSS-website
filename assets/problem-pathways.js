(function(){
  'use strict';

  function path(){return window.location.pathname.replace(/\/+$/,'')||'/';}

  function injectStyles(){
    if(document.getElementById('baitsss-problem-pathways-style'))return;
    var s=document.createElement('style');
    s.id='baitsss-problem-pathways-style';
    s.textContent='\
      .problem-pathways{padding:58px 0 62px;border-bottom:1px solid rgba(255,255,255,.08);background:#07131f}\
      .problem-pathways.soft{background:#081522}\
      .problem-pathways .pp-head{max-width:960px;margin-bottom:28px}\
      .problem-pathways .pp-kicker{font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:#c9ee82;font-weight:800;margin-bottom:11px}\
      .problem-pathways h2{margin:0 0 13px;font-size:clamp(29px,3vw,39px);line-height:1.16;letter-spacing:-.02em}\
      .problem-pathways .pp-lead{margin:0;color:#dbe7f2;font-size:16.5px;line-height:1.72;max-width:920px}\
      .problem-pathways .pp-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}\
      .problem-pathways .pp-card{padding:24px;border:1px solid rgba(255,255,255,.14);border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.01))}\
      .problem-pathways .pp-label{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#c9ee82;font-weight:800;margin-bottom:10px}\
      .problem-pathways .pp-card h3{margin:0 0 9px;font-size:19px;line-height:1.3}\
      .problem-pathways .pp-card p{margin:0;color:#9db0c2;font-size:14px;line-height:1.65}\
      .problem-pathways .pp-close{margin-top:22px;padding:18px 20px;border-left:3px solid #4fd1e0;background:rgba(79,209,224,.035);color:#dbe7f2;font-size:14.5px;line-height:1.7;max-width:1040px}\
      @media(max-width:900px){.problem-pathways .pp-grid{grid-template-columns:1fr 1fr}}\
      @media(max-width:620px){.problem-pathways{padding:44px 0 48px}.problem-pathways .pp-grid{grid-template-columns:1fr}}\
    ';
    document.head.appendChild(s);
  }

  function markup(home){
    return '<div class="wrap">'+
      '<div class="pp-head"><div class="pp-kicker">'+(home?'Water-management questions':'Problem pathways')+'</div>'+
      '<h2>'+(home?'Start with the water problem, not the software.':'The field-process layer becomes useful when the existing system does not answer the whole question.')+'</h2>'+
      '<p class="pp-lead">'+(home?
        'BAITSSS can work alongside meters, delivery records, CIMIS and other weather networks, satellite products, GIS, sensors, groundwater models, agency records, and planning systems. The useful question is what field-scale process information is still missing.' :
        'The same field can sit inside several water-management systems at once: delivery accounting, conservation programs, groundwater planning, irrigation management, research, and regional modeling. BAITSSS is most useful where those systems need a continuous field-scale interpretation of what happened and how management changes may affect the field.')+'</p></div>'+
      '<div class="pp-grid">'+
        '<article class="pp-card"><div class="pp-label">Conservation & reduced supply</div><h3>What happened after water use was reduced?</h3><p>Examine whether a verified delivery reduction or conservation action also changed ET, root-zone depletion and refill, irrigation timing, vegetation response, or spatial field behavior.</p></article>'+
        '<article class="pp-card"><div class="pp-label">Accounting & verification</div><h3>Why do delivery, meter, satellite, and modeled quantities disagree?</h3><p>Keep delivery, applied water, reference ET, crop ET, actual ET, and modeled irrigation separate, then use the field-process history to investigate where the differences come from.</p></article>'+
        '<article class="pp-card"><div class="pp-label">Groundwater & agricultural demand</div><h3>What field behavior is being aggregated into a basin model?</h3><p>Provide field-scale agricultural demand, irrigation response, vegetation, and root-zone trajectories that can support or test assumptions used in groundwater, recharge, or regional studies.</p></article>'+
        '<article class="pp-card"><div class="pp-label">Irrigation & field diagnosis</div><h3>Why did this field respond differently than expected?</h3><p>Investigate drying and refill behavior, water stress, irrigation timing, seasonal demand, and within-field differences using the continuous hourly model state.</p></article>'+
        '<article class="pp-card"><div class="pp-label">Independent comparison</div><h3>What can we learn when methods or observations do not agree?</h3><p>Compare BAITSSS with sensors, delivery records, satellite ET products, crop-water estimates, field observations, or another model without treating any single source as automatic ground truth.</p></article>'+
        '<article class="pp-card"><div class="pp-label">Scenarios & research</div><h3>What would change under a different management strategy?</h3><p>Replay supported irrigation, conservation, deficit, or water-supply scenarios while preserving the project record, input lineage, and comparable outputs.</p></article>'+
      '</div>'+
      '<div class="pp-close">BAITSSS does not replace the measurement, reporting, groundwater, allocation, or planning system already responsible for the larger decision. It adds a field-scale process layer when that additional detail is useful.</div>'+
      '</div>';
  }

  function installHome(){
    if(path()!=='/')return;
    var main=document.querySelector('main');
    if(!main || main.querySelector('[data-baitsss-problem-pathways="home"]'))return;
    var section=document.createElement('section');
    section.className='problem-pathways';
    section.setAttribute('data-baitsss-problem-pathways','home');
    section.innerHTML=markup(true);
    var anchor=main.querySelector('.user-value') || main.querySelector('.desktop-preview') || main.children[2];
    if(anchor)main.insertBefore(section,anchor); else main.appendChild(section);
  }

  function installBusiness(){
    if(path()!=='/business')return;
    var main=document.querySelector('main');
    if(!main || main.querySelector('[data-baitsss-problem-pathways="business"]'))return;
    var section=document.createElement('section');
    section.className='problem-pathways soft';
    section.setAttribute('data-baitsss-problem-pathways','business');
    section.innerHTML=markup(false);
    var sections=main.querySelectorAll(':scope > section');
    var anchor=null;
    Array.prototype.forEach.call(sections,function(s){
      if(anchor)return;
      var k=s.querySelector('.kicker');
      if(k && /Ways to work together/i.test(k.textContent||''))anchor=s;
    });
    if(anchor)main.insertBefore(section,anchor); else main.appendChild(section);
  }

  function run(){injectStyles();installHome();installBusiness();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();

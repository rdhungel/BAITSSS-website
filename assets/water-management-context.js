(function(){
  'use strict';

  function installWaterManagementContext(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/')return;

    var main=document.querySelector('main');
    var hero=main&&main.querySelector('.hero');
    if(!main||!hero||main.querySelector('[data-baitsss-water-context]'))return;

    var heroCopy=hero.querySelector('.hero-copy');
    var actions=heroCopy&&heroCopy.querySelector('.hero-actions');
    if(actions&&!heroCopy.querySelector('[data-baitsss-field-history]')){
      var note=document.createElement('p');
      note.setAttribute('data-baitsss-field-history','true');
      note.textContent='Developed through field-scale water and irrigation work in California, Kansas, Arizona, and Texas, with problems ranging from groundwater-limited agriculture and irrigation management to specialty crops, soil variability, method comparison, and desert water use.';
      note.style.margin='18px 0 0';
      note.style.maxWidth='780px';
      note.style.color='var(--text-dim)';
      note.style.fontSize='14px';
      note.style.lineHeight='1.65';
      actions.insertAdjacentElement('afterend',note);
    }

    var section=document.createElement('section');
    section.className='water-management-context';
    section.setAttribute('data-baitsss-water-context','true');
    section.innerHTML='\
<div class="wrap wm-wrap">\
  <div class="wm-head">\
    <div class="eyebrow">Experience across different water problems</div>\
    <h2>Different places, different pressures, closely related questions.</h2>\
    <p>BAITSSS did not grow from one field or one type of evapotranspiration study. The work has moved through very different agricultural water settings. Those settings matter because they expose different parts of the same water-management problem: what is happening in the field, what can be measured, what must be estimated, how management changes the result, and how that field-scale evidence connects to a larger decision.</p>\
  </div>\
  <div class="wm-regions">\
    <article class="wm-region"><div class="wm-place">California</div><h3>Complex water management around high-value irrigated agriculture.</h3><p>California brings together specialty crops, groundwater pressure, salinity, soil variability, remote sensing, water accounting, conservation programs, recycled water, and multiple levels of planning. BAITSSS work here has included citrus water use, comparison with independent observations and OpenET, and the effect of soil information on evapotranspiration and irrigation modeling. It is an important setting for connecting field-process analysis with the broader water-management system.</p></article>\
    <article class="wm-region"><div class="wm-place">Kansas</div><h3>Groundwater limits make the management question immediate.</h3><p>In western Kansas, the problem is not simply estimating ET. It is understanding crop water use and irrigation when groundwater is limited and allocations are reduced. BAITSSS has been used to examine field and seasonal water use, modeled irrigation, reported irrigation, and the response of irrigated agriculture under restricted supply.</p></article>\
    <article class="wm-region"><div class="wm-place">Yuma, Arizona</div><h3>Desert agriculture tests the system under strong evaporative demand.</h3><p>Yuma represents a hot, arid irrigated environment where atmospheric demand is high and irrigation is central to crop production. It has been used as a desert-system test setting for continuous hourly simulation and for checking that the scientific and computational workflow remains stable under conditions very different from the central Great Plains.</p></article>\
    <article class="wm-region"><div class="wm-place">Bushland, Texas</div><h3>Field observations provide a demanding scientific test.</h3><p>Bushland provided a semiarid, advective field environment with strong independent observations for evaluating crop water use and energy-balance behavior. That work helped test BAITSSS against field evidence rather than treating a completed model run as proof by itself.</p></article>\
  </div>\
  <div class="wm-common">\
    <div><div class="wm-mini">What connects these places</div><h3>The same management questions keep returning.</h3></div>\
    <p>How much water is being consumed? How is the root zone changing between irrigation events? What part of the signal comes from vegetation and what part from the soil? How does a field respond when supply, timing, soil conditions, or management change? How do modeled results compare with meters, field observations, satellite products, or reported irrigation? And when the field answer is understood, how can it inform conservation, allocation, planning, research, or another technical decision?</p>\
  </div>\
  <div class="wm-collab-head">\
    <div class="eyebrow">Who can work together around these problems</div>\
    <h2>Water management is rarely one organization doing one calculation.</h2>\
    <p>Different projects may involve different combinations of people and systems. BAITSSS can provide the field-scale process and scenario layer while other partners contribute measurement, operations, engineering, groundwater analysis, regulation, remote sensing, agronomy, or local knowledge.</p>\
  </div>\
  <div class="wm-collab">\
    <article><strong>Water districts and irrigation managers</strong><span>Delivery records, conservation programs, allocation questions, irrigation demand, and field response.</span></article>\
    <article><strong>Groundwater agencies and basin programs</strong><span>Agricultural demand, pumping context, allocation review, recharge and management scenarios, and field-to-basin inputs.</span></article>\
    <article><strong>State and federal programs</strong><span>Program evaluation, verification, drought response, agricultural water planning, and technical interpretation.</span></article>\
    <article><strong>Consultants and engineering teams</strong><span>Project-specific analysis that can sit beside GIS, monitoring, infrastructure, groundwater models, compliance work, and client data.</span></article>\
    <article><strong>Universities, laboratories, and extension</strong><span>Field experiments, method comparison, irrigation research, student work, independent datasets, and applied education.</span></article>\
    <article><strong>Remote-sensing and technology groups</strong><span>Comparison, integration, difficult-field diagnosis, process interpretation, and complementary data products.</span></article>\
  </div>\
  <div class="wm-close">\
    <strong>BAITSSS does not need every part of the water system to be replaced.</strong> Measurements, delivery systems, weather networks, remote-sensing products, agency records, GIS, and larger groundwater or planning models can remain in place. BAITSSS adds a field-scale scientific layer for understanding processes through time, testing scenarios, comparing evidence, and carrying that analysis into a reproducible technical record.\
  </div>\
</div>';

    var afterHero=hero.nextElementSibling;
    if(afterHero) main.insertBefore(section,afterHero);
    else main.appendChild(section);

    var style=document.createElement('style');
    style.id='baitsss-water-context-style';
    style.textContent='.water-management-context{padding:56px 0 62px;border-bottom:1px solid var(--line);background:#081522}.wm-wrap{max-width:1240px}.wm-head{max-width:980px;margin-bottom:30px}.wm-head h2,.wm-collab-head h2{margin:0 0 14px;font-size:clamp(30px,3.4vw,42px);line-height:1.15;letter-spacing:-.025em}.wm-head p,.wm-collab-head p{margin:0;color:#dbe7f2;font-size:16.5px;line-height:1.72}.wm-regions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.wm-region{padding:26px;border:1px solid var(--line-strong);border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.026),rgba(255,255,255,.01))}.wm-place{margin-bottom:10px;color:var(--accent);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.wm-region h3{margin:0 0 10px;font-size:20px;line-height:1.35}.wm-region p{margin:0;color:var(--text-dim);font-size:14.5px;line-height:1.68}.wm-common{display:grid;grid-template-columns:minmax(240px,.42fr) minmax(0,1fr);gap:34px;margin:24px 0 52px;padding:28px 30px;border-left:3px solid var(--accent);background:rgba(201,238,130,.04)}.wm-mini{margin-bottom:8px;color:var(--accent);font-size:11px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}.wm-common h3{margin:0;font-size:22px;line-height:1.3}.wm-common p{margin:0;color:#dbe7f2;font-size:15px;line-height:1.72}.wm-collab-head{max-width:980px;margin-bottom:24px}.wm-collab{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.wm-collab article{padding:20px;border:1px solid var(--line);border-radius:11px;background:rgba(255,255,255,.015)}.wm-collab strong{display:block;margin-bottom:7px;font-size:15.5px}.wm-collab span{display:block;color:var(--text-dim);font-size:13.5px;line-height:1.58}.wm-close{margin-top:24px;padding:24px 26px;border:1px solid rgba(201,238,130,.20);border-radius:13px;background:rgba(201,238,130,.035);color:#dbe7f2;font-size:15px;line-height:1.72}.wm-close strong{color:var(--text)}@media(max-width:900px){.wm-regions,.wm-collab{grid-template-columns:1fr 1fr}.wm-common{grid-template-columns:1fr;gap:12px}}@media(max-width:620px){.water-management-context{padding:44px 0 48px}.wm-regions,.wm-collab{grid-template-columns:1fr}.wm-region{padding:22px}.wm-common{padding:22px 20px;margin-bottom:42px}.wm-close{padding:22px 20px}}';
    document.head.appendChild(style);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installWaterManagementContext,{once:true});
  else installWaterManagementContext();
})();

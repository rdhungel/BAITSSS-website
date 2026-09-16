(function(){
  'use strict';

  function removeDuplicateLinkedInEmbeds(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/')return;

    var keep=document.querySelector('.hero-video iframe[src*="linkedin.com/embed/feed/update"]');
    Array.prototype.forEach.call(document.querySelectorAll('iframe[src*="linkedin.com/embed/feed/update"]'),function(frame){
      if(frame===keep)return;

      var legacy=frame.closest('.hero-flagship-video');
      if(legacy){ legacy.remove(); return; }

      var wrapper=frame.parentElement;
      if(wrapper && wrapper!==document.body){
        var candidate=wrapper;
        while(candidate.parentElement && candidate.parentElement!==document.body && !candidate.matches('main,.hero')){
          if(candidate.classList && (candidate.classList.contains('hero-video') || candidate.classList.contains('hero-video-frame')))break;
          if(candidate.children.length===1) candidate=candidate.parentElement;
          else break;
        }
        if(!candidate.closest('.hero-video')) candidate.remove();
      } else {
        frame.remove();
      }
    });
  }

  function installSoftwareFlyerLink(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/software')return;
    var links=document.querySelector('.hero .release-links');
    if(!links || links.querySelector('[data-baitsss-flyer-link]'))return;

    var flyer=document.createElement('a');
    flyer.href='/assets/BAITSSS_Desktop_V1_Flyer.pdf';
    flyer.setAttribute('data-baitsss-flyer-link','true');
    flyer.setAttribute('target','_blank');
    flyer.setAttribute('rel','noopener');
    flyer.textContent='Download Flyer ↓';
    flyer.style.display='inline-flex';
    flyer.style.alignItems='center';
    flyer.style.justifyContent='center';
    flyer.style.padding='10px 15px';
    flyer.style.borderRadius='9px';
    flyer.style.background='#c9ee82';
    flyer.style.color='#07131f';
    flyer.style.textDecoration='none';
    flyer.style.fontWeight='800';
    flyer.style.fontSize='14px';
    links.appendChild(flyer);
  }

  function installBusinessIndustryLink(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/business')return;
    var note=document.querySelector('.hero .hero-note');
    if(!note || note.querySelector('[data-baitsss-industry-link]'))return;

    var row=document.createElement('div');
    row.style.marginTop='16px';
    row.style.display='flex';
    row.style.flexWrap='wrap';
    row.style.gap='10px';

    var industry=document.createElement('a');
    industry.href='/industry-partnership/';
    industry.setAttribute('data-baitsss-industry-link','true');
    industry.textContent='For ag-tech and irrigation companies →';
    industry.style.display='inline-flex';
    industry.style.alignItems='center';
    industry.style.justifyContent='center';
    industry.style.padding='10px 15px';
    industry.style.borderRadius='9px';
    industry.style.border='1px solid rgba(201,238,130,.45)';
    industry.style.color='#f4f7fa';
    industry.style.textDecoration='none';
    industry.style.fontWeight='800';
    industry.style.fontSize='14px';
    row.appendChild(industry);

    note.appendChild(row);
  }

  function installResearchInquiryCta(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/research-education')return;
    var main=document.querySelector('main');
    if(!main || main.querySelector('[data-baitsss-research-inquiry]'))return;

    var section=document.createElement('section');
    section.className='section';
    section.setAttribute('data-baitsss-research-inquiry','true');
    section.innerHTML='<div class="wrap"><div class="section-head"><div class="section-kicker">Start a research inquiry</div><div><h2>Have a research or field-water question? Start with four things.</h2><p class="section-intro">You do not need to request software first. Send the place, period, question, and available evidence so we can determine whether BAITSSS is a reasonable fit and what kind of support makes sense.</p></div></div><div class="grid three"><article class="card research"><div class="tag">01 · PLACE</div><h3>Where?</h3><p>Field, farm, district, basin, research site, or study area.</p></article><article class="card research"><div class="tag">02 · PERIOD</div><h3>When?</h3><p>Event, growing season, year, multi-year period, or another time window.</p></article><article class="card research"><div class="tag">03 · QUESTION</div><h3>What needs an answer?</h3><p>What do you need to understand, compare, estimate, investigate, or support?</p></article></div><div class="package" style="margin-top:16px"><article class="panel"><div class="label">04 · EVIDENCE</div><p>Tell us what already exists: irrigation, weather, soil, field observations, remote sensing, or other project data.</p><div class="cta-row"><a class="button button-primary" href="/research-education/inquiry/">Describe Your Project</a><a class="button" href="/assets/docs/BAITSSS_Project_and_Research_Inquiry_Guide.pdf" target="_blank" rel="noopener">Inquiry Guide (PDF)</a></div></article><aside class="notice"><strong>Student or source-code request?</strong><p>Student projects are welcome. When a request involves substantial technical support, software access, or source code, the advisor or supervisor should join the discussion so the research objective, responsibilities, and appropriate pathway can be defined together. Source-code transfer is not automatic.</p></aside></div></div>';

    var target=main.lastElementChild;
    if(target) main.insertBefore(section,target);
    else main.appendChild(section);
  }

  function releaseButton(label){
    var a=document.createElement('a');
    a.href='/downloads/';
    a.textContent=label;
    a.style.display='inline-flex';
    a.style.alignItems='center';
    a.style.justifyContent='center';
    a.style.minHeight='46px';
    a.style.padding='0 17px';
    a.style.borderRadius='9px';
    a.style.background='#c9ee82';
    a.style.color='#07131f';
    a.style.textDecoration='none';
    a.style.fontWeight='800';
    a.style.fontSize='14px';
    return a;
  }

  function installReleaseDownloadLinks(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';

    if(path==='/software'){
      var heroLinks=document.querySelector('.hero .release-links');
      if(heroLinks && !heroLinks.querySelector('[data-baitsss-download-link]')){
        var heroDownload=document.createElement('a');
        heroDownload.href='/downloads/';
        heroDownload.setAttribute('data-baitsss-download-link','true');
        heroDownload.textContent='Authorized Downloads →';
        heroLinks.appendChild(heroDownload);
      }

      var main=document.querySelector('main');
      if(main && !main.querySelector('[data-baitsss-download-section]')){
        var section=document.createElement('section');
        section.className='section';
        section.id='downloads';
        section.setAttribute('data-baitsss-download-section','true');
        section.innerHTML='<div class="wrap"><div class="section-head"><div class="section-kicker">Release access</div><div><h2>Download BAITSSS Desktop V1</h2><p class="section-intro">The Windows installer and BAITSSS Desktop V1 User Manual will be distributed through an authorized download area after final release validation. The public website does not host the protected release files.</p></div></div><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px"><article style="padding:26px;border:1px solid rgba(255,255,255,.14);border-radius:14px;background:rgba(255,255,255,.02)"><div class="dev-label">Windows desktop software</div><h3 style="margin:12px 0 10px;font-size:22px">BAITSSS Desktop V1</h3><p style="margin:0 0 20px;color:var(--text-dim);font-size:14.5px;line-height:1.7">Final installer identity, build information, and release file will be activated only after the frozen release candidate passes final validation.</p><span style="display:inline-flex;padding:7px 10px;border-radius:999px;border:1px solid rgba(233,183,102,.28);color:var(--amber);font-size:12px;font-weight:800">Release validation in progress</span></article><article style="padding:26px;border:1px solid rgba(255,255,255,.14);border-radius:14px;background:rgba(255,255,255,.02)"><div class="dev-label">Documentation</div><h3 style="margin:12px 0 10px;font-size:22px">BAITSSS Desktop V1 User Manual</h3><p style="margin:0 0 20px;color:var(--text-dim);font-size:14.5px;line-height:1.7">The final PDF manual will be released with the validated software so the documentation matches the frozen product build.</p><span style="display:inline-flex;padding:7px 10px;border-radius:999px;border:1px solid rgba(233,183,102,.28);color:var(--amber);font-size:12px;font-weight:800">Final validation pending</span></article></div><div style="margin-top:22px"></div></div>';
        var buttonWrap=section.querySelector('.wrap > div:last-child');
        buttonWrap.appendChild(releaseButton('Open Authorized Download Area →'));
        var sections=main.querySelectorAll(':scope > section.section');
        var lastSection=sections.length?sections[sections.length-1]:null;
        if(lastSection) main.insertBefore(section,lastSection);
        else main.appendChild(section);
      }
    }

    if(path==='/access-participation'){
      var accessMain=document.querySelector('main');
      if(accessMain && !accessMain.querySelector('[data-baitsss-access-downloads]')){
        var accessSection=document.createElement('section');
        accessSection.className='section';
        accessSection.setAttribute('data-baitsss-access-downloads','true');
        accessSection.innerHTML='<div class="wrap"><div class="request-box"><div><div class="section-kicker">Authorized downloads</div><h2>Software and manual access</h2><p>BAITSSS Desktop V1 will be distributed through a protected download area after final release validation. Approved users will receive access credentials for the validated Windows installer and the matching User Manual. Protected release files are not stored on the public GitHub Pages site.</p></div><div class="cta-row" data-baitsss-access-download-button></div></div></div>';
        var target=accessMain.lastElementChild;
        if(target) accessMain.insertBefore(accessSection,target);
        else accessMain.appendChild(accessSection);
        var accessButton=accessSection.querySelector('[data-baitsss-access-download-button]');
        accessButton.appendChild(releaseButton('Authorized Download Area →'));
      }
    }
  }

  function installDuplicateGuard(){
    removeDuplicateLinkedInEmbeds();
    installSoftwareFlyerLink();
    installBusinessIndustryLink();
    installResearchInquiryCta();
    installReleaseDownloadLinks();
    var observer=new MutationObserver(function(){
      removeDuplicateLinkedInEmbeds();
      installSoftwareFlyerLink();
      installBusinessIndustryLink();
      installResearchInquiryCta();
      installReleaseDownloadLinks();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});
    [50,150,400,900,1800,3500].forEach(function(delay){
      window.setTimeout(function(){
        removeDuplicateLinkedInEmbeds();
        installSoftwareFlyerLink();
        installBusinessIndustryLink();
        installResearchInquiryCta();
        installReleaseDownloadLinks();
      },delay);
    });
  }

  function load(src,done){
    var s=document.createElement('script');
    s.src=src;
    s.async=false;
    if(done)s.onload=done;
    document.head.appendChild(s);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installDuplicateGuard,{once:true});
  else installDuplicateGuard();

  load('/assets/site-nav-core.js?v=20260911-1',function(){
    load('/assets/site-strengthening.js?v=20260915-water-1',function(){
      load('/assets/water-management-context.js?v=20260915-1',function(){
        load('/assets/site-coherence.js?v=20260915-2',function(){
          load('/assets/evidence-history-coherence.js?v=20260915-1',function(){
            load('/assets/mobile-linkedin-fix.js?v=20260913-1',function(){
              removeDuplicateLinkedInEmbeds();
              installSoftwareFlyerLink();
              installBusinessIndustryLink();
              installResearchInquiryCta();
              installReleaseDownloadLinks();
            });
          });
        });
      });
    });
  });
})();

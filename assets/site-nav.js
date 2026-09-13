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

  function installBusinessEcosystemLink(){
    var path=window.location.pathname.replace(/\/+$/,'')||'/';
    if(path!=='/business')return;
    var note=document.querySelector('.hero .hero-note');
    if(!note || note.querySelector('[data-baitsss-ecosystem-link]'))return;

    var row=document.createElement('div');
    row.style.marginTop='16px';
    row.style.display='flex';
    row.style.flexWrap='wrap';
    row.style.gap='10px';

    var ecosystem=document.createElement('a');
    ecosystem.href='/business-ecosystem/';
    ecosystem.setAttribute('data-baitsss-ecosystem-link','true');
    ecosystem.textContent='Explore the agricultural water technology ecosystem →';
    ecosystem.style.display='inline-flex';
    ecosystem.style.alignItems='center';
    ecosystem.style.justifyContent='center';
    ecosystem.style.padding='10px 15px';
    ecosystem.style.borderRadius='9px';
    ecosystem.style.background='#c9ee82';
    ecosystem.style.color='#07131f';
    ecosystem.style.textDecoration='none';
    ecosystem.style.fontWeight='800';
    ecosystem.style.fontSize='14px';
    row.appendChild(ecosystem);

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

  function installDuplicateGuard(){
    removeDuplicateLinkedInEmbeds();
    installSoftwareFlyerLink();
    installBusinessEcosystemLink();
    var observer=new MutationObserver(function(){
      removeDuplicateLinkedInEmbeds();
      installSoftwareFlyerLink();
      installBusinessEcosystemLink();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});
    [50,150,400,900,1800,3500].forEach(function(delay){
      window.setTimeout(function(){
        removeDuplicateLinkedInEmbeds();
        installSoftwareFlyerLink();
        installBusinessEcosystemLink();
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
    load('/assets/site-strengthening.js?v=20260912-fixed504-2',function(){
      load('/assets/mobile-linkedin-fix.js?v=20260913-1',function(){
        removeDuplicateLinkedInEmbeds();
        installSoftwareFlyerLink();
        installBusinessEcosystemLink();
      });
    });
  });
})();

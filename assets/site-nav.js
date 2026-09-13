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
    flyer.href='/flyer/';
    flyer.setAttribute('data-baitsss-flyer-link','true');
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

  function installDuplicateGuard(){
    removeDuplicateLinkedInEmbeds();
    installSoftwareFlyerLink();
    var observer=new MutationObserver(function(){
      removeDuplicateLinkedInEmbeds();
      installSoftwareFlyerLink();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});
    [50,150,400,900,1800,3500].forEach(function(delay){
      window.setTimeout(function(){
        removeDuplicateLinkedInEmbeds();
        installSoftwareFlyerLink();
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
      });
    });
  });
})();

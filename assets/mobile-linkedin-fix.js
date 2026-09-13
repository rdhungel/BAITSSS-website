(function(){
  'use strict';

  /* Mobile-only correction derived from the supplied iPhone screenshot.
     The hero frame spans about 378 CSS px on a 414 px viewport, so with the
     fixed LinkedIn base width W0=504 the render scale is 378/504=0.75.
     The screenshot shows 156 device px of LinkedIn post text above the actual
     video. At iPhone DPR 2 that is 78 CSS px on screen, which corresponds to
     78/0.75=104 base-layout px. The shared desktop Y0=285 therefore becomes
     285+104=389 for the mobile LinkedIn layout. Desktop is untouched. */
  var W0=504;
  var MOBILE_Y0=389;
  var H0=284;

  function applyMobileCrop(){
    if(!window.matchMedia('(max-width:560px)').matches) return;

    var frame=document.querySelector('.hero-video-frame');
    var iframe=frame&&frame.querySelector('iframe[src*="linkedin.com/embed/feed/update"]');
    if(!frame || !iframe) return;

    var containerWidth=frame.clientWidth;
    if(!containerWidth) return;
    var scale=containerWidth/W0;

    frame.style.setProperty('height',(H0*scale)+'px','important');
    frame.style.setProperty('aspect-ratio','auto','important');
    iframe.style.setProperty('top',(-MOBILE_Y0*scale)+'px','important');

    var meta=document.querySelector('.hero-video-meta');
    if(meta){
      meta.style.setProperty('display','flex','important');
      meta.style.setProperty('flex-direction','column','important');
      meta.style.setProperty('align-items','flex-start','important');
      meta.style.setProperty('gap','4px','important');
      var strong=meta.querySelector('strong');
      var link=meta.querySelector('a');
      if(strong) strong.style.setProperty('display','block','important');
      if(link){
        link.style.setProperty('display','block','important');
        link.style.setProperty('margin-top','0','important');
      }
    }
  }

  applyMobileCrop();
  window.addEventListener('resize',applyMobileCrop,{passive:true});
  if(window.ResizeObserver){
    var frame=document.querySelector('.hero-video-frame');
    if(frame){
      var observer=new ResizeObserver(applyMobileCrop);
      observer.observe(frame);
    }
  }
  [50,150,600,1200].forEach(function(delay){
    window.setTimeout(applyMobileCrop,delay);
  });
})();

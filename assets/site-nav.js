(function(){
  'use strict';
  function load(src,done){
    var s=document.createElement('script');
    s.src=src;
    s.async=false;
    if(done)s.onload=done;
    document.head.appendChild(s);
  }
  load('/assets/site-nav-core.js?v=20260911-1',function(){
    load('/assets/site-strengthening.js?v=20260912-hero-video-2');
  });
})();

(function(){
  'use strict';
  function initBAITSSSNavigation(){
    var toggle=document.getElementById('navToggle');
    var nav=document.getElementById('primaryNav');
    if(!toggle||!nav)return;
    var details=nav.querySelector('details.more');
    var mq=window.matchMedia('(max-width:900px)');

    function closeNav(){
      nav.setAttribute('data-open','false');
      toggle.setAttribute('aria-expanded','false');
      if(details)details.removeAttribute('open');
    }
    function openNav(){
      nav.setAttribute('data-open','true');
      toggle.setAttribute('aria-expanded','true');
    }
    function toggleNav(event){
      if(event){
        event.preventDefault();
        event.stopImmediatePropagation();
      }
      if(nav.getAttribute('data-open')==='true')closeNav();
      else openNav();
    }

    closeNav();
    toggle.addEventListener('click',toggleNav,true);

    nav.addEventListener('click',function(event){
      var link=event.target.closest&&event.target.closest('a');
      if(link)closeNav();
    },true);

    document.addEventListener('click',function(event){
      if(nav.getAttribute('data-open')!=='true')return;
      var header=toggle.closest('.site-header');
      if(header&&!header.contains(event.target))closeNav();
    },true);

    document.addEventListener('keydown',function(event){
      if(event.key==='Escape'){
        closeNav();
        try{toggle.focus({preventScroll:true});}catch(e){toggle.focus();}
      }
    });

    window.addEventListener('pagehide',closeNav);
    window.addEventListener('pageshow',function(){
      closeNav();
      requestAnimationFrame(closeNav);
    });

    if(mq.addEventListener)mq.addEventListener('change',closeNav);
    else if(mq.addListener)mq.addListener(closeNav);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initBAITSSSNavigation,{once:true});
  else initBAITSSSNavigation();
})();

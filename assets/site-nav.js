(function(){
  'use strict';
  function initBAITSSSNavigation(){
    var toggle=document.getElementById('navToggle');
    var nav=document.getElementById('primaryNav');
    if(!toggle||!nav)return;

    /* Keep the Business doorway present across every maintained page that uses the shared navigation. */
    var businessLink=nav.querySelector('a[href="/business/"],a[href="../business/"],a[href="./business/"],a[href="business/"]');
    if(!businessLink){
      businessLink=document.createElement('a');
      businessLink.href='/business/';
      businessLink.textContent='Business';
      var contactLink=Array.prototype.find.call(nav.children,function(el){
        return el.tagName==='A'&&(/contact\/?$/.test(el.getAttribute('href')||''));
      });
      var moreForInsert=nav.querySelector('details.more');
      nav.insertBefore(businessLink,contactLink||moreForInsert||null);
    }
    if(window.location.pathname.replace(/\/+$/,'')==='/business')businessLink.classList.add('active');

    /* Software Development & Verification now belongs inside the Software page. */
    Array.prototype.forEach.call(nav.querySelectorAll('a'),function(link){
      var href=link.getAttribute('href')||'';
      if(/software-development\/?(?:#.*)?$/.test(href))link.remove();
    });

    /* Preserve old internal links while the former standalone route is retired. */
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="software-development"]'),function(link){
      var href=link.getAttribute('href')||'';
      if(href.indexOf('#performance-engineering')!==-1)link.setAttribute('href','/software/#performance-engineering');
      else link.setAttribute('href','/software/#development-verification');
    });

    /* Keep collaboration claims sized to the documented evidence and make that evidence easier to find. */
    var path=window.location.pathname.replace(/\/+$/,'')||'/';

    if(path==='/access-participation'){
      var evidence=document.getElementById('documented-collaborations');
      if(evidence){
        var evidenceKicker=evidence.querySelector('.section-kicker');
        var evidenceTitle=evidence.querySelector('h2');
        if(evidenceKicker)evidenceKicker.textContent='02 · Institutional record & documented collaborations';
        if(evidenceTitle)evidenceTitle.textContent='Documented collaborations with externally verifiable institutional records.';
      }
    }

    if(path==='/research-education'){
      Array.prototype.forEach.call(document.querySelectorAll('a[href*="access-participation/#mit-collaboration"]'),function(link){
        link.textContent='MIT student research project';
      });
    }

    if(path==='/business'){
      var heroNote=document.querySelector('.hero-note');
      if(heroNote&&!document.getElementById('business-evidence-link')){
        var businessEvidence=document.createElement('div');
        businessEvidence.id='business-evidence-link';
        businessEvidence.style.marginTop='18px';
        var businessEvidenceAnchor=document.createElement('a');
        businessEvidenceAnchor.href='/access-participation/#documented-collaborations';
        businessEvidenceAnchor.textContent='Review documented collaborations and institutional records →';
        businessEvidenceAnchor.style.color='var(--accent)';
        businessEvidenceAnchor.style.fontWeight='800';
        businessEvidenceAnchor.style.textDecoration='none';
        businessEvidence.appendChild(businessEvidenceAnchor);
        heroNote.appendChild(businessEvidence);
      }
    }

    if(path==='/'){
      var heroActions=document.querySelector('.hero-actions');
      if(heroActions&&!document.getElementById('home-evidence-link')){
        var homeEvidence=document.createElement('a');
        homeEvidence.id='home-evidence-link';
        homeEvidence.className='btn btn-secondary';
        homeEvidence.href='/access-participation/#documented-collaborations';
        homeEvidence.textContent='Institutional Record';
        heroActions.appendChild(homeEvidence);
      }
    }

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

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

      /* Keep the published Kansas LEMA section visible deterministically.
         The homepage contains the iframe directly. Give it a safe height first,
         then tighten to its real document height after load and on later layout changes.
         This avoids the old race where height=0 could remain if the load event fired early. */
      var measurement=document.getElementById('measurement-gap-home');
      var frame=document.getElementById('measurementGapFrame');
      if(!measurement){
        var workflow=document.querySelector('.workflow-preview');
        var anchor=workflow||document.querySelector('main .hero');
        if(anchor){
          measurement=document.createElement('section');
          measurement.id='measurement-gap-home';
          measurement.className='measurement-gap-home';
          measurement.setAttribute('aria-label','BAITSSS Kansas LEMA measurement-gap result');
          frame=document.createElement('iframe');
          frame.id='measurementGapFrame';
          frame.src='/measurement-gap.html?v=20260910-4';
          frame.title='BAITSSS Kansas LEMA measurement-gap result';
          frame.loading='eager';
          measurement.appendChild(frame);
          anchor.insertAdjacentElement('afterend',measurement);
        }
      }

      if(frame){
        frame.style.display='block';
        frame.style.width='100%';
        frame.style.border='0';
        frame.style.background='#0b0f19';
        frame.style.height=(window.innerWidth<=760?'1500px':'1180px');
        frame.style.minHeight=(window.innerWidth<=760?'1500px':'1180px');

        var measurementObserver=null;
        function fitMeasurement(){
          try{
            var doc=frame.contentDocument;
            if(!doc||!doc.documentElement||!doc.body)return false;
            var h=Math.ceil(Math.max(doc.documentElement.scrollHeight,doc.body.scrollHeight));
            if(h>200){
              frame.style.height=h+'px';
              frame.style.minHeight='0';
              return true;
            }
          }catch(e){}
          return false;
        }
        function attachMeasurementObserver(){
          if(!fitMeasurement())return;
          try{
            var doc=frame.contentDocument;
            if(window.ResizeObserver&&doc&&doc.body){
              if(measurementObserver)measurementObserver.disconnect();
              measurementObserver=new ResizeObserver(function(){fitMeasurement();});
              measurementObserver.observe(doc.body);
            }
            if(doc&&doc.fonts&&doc.fonts.ready)doc.fonts.ready.then(function(){fitMeasurement();});
          }catch(e){}
        }
        frame.addEventListener('load',attachMeasurementObserver);
        attachMeasurementObserver();
        [100,300,700,1500,3000].forEach(function(delay){
          window.setTimeout(function(){attachMeasurementObserver();},delay);
        });
        window.addEventListener('resize',function(){
          if(!fitMeasurement())frame.style.height=(window.innerWidth<=760?'1500px':'1180px');
        });
      }
    }

    /* Give time-pressed readers a compact evidence summary before the long scientific record. */
    if(path==='/origins-publications'&&!document.getElementById('top-line-evidence')){
      var hero=document.querySelector('main .hero');
      if(hero){
        var summary=document.createElement('section');
        summary.id='top-line-evidence';
        summary.setAttribute('aria-label','Top-line scientific evidence');
        summary.style.padding='32px 0 36px';
        summary.style.borderBottom='1px solid var(--line)';
        summary.style.background='var(--bg-soft)';

        var wrap=document.createElement('div');
        wrap.className='wrap';

        var label=document.createElement('div');
        label.textContent='Top-line evidence';
        label.style.fontSize='11px';
        label.style.letterSpacing='.13em';
        label.style.textTransform='uppercase';
        label.style.color='var(--accent)';
        label.style.fontWeight='800';
        label.style.marginBottom='16px';
        wrap.appendChild(label);

        var grid=document.createElement('div');
        grid.style.display='grid';
        grid.style.gridTemplateColumns='repeat(auto-fit,minmax(240px,1fr))';
        grid.style.gap='14px';

        var items=[
          ['Peer-reviewed record','Published BAITSSS studies span 2016 through 2025, with DOI-linked records available below.'],
          ['Field evaluation','In one Bushland corn study, cumulative ET error improved from 7% in the blind test to less than 1% after revisions. These values apply to that study and configuration, not as a universal accuracy claim.'],
          ['Independent comparison','Published citrus evaluation directly compared BAITSSS with eddy covariance observations and the OpenET ensemble, with performance reported by orchard and year rather than as a single universal result.']
        ];

        items.forEach(function(item){
          var card=document.createElement('article');
          card.style.padding='20px 22px';
          card.style.border='1px solid var(--line-strong)';
          card.style.borderRadius='12px';
          card.style.background='rgba(255,255,255,.018)';
          var h=document.createElement('h2');
          h.textContent=item[0];
          h.style.margin='0 0 8px';
          h.style.fontSize='18px';
          h.style.lineHeight='1.3';
          var p=document.createElement('p');
          p.textContent=item[1];
          p.style.margin='0';
          p.style.color='var(--text-dim)';
          p.style.fontSize='14px';
          p.style.lineHeight='1.65';
          card.appendChild(h);
          card.appendChild(p);
          grid.appendChild(card);
        });

        wrap.appendChild(grid);
        summary.appendChild(wrap);
        hero.insertAdjacentElement('afterend',summary);
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

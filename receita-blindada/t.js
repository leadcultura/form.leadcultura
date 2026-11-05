/* CHA Agromkt - monitoramento (herdado do site antigo, verificado em 02/11/2026)
   GTM-WT6ZBD4 (Google Ads AW-11320372702, Hotjar, LinkedIn) | GA4 G-JNJT0QSWSN
   Pixel Facebook 986528881368798 | Clarity mbdvjlo9dx
   Carrega na 1a interacao ou 8s apos o load, async, para nao pesar LCP e TBT. */
(function(){
  var w=window,d=document;
  w.dataLayer=w.dataLayer||[];
  w.gtag=function(){w.dataLayer.push(arguments)};
  function s(u){var x=d.createElement('script');x.async=true;x.src=u;d.head.appendChild(x)}
  function go(){
    if(w.__chaTrk)return;w.__chaTrk=1;
    try{
      w.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
      s('https://www.googletagmanager.com/gtm.js?id=GTM-WT6ZBD4');
      w.gtag('js',new Date());w.gtag('config','G-JNJT0QSWSN');
      s('https://www.googletagmanager.com/gtag/js?id=G-JNJT0QSWSN');
    }catch(_){}
    try{
      (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(w,d,'clarity','script','mbdvjlo9dx');
    }catch(_){}
    try{
      if(!w.fbq){var n=w.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!w._fbq)w._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[]}
      s('https://connect.facebook.net/en_US/fbevents.js');
      w.fbq('init','986528881368798');w.fbq('track','PageView');
    }catch(_){}
  }
  ['pointerdown','keydown','scroll','touchstart'].forEach(function(e){w.addEventListener(e,go,{once:true,passive:true})});
  function idle(){setTimeout(go,8000)}
  if(d.readyState==='complete')idle();else w.addEventListener('load',idle);
})();

export function initializeAnalytics(id) {
  if (!id) {
    return;
  }

  const script = document.createElement("script");
  
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  window.gtag = gtag;
  
  gtag("js", new Date());
  gtag("config", id);
}

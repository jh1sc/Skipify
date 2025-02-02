
function startObserver() {
    const body = document.body;
    if (body) {
      console.log('Starting DOM observer');
      checkForAds();
  
      const observer = new MutationObserver((mutationsList) => {
        console.log('DOM mutation observed');
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'childList') {
            console.log('Child list mutation');
            checkForAds();
          }
        });
      });
      observer.observe(body, { childList: true, subtree: true });
    } else {
      console.log('Body not found, waiting 100ms');
      setTimeout(startObserver, 100);
    }
  }
  
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('Document hidden, checking for ads in 1000ms');
      requestIdleCallback(() => checkForAds(), { timeout: 1000 });
    } else {
      console.log('Document visible');
    }
  });
  

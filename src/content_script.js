const modules = [
    'spotify/adDetector.js',
    'spotify/domObserver.js', 
    'spotify/mediaTracker.js',
    'spotify/config.js'
];

modules.forEach(module => {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(module);
  script.type = "text/javascript";
  
  script.onload = () => {
      console.log(`Successfully injected: ${module}`);
  };
  
  document.documentElement.appendChild(script);
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in main.js:", message);

  if (message.action === 'skipAd') {
    console.log("skip")
  }
});



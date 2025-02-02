function checkForAds() {
  let learnMoreElement = Array.from(document.querySelectorAll('p')).find(p => p.textContent.trim() === "Learn more");

  if (learnMoreElement && window.mediaArray && window.mediaArray[0]) {
    let mediaElement = window.mediaArray[0];
    mediaElement.currentTime = 999
  }

  requestIdleCallback(() => {
    checkForAds()
    console.log("checkForAds")
  }, { timeout: 500 });
}

// Keyboard shortcut for testing
document.addEventListener('keydown', (e) => {
  if (e.key === 't') {
    let mediaElement = window.mediaArray?.[0];
    if (mediaElement) {
      mediaElement.currentTime = 999;
    }
  }
});

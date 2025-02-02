document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("test-btn");
  
  testButton.addEventListener("click", () => {
    console.log("Test button was clicked");

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'skipAd' }, (response) => {
      
      if (chrome.runtime.lastError) {
          console.log("Error sending message:", chrome.runtime.lastError);
        } else {
          console.log("Message sent successfully:", response);
        }
      });
    });
  });
});

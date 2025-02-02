import Mellowtel from "mellowtel";

let mellowtel;

(async () => {
    mellowtel = new Mellowtel("c44834d8");
    console.log("Mellowtel initialized");
    await mellowtel.initBackground();
})();


chrome.runtime.onInstalled.addListener(() => {
    console.log("Skipify is installed and running.");


});
  
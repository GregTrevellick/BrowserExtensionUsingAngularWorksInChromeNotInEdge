// Set the window object for multiple browser compatibility
window.browser = (function () {
    return window.msBrowser ||
      window.browser ||
      window.chrome;
})();

window.browser.runtime.sendMessage({ action: "openPopUp" });
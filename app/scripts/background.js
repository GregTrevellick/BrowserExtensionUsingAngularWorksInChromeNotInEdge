window.browser = (function () {
    return window.msBrowser ||
      window.browser ||
      window.chrome;
})();

window.browser.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "openPopUp") {
            window.browser.tabs.query({ active: true, currentWindow: true },
                function (tabs) {
                    window.browser.pageAction.show(tabs[0].id);
                });
        }
    });
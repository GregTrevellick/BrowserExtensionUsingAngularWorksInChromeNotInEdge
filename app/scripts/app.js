window.browser = (function () {
    return window.msBrowser ||
      window.browser ||
      window.chrome;
})();

var myApp = angular.module('myApp', []);
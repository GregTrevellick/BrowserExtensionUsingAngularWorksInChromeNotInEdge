# Angular expression evaluates in Chrome extension but not in Edge extension

<!--BadgesSTART-->
[![Read Me Synchronizer](https://img.shields.io/badge/-powered%20by%20read%20me%20synchronizer-brightgreen.svg)](https://github.com/undefined/ReadMeSynchronizer)
<!-- Powered by https://github.com/undefined/ReadMeSynchronizer -->

[Subscribe](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/subscription) to receive notificatons.

[![BetterCodeHub compliance](https://bettercodehub.com/edge/badge/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge?branch=master)](https://bettercodehub.com/results/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fbab92a148b146209eda380777abc7c5)](https://www.codacy.com/project/gtrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge&amp;utm_campaign=Badge_Grade_Dashboard)
[![CodeBeat](https://codebeat.co/badges/undefined)](https://codebeat.co/projects/github-com-gregtrevellick-browserextensionusingangularworksinchromenotinedge-master)
[![CodeFactor](https://www.codefactor.io/repository/github/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/badge)](https://www.codefactor.io/repository/github/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge)
[![InspecodeRocro Report](https://inspecode.rocro.com/badges/github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/report?token=oiC3zAlWfQoJ0J99U_3ETsi7sXFllqmEiPWjlDzujOA)](https://inspecode.rocro.com/reports/github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/branch/master/summary)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/context:javascript)
[![GitHub top language](https://img.shields.io/github/languages/top/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge.svg)](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge)
[![Github language count](https://img.shields.io/github/languages/count/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge.svg)](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge)
[![GitHub issues](https://img.shields.io/github/issues-raw/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge.svg)](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge.svg)](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/pulls)














[![InspecodeRocro Job Status](https://inspecode.rocro.com/badges/github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/status?token=oiC3zAlWfQoJ0J99U_3ETsi7sXFllqmEiPWjlDzujOA)](https://inspecode.rocro.com/jobs/github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/latest?completed=true)
[![Hound](https://img.shields.io/badge/hound_ci-checked-brightgreen.svg)](https://houndci.com/)
[![Access Lint github](https://img.shields.io/badge/a11y-checked-brightgreen.svg)](https://www.accesslint.com)
[![ImgBot](https://img.shields.io/badge/images-optimized-brightgreen.svg)](https://imgbot.net/)
[![Renovate Bot github](https://img.shields.io/badge/renovatebot-checked-brightgreen.svg)](https://renovatebot.com/)
[![Charity Ware](https://img.shields.io/badge/charity%20ware-thank%20you-brightgreen.svg)](https://github.com/GregTrevellick/MiscellaneousArtefacts/wiki/Charity-Ware)
[![License](https://img.shields.io/github/license/gittools/gitlink.svg)](/LICENSE.txt)
<!--BadgesEND-->


STACKOVERFLOW QUESTION

I have a simple browser extension, using Angular (v1.6.3), but the Angular expression in the pop-up window of the browser extension is failing to evaluate in Edge, but it is in Chrome.

The Angular expression is simply ```<div>{{2+2}}</div>```.


When I browse to a relevant website (as configured in the [manifest file](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/manifest.json), namely http://marketplace.visualstudio.com, https://marketplace.visualstudio.com or http://www.bbc.com, and click the extension button, Chrome evaluates the html output to "4", but Edge evaluates the html output to "{{2+2}}".    

Chrome example

![Chrome as a browser extension](http://i.imgur.com/9bFBu7I.png)

Edge example

![Edge as a browser extension](http://i.imgur.com/nAhgBEu.png)

I believe the html and angular interaction itself is fundamentally sound, because when I browse directly to the [pop up page](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/popup.html), using a URL such as ```file:///C:/temp/app/popup.html```, both Chrome and Edge correctly evaluate the expression ```{{2+2}}``` to "4". 

Chrome example when brosing directly to [popup.html](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/popup.html)

![Chrome direct browse to popup.html](http://i.imgur.com/hARYA8g.png)

Edge example when browsing directly to [popup.html](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/popup.html)

![Edge direct browse to popup.html](http://i.imgur.com/38hIRKx.png)

To summarize, it is only as an Edge extension that the expression evaluation fails; as a Chrome extension or with direct browsing in both Edge and Chrome it works.

Thirty second video demo on You Tube:
[![YouTube demo](https://img.youtube.com/vi/MEk-0VzBGHo/0.jpg)](https://www.youtube.com/watch?v=MEk-0VzBGHo)

I have placed a full version of the source code on [GitHub](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge) but code is quite simple and consists of the following:

A [popup.html](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/popup.html) file page for the pop-up window, which contains the Angular expression:

    <html>
    <head>
    <script type="text/javascript" src="scripts/angular.min.js"></script>
    <script type="text/javascript" src="scripts/app.js"></script>
    </head>
    <body>
    <div ng-app="myApp">
        <div>{{2+2}}</div>
    </div>
    </body>
    </html>

An [app.js](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/scripts/app.js) file to define the angular module:

    var myApp = angular.module('myApp', []);

A [contentscript.js](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/scripts/contentscript.js) that tells the website to open the pop-up: 
 
    // Set the window object for multiple browser compatibility
    window.browser = (function () {
    return window.msBrowser ||
      window.browser ||
      window.chrome;
    })();

    window.browser.runtime.sendMessage({ action: "openPopUp" });


A [background.js](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/scripts/background.js) script that actually opens the [popup.html](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/popup.html) file:


    // Set the window object for multiple browser compatibility
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

And finally a [manifest.json](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge/blob/master/app/manifest.json) file that wires everything up together, which both browsers understand:

    {
      "manifest_version": 2,
      "name": "BrowserExtensionUsingAngularWorksChromeNotEdge",
      "version": "1.0.0",
      "author": "Greg Trevellick",
      "page_action": {
        "default_icon": {
          "19": "icon_19x19.png"
        },
         "default_popup": "popup.html"
        },
      "background": {
        "scripts": [ "scripts/background.js" ],
        "persistent": false
      },
      "content_scripts": [
        {
          "matches": [
            "http://marketplace.visualstudio.com/*",
            "https://marketplace.visualstudio.com/*",
            "http://www.bbc.co.uk/*"
          ],
          "js": [
            "scripts/contentscript.js",
            "scripts/angular.min.js"
          ]
        }
      ],
      "permissions": [
        "activeTab",
        "declarativeContent",
        "http://marketplace.visualstudio.com/",
        "https://marketplace.visualstudio.com/",
        "http://www.bbc.co.uk/"
      ],
      "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
    }

For what its worth, some instructions on getting started with Chrome extensions can be found [here](https://developer.chrome.com/extensions/getstarted) and for Edge [here](https://channel9.msdn.com/Blogs/One-Dev-Minute/Debugging-Microsoft-Edge-Extensions).


http://stackoverflow.com/questions/43775016/angular-expression-evaluates-in-chrome-extension-but-not-in-edge-extension

TAGS

google-chrome 
google-chrome-extension
microsoft-edge
microsoft-edge-extension
angular

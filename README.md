# BrowserExtensionUsingAngularWorksInChromeNotInEdge

Sample code for a stackoverflow question


SUBJECT:

Angular expression evaluates in Chrome but not in Edge


TAGS

google-chrome 
google-chrome-extension
microsoft-edge
microsoft-edge-extension
angular


DETAIL

I have a simple browser extension, using Angular (v1.6.3), but the Angular expression in the pop-up window of the extension is failing to evaluate in Edge, but it is in Chrome.

The Angular expression is simply '<div>{{2+2}}</div>'.

When I browse to a website that the extension is designed for (these are defined in the manifest.json file but are http://marketplace.visualstudio.com, https://marketplace.visualstudio.com, http://www.bbc.com) and click the extension button Chrome evaluates the html output to "4", but Edge evaluates the html output to "{{2+2}}".    

I believe the html and angular interaction itself is fundamentally sound, because when I browse directly to the popup.html page, using a URL such as file:///C:/Source/Repos/BrowserExtensionUsingAngularWorksInChromeNotInEdge/app/popup.html, both Chrome and Edge evaluate the expression '<div>{{2+2}}</div>' to "4". 

To summarize it is only as an Edge extension that the evaluation fails, as a Chrome extension or as a non-extension in Edge and Chrome it works.

I have a video demo of the issue on [You tube](https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw)

The [code](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge) for the browser extension is quite simple, as follows:

An html page for the pop-up window, which contains the Angular expression:
'popup.html'

A file to define the angular module:
'app.js'

A content script that tells the website to open the pop-up:
'contentscript.js'

A background script that actually opens the popup.html file:
'background.js'

And finally a json manifest file that wires everything up together, which both browsers understand:
'manifest.json'

There's a full version of the source code available on [GitHub](https://github.com/GregTrevellick/BrowserExtensionUsingAngularWorksInChromeNotInEdge). 

FWIW instructions on getting started with Chrome extension is [here](https://developer.chrome.com/extensions/getstarted) and for Edge [here](https://channel9.msdn.com/Blogs/One-Dev-Minute/Debugging-Microsoft-Edge-Extensions).

## HOW TO USE
Put next code into web browser's address bar.  
```
data:text/html,<html> <head> <meta charset="utf-8"> <script src="https://cdn.jsdelivr.net/npm/markdown-it@13/dist/markdown-it.min.js"> </script> <script type="text/javascript">const md=window.markdownit(); const hookKeyList=[9]; document.addEventListener('DOMContentLoaded', function(){const preEl=document.getElementById('content'); const divEl=document.getElementById('preview'); init(preEl, divEl);},{once: true}); function init(editerEl, previewEl){ previewEl.innerHTML=md.render(editerEl.innerText); editerEl.onkeydown=function onKeyDown(e){if (hookKeyList.includes(e.keyCode)){ e.preventDefault();};}; editerEl.onkeyup=(e)=>{if (e.keyCode===9){document.execCommand('insertHTML', false, ' ');}else if (e.keyCode===13){}; previewEl.innerHTML=md.render(e.target.innerText);};}; </script> </head> <body> <div id="body" style=" display: grid; height: 100%; grid-template-rows: 1fr; grid-template-columns: 1fr 1fr; gap: 1em; "> <pre id="content" contenteditable="true" style="padding: 0.5em;">%23%23 Local Markdown Editor <div>Let's write down left area</div></pre> <div id="preview"></div></div></body></html>
```

I assume you bookmarking this, and write markdown text quickly!

## Summary
above code is minified `./index.html`  
Depends on markdown-it


## Next Feature
- [ ] Save text in LocalStorage, tempolary.
- [ ] Working on disconnect with internet.

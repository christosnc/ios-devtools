var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = 'https://cdn.jsdelivr.net/npm/eruda';
script.onload = function(){
  var loaded = document.createElement('script');
  loaded.type = 'text/javascript';
  loaded.innerHTML = "eruda.init(); var stylesheet = document.createElement('style'); var scriptFix = document.createElement('script'); fetch('https://raw.githubusercontent.com/christosnc/ios-devtools/master/devtools.css').then(response => response.text()).then((data) => {stylesheet.innerHTML = data; eruda._shadowRoot.appendChild(stylesheet);}); fetch('https://raw.githubusercontent.com/christosnc/ios-devtools/master/devtools.js').then(response => response.text()).then((data) => {scriptFix.innerHTML = data; document.body.appendChild(scriptFix); erudaFix(eruda._shadowRoot);});";
  document.body.appendChild(loaded);
}
document.body.appendChild(script);
<script src="https://cdn.jsdelivr.net/npm/eruda-dom"></script>
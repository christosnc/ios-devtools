var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = 'https://cdn.jsdelivr.net/npm/eruda';
script.onload = function(){
  var domPlugin = document.createElement('script');
  domPlugin.type = 'text/javascript';
  domPlugin.async = true;
  domPlugin.src = "https://cdn.jsdelivr.net/npm/eruda-dom";
  domPlugin.onload = function(){
    var domPlugin_loaded = document.createElement('script');
    domPlugin_loaded.type = 'text/javascript';
    domPlugin_loaded.innerHTML = "eruda.add(erudaDom);";
    document.body.appendChild(domPlugin_loaded);
  }
  document.body.appendChild(domPlugin);

  var loaded = document.createElement('script');
  loaded.type = 'text/javascript';
  loaded.innerHTML = "eruda.init({tool:['console', 'elements', 'network', 'resources', 'sources']}); eruda.remove('settings'); var stylesheet = document.createElement('style'); var scriptFix = document.createElement('script'); fetch('https://raw.githubusercontent.com/christosnc/ios-devtools/master/devtools.css').then(response => response.text()).then((data) => {stylesheet.innerHTML = data; eruda._shadowRoot.appendChild(stylesheet);}); fetch('https://raw.githubusercontent.com/christosnc/ios-devtools/master/devtools.js').then(response => response.text()).then((data) => {scriptFix.innerHTML = data; document.body.appendChild(scriptFix); erudaFix(eruda._shadowRoot);});";
  document.body.appendChild(loaded);
}
document.body.appendChild(script);

completion();
function erudaFix(root) {
  //Console textarea fix
  var conversionMap = {}
  conversionMap[0x2018] = '\'';
  conversionMap[0x201B] = '\'';
  conversionMap[0x201C] = '"';
  conversionMap[0x201F] = '"';
  conversionMap[0x2019] = '\'';
  conversionMap[0x201D] = '\"';
  conversionMap[0x2032] = '\'';
  conversionMap[0x2033] = '"';
  conversionMap[0x2035] = '\'';
  conversionMap[0x2036] = '"';
  conversionMap[0x2014] = '-';
  conversionMap[0x2013] = '-';
  function preventPretentiousPunctuation(event){
    if(event.key.length != 1) return;
    var code = event.key.codePointAt(0);
    var replacement = conversionMap[code];
    if(replacement) {
      event.preventDefault();
      document.execCommand('insertText', 0, replacement);
    }
  }
  var textarea = root.querySelector(".eruda-dev-tools .eruda-tools .eruda-console .eruda-js-input textarea");
  textarea.autocorrect = "off";
  textarea.autocapitalize = "off";
  textarea.spellcheck = "off";
  textarea.addEventListener('keypress', preventPretentiousPunctuation, false);

}

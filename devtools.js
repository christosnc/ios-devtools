function erudaFix(root) {
  //Console textarea fix
  var conversionMap = createConversionMap;
  function createConversionMap() {
    var map = {};
    map[0x2018] = '\'';
    map[0x201B] = '\'';
    map[0x201C] = '"';
    map[0x201F] = '"';
    map[0x2019] = '\'';
    map[0x201D] = '\"';
    map[0x2032] = '\'';
    map[0x2033] = '"';
    map[0x2035] = '\'';
    map[0x2036] = '"';
    map[0x2014] = '-';
    map[0x2013] = '-';
    return map;
  }
  function preventPretentiousPunctuation(event) {
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

function erudaFix(root) {
  //Console textarea fix
  function preventPretentiousPunctuation(event) {
    try {
      let initial = textarea.value;
      let replaced = "";
      replaced = initial.replace(/[\u2018\u201B\u201C\u201F\u2019\u201D\u2032\u2033\u2035\u2036\u2014\u2013]/g, (char) => '\'\'""\'"\'"\'"--'.substr('\u2018\u201B\u201C\u201F\u2019\u201D\u2032\u2033\u2035\u2036\u2014\u2013'.indexOf(char), 1));
      if(initial !== replaced){
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        textarea.value = replaced;
        textarea.selectionStart = start;
        textarea.selectionEnd = end;
      }
    }
    catch(err) {}
  }
  var textarea = root.querySelector(".eruda-dev-tools .eruda-tools .eruda-console .eruda-js-input textarea");
  textarea.autocorrect = "off";
  textarea.autocapitalize = "off";
  textarea.spellcheck = "off";
  textarea.addEventListener('input', preventPretentiousPunctuation);
}

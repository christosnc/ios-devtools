function erudaFix(root){
  //Console textarea fix
  var textarea = root.querySelector(".eruda-dev-tools .eruda-tools .eruda-console .eruda-js-input textarea");
  textarea.autocorrect = "off";
  textarea.autocapitalize = "off";
  textarea.spellcheck = "off";
}

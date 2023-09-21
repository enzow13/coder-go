document.addEventListener('DOMContentLoaded', function() {
    CodeMirror.fromTextArea(document.getElementById("CODE-AREA"), {
      mode: 'python',
      theme: 'darcula',
      lineNumbers: true
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  CodeMirror.fromTextArea(document.getElementById("CODE-OUTPUT"), {
    mode: 'javascript',
    theme: 'darcula',
    lineNumbers: true
  });
});

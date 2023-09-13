document.addEventListener('DOMContentLoaded', function() {
    CodeMirror.fromTextArea(document.getElementById("CODE-AREA"), {
      mode: 'javascript',
      theme: 'dracula',
      lineNumbers: true
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    CodeMirror.fromTextArea(document.getElementById("CODE-AREA"), {
      mode: 'python',
      theme: 'dracula',
      lineNumbers: true
    });
  });
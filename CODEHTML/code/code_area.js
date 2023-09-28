document.addEventListener('DOMContentLoaded', function() {
    CodeMirror.fromTextArea(document.getElementById("CODE-AREA"), {
      mode: 'python',
      theme: 'darcula',
      lineNumbers: true
    });
  });
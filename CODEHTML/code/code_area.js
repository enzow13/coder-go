let textarea = document.getElementById("Input Code");
let btnRun = document.getElementById("btn-run");

/* Objeto do textarea código */

var code = CodeMirror.fromTextArea(textarea, {
  mode: 'javascript',
  theme: 'default',
  lineNumbers: true
});

/* Botão que recebe valores do objeto textarea e retorna em compilado */

btnRun.addEventListener('click', () => {
  var codigo = code.getValue();

  console.log(eval(`${codigo}`))
})


/*
document.addEventListener('DOMContentLoaded', function() {
    let code = CodeMirror.fromTextArea(codigo, {
      mode: 'javascript',
      theme: 'default',
      lineNumbers: true
    });
  });

document.getElementById("btn-run").addEventListener('click', () => {
  code.getValue();
})
*/
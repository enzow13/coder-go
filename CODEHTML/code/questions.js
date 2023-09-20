/*
function CreateExercise(id){
  let text_exercise = document.getElementById(id);

  fetch("./exercicios/python/iniciante/exercicios.json")
  .then(response => response.json())
  .then(ex => {
    random_number = Math.floor(Math.random() * 10) + 1
    num_question = ex[random_number].number_question; // Número da questão
    msg_question = ex[random_number].question; // Mensagem da questão
    text_exercise.innerHTML = msg_question
  })
  .catch(error => console.error('Erro:', error));
}

CreateExercise("main-p")
*/

let text_exercise = document.getElementById('main-p');

fetch("/exercicios/python/iniciante/exercicios.json")
.then(response => response.json())
.then(ex => {
  random_number = Math.floor(Math.random() * 10) + 1
  num_question = ex[random_number].number_question; // Número da questão
  msg_question = ex[random_number].question; // Mensagem da questão
  text_exercise.innerHTML = msg_question
})
.catch(error => console.error('Erro:', error));
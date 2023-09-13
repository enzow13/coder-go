let p_exercise = document.getElementById("P-MAIN_QUESTION");

fetch("./exercicios/python/iniciante/exercicios.json")
.then(response => response.json())
.then(ex => {
  random_number = Math.floor(Math.random() * 10) + 1
  num_question = ex[random_number].number_question; // Número da questão
  msg_question = ex[random_number].question; // Mensagem da questão
  p_exercise.innerHTML = msg_question
})
.catch(error => console.error('Erro:', error));

import {questions} from '../../exercicios/questions.js'

let text_exercise = document.getElementById('p-exercise');

let random_num = () => {
  let random_num = (Math.floor(Math.random() * 10))

  return random_num
}

let msg_question = questions[random_num()].question;

text_exercise.innerHTML = msg_question
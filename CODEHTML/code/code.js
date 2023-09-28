import {questions} from '../code/questions.js'

let random_num = () => {
  let random_num = (Math.floor(Math.random() * 10))

  return random_num
}

let text_exercise = document.getElementById('main-p');

let msg_question = questions[random_num()].question;

text_exercise.innerHTML = msg_question
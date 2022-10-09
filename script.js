const quizData = [
  {
    question: "How old are you?",
    a: "10",
    b: "15",
    c: "25",
    d: "45",
    correct: "c",
  },
  {
    question: "Best programming language?",
    a: "Python",
    b: "Javascript",
    c: "C++",
    d: "Kotlin",
    correct: "a",
  },
  {
    question: "What Brand car do you Like?",
    a: "BMW",
    b: "TESLA",
    c: "TOYOTA",
    d: "MERCEDEGE",
    correct: "c",
  },
  {
    question: "What is your budget to buy a new car",
    a: "30000",
    b: "50000",
    c: "15000",
    d: "25000",
    correct: "b",
  },
];

const questionEL = document.getElementById("question"); //loading the quiz text
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");
const answerEls = document.querySelectorAll(".answer"); //get class element input as radio button
const quizResult = document.getElementById("quiz");

let currentQuiz = 0;
loadQuiz();
let score = 0;

function loadQuiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    //console.log(answer.value); check value property
    //console.log(answer.checked); check if one answer  is selected and return 1 true 3 false
    if (answerEl.checked) {
      //checked property sets or returns the checked state of a checkbox.
      answer = answerEl.id; // id of the answers ex: a or b or c or d
    }
  });
  return answer;
}

function deSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quizResult.innerHTML = `<h2>Correct answers ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Reload</button>`//create a button to reload from same location
  }
});

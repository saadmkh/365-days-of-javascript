let questions = [
  { id: 1, question: "2 + 2 = ?", options: [3, 4, 5], correct: 4 },
  { id: 2, question: "Capital of France?", options: ["Rome", "Paris", "Berlin"], correct: "Paris" }
];

let score = 0;

function showQuestions() {
  console.log(questions);
}

function checkAnswer(id, answer) {
  let q = questions.find(q => q.id == id);
  if (q && q.correct == answer) {
    score++;
  }
}

function addQuestion(qText, opts, correctAns) {
  let newQuestion = {
    id: Date.now(),
    question: qText,
    options: opts,
    correct: correctAns
  };
  questions.push(newQuestion);
}

function removeQuestion(id) {
  questions = questions.filter(q => q.id != id);
}

function showScore() {
  console.log("Score:", score);
}

addQuestion("5 * 2 = ?", [5, 10, 15], 10);
checkAnswer(1, 4);
checkAnswer(2, "Paris");
removeQuestion(2);
showQuestions();
showScore();

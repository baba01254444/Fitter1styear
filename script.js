
const questions = [
  {
    question: "рд╕рдВрдЪрд╛рд░ рдХреНрдпрд╛ рд╣реИ? (What is communication?)",
    options: [
      { text: "рд╡рд┐рдЪрд╛рд░реЛрдВ рдХрд╛ рдЖрджрд╛рди-рдкреНрд░рджрд╛рди (Exchange of ideas)", correct: true },
      { text: "рдЙрддреНрдкрд╛рджрди (Production)", correct: false },
      { text: "рддреБрд▓рдирд╛ (Comparison)", correct: false },
      { text: "рдЖрд▓реЛрдЪрдирд╛ (Criticism)", correct: false }
    ]
  },
  {
    question: "рд╡реГрддреНрдд рдХреЗ рдХрд┐рддрдиреЗ рдХреЗрдВрджреНрд░ рд╣реЛрддреЗ рд╣реИрдВ? (How many centers does a circle have?)",
    options: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "0", correct: false }
    ]
  }
];

let currentIndex = 0;
let score = 0;
let answered = Array(questions.length).fill(false);

function loadQuestion(index) {
  const q = questions[index];
  const questionBox = document.getElementById("question-box");
  const optionsBox = document.getElementById("options-box");
  questionBox.innerText = (index + 1) + ". " + q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.innerText = opt.text;
    btn.className = "option";
    btn.onclick = () => selectOption(btn, opt.correct, index);
    optionsBox.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
}

function selectOption(elem, isCorrect, index) {
  if (answered[index]) return;
  answered[index] = true;

  const options = document.querySelectorAll(".option");
  options.forEach(opt => opt.onclick = null);

  if (isCorrect) {
    elem.classList.add("correct");
    score++;
  } else {
    elem.classList.add("wrong");
    options.forEach(opt => {
      if (opt.innerText.includes("рд╡рд┐рдЪрд╛рд░реЛрдВ рдХрд╛ рдЖрджрд╛рди-рдкреНрд░рджрд╛рди") || opt.innerText === "1")
        opt.classList.add("correct");
    });
    if (navigator.vibrate) navigator.vibrate(150);
  }
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  }
}

function submitQuiz() {
  let percent = Math.round((score / questions.length) * 100);
  let message = "";
  if (percent <= 20) message = "рдмрд╣реБрдд рдмреЗрдХрд╛рд░";
  else if (percent <= 30) message = "рдмреЗрдХрд╛рд░";
  else if (percent <= 50) message = "рдереЛрдбрд╝рд╛ рд╕рд╣реА рд╣реИ";
  else if (percent <= 70) message = "рдЕрдЪреНрдЫрд╛";
  else if (percent <= 90) message = "рдмрд╣реБрдд рдЕрдЪреНрдЫрд╛ ЁЯда";
  else if (percent < 100) message = "EXCELLENT ЁЯСМ";
  else message = "рд╢рд╛рдмрд╛рд╢ рдЕрдм рддреЛ рдкреВрд░рд╛ рд░рд┐рдХреЙрд░реНрдб рдЯреВрдЯ рдЬрд╛рдПрдЧрд╛ ЁЯТктЬЕ";
  document.getElementById("feedback").innerText = `рдЖрдкрдХрд╛ рд╕реНрдХреЛрд░: ${percent}% - ${message}`;
}

window.onload = () => loadQuestion(currentIndex);

const questions = [
  {
    question: "संचार क्या है? (What is communication?)",
    options: [
      { text: "विचारों का आदान-प्रदान (Exchange of ideas)", correct: true },
      { text: "उत्पादन (Production)", correct: false },
      { text: "तुलना (Comparison)", correct: false },
      { text: "आलोचना (Criticism)", correct: false }
    ]
  },
  {
    question: "वृत्त के कितने केंद्र होते हैं? (How many centers does a circle have?)",
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
      if (opt.textContent.includes("विचारों का आदान-प्रदान") || opt.textContent === "1") {
        opt.classList.add("correct");
      }
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
  if (percent <= 20) message = "बहुत बेकार";
  else if (percent <= 30) message = "बेकार";
  else if (percent <= 50) message = "थोड़ा सही है";
  else if (percent <= 70) message = "अच्छा";
  else if (percent <= 90) message = "बहुत अच्छा 🤠";
  else if (percent < 100) message = "EXCELLENT 👌";
  else message = "शाबाश अब तो पूरा रिकॉर्ड टूट जाएगा 💪✅";
  document.getElementById("feedback").innerText = `आपका स्कोर: ${percent}% - ${message}`;
}

window.onload = () => loadQuestion(currentIndex);

let questions = []; let currentPage = 0; const pageSize = 20;

const subjects = { employability: [ { q: "Communication ka matlab kya hota hai?", o: [ "बात करना / Talking", "खाना खाना / Eating", "सोना / Sleeping", "पढ़ाई करना / Studying" ], a: 0 }, { q: "Resume kya hota hai?", o: [ "पढ़ाई की किताब", "Job ke liye bio-data", "Newspaper", "Shopping list" ], a: 1 } // Add more employability questions here ], drawing: [ { q: "Scale ka upyog kis liye hota hai?", o: [ "Map banana", "Design nikalna", "Measurement ke liye", "Color karne ke liye" ], a: 2 } // Add more drawing questions here ], fittertheory: [ { q: "Hammer ka use kya hai?", o: [ "Cutting", "Joining", "Filing", "Hitting" ], a: 3 } // Add more fitter theory questions here ], workshopscience: [ { q: "Force ki unit kya hai?", o: [ "Meter", "Second", "Newton", "Gram" ], a: 2 } // Add more workshop questions here ] };

function loadSubject() { const subject = document.getElementById("subjectSelect").value; if (!subject) return; questions = subjects[subject]; currentPage = 0; showQuestions(); }

function showQuestions() { const quizDiv = document.getElementById("quizContainer"); quizDiv.innerHTML = "";

const start = currentPage * pageSize; const end = Math.min(start + pageSize, questions.length);

for (let i = start; i < end; i++) { const q = questions[i]; const qDiv = document.createElement("div"); qDiv.className = "question-block";

const qText = document.createElement("div");
qText.className = "question";
qText.innerHTML = `${i + 1}. ${q.q}`;
qDiv.appendChild(qText);

q.o.forEach((opt, index) => {
  const optBtn = document.createElement("div");
  optBtn.className = "option";
  optBtn.innerText = opt;
  optBtn.onclick = () => selectAnswer(optBtn, index, q.a);
  qDiv.appendChild(optBtn);
});

quizDiv.appendChild(qDiv);

}

document.getElementById("score").innerText = ""; }

function selectAnswer(el, selectedIndex, correctIndex) { const parent = el.parentNode; const options = parent.querySelectorAll(".option"); options.forEach((opt, i) => { opt.onclick = null; // disable further click if (i === correctIndex) opt.classList.add("correct"); if (i === selectedIndex && i !== correctIndex) opt.classList.add("incorrect"); }); }

function submitQuiz() { let total = 0; let correct = 0; const blocks = document.querySelectorAll(".question-block");

blocks.forEach((block, i) => { total++; const options = block.querySelectorAll(".option"); options.forEach(opt => { if (opt.classList.contains("correct") && opt.classList.contains("selected")) { correct++; } }); });

const percent = Math.round((correct / total) * 100); let msg = percent >= 80 ? "शानदार प्रदर्शन!" : percent >= 50 ? "अच्छा है, सुधार करें।" : "कृपया और मेहनत करें।";

document.getElementById("score").innerText = आपका स्कोर: ${percent}% - ${msg}; }

function nextPage() { if ((currentPage + 1) * pageSize < questions.length) { currentPage++; showQuestions(); } }

function prevPage() { if (currentPage > 0) { currentPage--; showQuestions(); } }

  

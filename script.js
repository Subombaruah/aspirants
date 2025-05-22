 questions = [
  {
    q: "Which organelle is known as the powerhouse of the cell?",
    options: ["Ribosome", "Mitochondria", "Golgi body", "Lysosome"],
    correct: 1
  },
  {
    q: "The cell wall in plant cells is made of:",
    options: ["Cellulose", "Chitin", "Protein", "Lipids"],
    correct: 0
  },
  {
    q: "Which cell organelle contains its own DNA?",
    options: ["Lysosome", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    correct: 1
  },
  {
    q: "Nucleus is absent in:",
    options: ["Amoeba", "RBC", "Paramecium", "Fungi"],
    correct: 1
  },
  {
    q: "Which of these is not a membrane-bound organelle?",
    options: ["Nucleus", "Lysosome", "Ribosome", "Mitochondria"],
    correct: 2
  }
];

let index = 0;
let score = 0;
let botScore = 0;

const questionText = document.getElementById('questionText');
const options = document.getElementById('options');
const status = document.getElementById('status');
const result = document.getElementById('result');
const yourScore = document.getElementById('yourScore');
const botScoreDisplay = document.getElementById('botScore');

function loadQuestion() {
  const q = questions[index];
  questionText.textContent = Q${index + 1}: ${q.q};
  options.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    options.appendChild(btn);
  });

  status.textContent = "Your turn...";
}

function selectAnswer(i) {
  const correct = questions[index].correct;
  if (i === correct) {
    score++;
  }

  disableOptions();
  status.textContent = "Opponent is thinking...";

  setTimeout(() => {
    const botCorrect = Math.random() > 0.4;
    if (botCorrect) botScore++;
    nextQuestion();
  }, 2000);
}

function disableOptions() {
  const buttons = options.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.classList.add("disabled");
  });
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').style.display = 'none';
  result.style.display = 'block';
  yourScore.textContent = score;
  botScoreDisplay.textContent = botScore;
}

// Simulate opponent joining
setTimeout(() => {
  status.textContent = "Opponent found: Anjali_P (Delhi)";
  setTimeout(() => {
    loadQuestion();
  }, 2000);
}, 2000);

const quizData = [
    {
        question: "1. What does CSS stand for?",
        options: [
            "Cascading Style Sheets","Creative Style System","Computer Style Sheets","Cascading Simple Sheets"],
        answer: 0
    },
    {
        question: "2. Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bg-color", "background"],
        answer: 1
    },
    {
        question: "3. How do you make text bold in CSS?",
        options: [
            "font-weight: bold;","text-style: bold;","font: bold;","text-weight: bold;"
        ],
        answer: 0
    },
    {
        question: "4. Which CSS property is used to control the spacing between lines of text?",
        options: ["line-height", "letter-spacing", "text-spacing", "line-spacing"],
        answer: 0
    },
    {
        question: "5. How do you select an element with the id 'header' in CSS?",
        options: ["#header", ".header", "header", "id('header')"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options");
const nextButton = document.querySelector("button[onclick='nextQuestion()']");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

function selectAnswer(selectedIndex, selectedButton) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    options.forEach((option) => (option.disabled = true));

    if (selectedIndex === currentQuestion.answer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
        options[currentQuestion.answer].classList.add("correct");
    }

    scoreElement.innerText = `Score: ${score}`;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "Quiz Over!";
        optionsContainer.innerHTML = `<p style="color:white;">Your final score is ${score}/${quizData.length}</p>`;
        nextButton.style.display = "none";
    }
}

loadQuestion();
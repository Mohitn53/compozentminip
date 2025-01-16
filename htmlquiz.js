/* const quizData = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Modern Language"
        ],
        answer: 2
    },
    {
        question: "2. Which HTML element is used for the largest heading?",
        options: ["<h1>", "<head>", "<header>", "<h6>"],
        answer: 0
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<b>"],
        answer: 1
    },
    {
        question: "4. Which attribute is used to provide an alternate text for an image?",
        options: ["title", "alt", "src", "href"],
        answer: 1
    },
    {
        question: "5. How can you create an ordered list in HTML?",
        options: ["<ul>", "<list>", "<ol>", "<li>"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.getElementsByClassName("option");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    for (let i = 0; i < optionsElements.length; i++) {
        optionsElements[i].innerText = currentQuestion.options[i];
    }
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }
    selectAnswer.disabled=true;
    scoreElement.innerText = ` Score: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert(`Quiz Over! Your final score is ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
        scoreElement.innerText = "Score: 0";
    }
}

loadQuestion();
const quizData = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Modern Language"
        ],
        answer: 2
    },
    {
        question: "2. Which HTML element is used for the largest heading?",
        options: ["<h1>", "<head>", "<header>", "<h6>"],
        answer: 0
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<b>"],
        answer: 1
    },
    {
        question: "4. Which attribute is used to provide an alternate text for an image?",
        options: ["title", "alt", "src", "href"],
        answer: 1
    },
    {
        question: "5. How can you create an ordered list in HTML?",
        options: ["<ul>", "<list>", "<ol>", "<li>"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementsByClassName("options");
const nextButton = document.getElementById("next-button");
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

    // Disable all options
    options.forEach(option => (option.disabled = true));

    // Highlight the selected answer
    if (selectedIndex === currentQuestion.answer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
        // Highlight the correct answer
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
        optionsContainer.innerHTML = `<p>Your final score is ${score}/${quizData.length}</p>`;
        nextButton.style.display = "none";
    }
}

loadQuestion();*/

const quizData = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Modern Language",
        ],
        answer: 2,
    },
    {
        question: "2. Which HTML element is used for the largest heading?",
        options: ["<h1>", "<head>", "<header>", "<h6>"],
        answer: 0,
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<b>"],
        answer: 1,
    },
    {
        question: "4. Which attribute is used to provide an alternate text for an image?",
        options: ["title", "alt", "src", "href"],
        answer: 1,
    },
    {
        question: "5. How can you create an ordered list in HTML?",
        options: ["<ul>", "<list>", "<ol>", "<li>"],
        answer: 2,
    },
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
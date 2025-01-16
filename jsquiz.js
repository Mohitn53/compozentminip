const quizData = [
    {
        question: "1. Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "2. What is the correct syntax for referring to an external script called 'app.js'?",
        options: [
            "<script name='app.js'>",
            "<script href='app.js'>",
            "<script src='app.js'>",
            "<script file='app.js'>"
        ],
        answer: 2
    },
    {
        question: "3. How do you write 'Hello World' in an alert box?",
        options: [
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
            "popup('Hello World');"
        ],
        answer: 1
    },
    {
        question: "4. Which of the following is a valid way to declare a variable in JavaScript?",
        options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
        answer: 3
    },
    {
        question: "5. How do you create a function in JavaScript?",
        options: [
            "function = myFunction()",
            "function myFunction()",
            "def myFunction()",
            "function:myFunction()"
        ],
        answer: 1
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
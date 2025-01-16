const quizData = [
    {
        question: "1. What is the correct file extension for Python files?",
        options: [".py", ".python", ".pyt", ".pt"],
        answer: 0
    },
    {
        question: "2. How do you create a variable in Python?",
        options: [
            "var x = 10",
            "x = 10",
            "int x = 10",
            "let x = 10"
        ],
        answer: 1
    },
    {
        question: "3. Which keyword is used to define a function in Python?",
        options: ["func", "function", "def", "define"],
        answer: 2
    },
    {
        question: "4. How do you start a for loop in Python?",
        options: [
            "for x to range(10):",
            "for x in range(10):",
            "for (x=0; x<10; x++):",
            "foreach x in range(10):"
        ],
        answer: 1
    },
    {
        question: "5. What is the correct way to import a module in Python?",
        options: [
            "import(module)",
            "include module",
            "using module",
            "import module"
        ],
        answer: 3
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
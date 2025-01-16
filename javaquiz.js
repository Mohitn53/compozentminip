const quizData = [
    {
        question: "1. What is the main purpose of the 'main' method in Java?",
        options: [
            "To define the class",
            "To execute the code",
            "To initialize variables",
            "To handle errors"
        ],
        answer: 1
    },
    {
        question: "2. Which of the following is not a Java keyword?",
        options: ["class", "main", "interface", "extends"],
        answer: 1
    },
    {
        question: "3. What is the default value of an int variable in Java?",
        options: ["1", "null", "0", "undefined"],
        answer: 2
    },
    {
        question: "4. Which keyword is used to inherit a class in Java?",
        options: ["inherit", "super", "implements", "extends"],
        answer: 3
    },
    {
        question: "5. How do you declare an array in Java?",
        options: [
            "array int arr[10];",
            "int arr = new array[10];",
            "int arr = int[10];",
            "int[] arr = new int[10];"
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
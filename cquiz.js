const quizData = [
        {
            question: "1.	Which of the following is the correct syntax to declare a variable in C?",
            options: ["int num", "num int", "int = num", "variable num"],
            answer: 0
        },
        {
            question: "What is the output of  (5 + 3 * 2)?",
            options: ["16", "11", "13", "10"],
            answer: 1
        },
        {
            question: "Which of the following is a valid loop structure in C?",
            options: ["for", "while", "do while", "All of above"],
            answer: 3
        },
        {
            question: "What is a pointer in C?",
            options: ["A variable that stores a memory address", " A keyword for referencing variables", "A special character in C", "None of the above"],
            answer: 0
        },
        {
            question: "Which header file is used for standard input and output functions in C?",
            options: ["<stdio.h>", "<conio.h>", "<stdlib.h>", "<string.h>"],
            answer: 0
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
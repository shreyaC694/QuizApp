
const questions = [
    {
        question: "What property is used to change the text color in CSS?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "background-color", correct: false },
        ]
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answers: [
            { text: "shift()", correct: false},
            { text: "pop()", correct: false },
            { text: "push()", correct: true },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "Which property is used to control the spacing between lines of text in CSS?",
        answers: [
            { text: "padding", correct: false },
            { text: "text-spacing", correct: false },
            { text: "margin", correct: false },
            {  text: "line-height", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

        answerButton.innerHTML = ''; // Clear previous answers
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectAnswer(answer));
            answerButton.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion(); // Show the next question or end the quiz
}

function endQuiz() {
    questionElement.innerHTML = `Quiz finished! Your score is ${score} out of ${questions.length}.`;
    answerButton.innerHTML = '';
    nextButton.innerHTML = 'Restart';
    nextButton.addEventListener('click', startQuiz);
    nextButton.removeEventListener('click', showQuestion); // Avoid multiple event listeners
}

// Start the quiz
startQuiz();

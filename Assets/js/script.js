const quiz = [
    {
        question: "Qual é o significado de qualidade?",
        choices: [
            "Poder dominar o mundo.",
            "Característica de um produto ou serviço.",
            "Preço de um produto ou serviço.",
            "Quantidade de produtos vendidos."
        ],
        correctAnswer: 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        choices: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correctAnswer: 2
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        choices: ["Terra", "Marte", "Júpiter", "Saturno"],
        correctAnswer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.querySelectorAll(".choice");

    questionElement.textContent = quiz[currentQuestion].question;

    choicesElement.forEach((button, index) => {
        button.textContent = quiz[currentQuestion].choices[index];
    });
}

function selectAnswer(choice) {
    if (choice === quiz[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        showScore();
    }

}



function showScore() {
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");

    scoreElement.textContent = `Você acertou ${score} de ${quiz.length} perguntas!`;
    resultContainer.style.display = "block";
}

window.onload = function () {
    showQuestion();
};

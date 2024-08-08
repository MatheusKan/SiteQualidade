const quiz = [
    {
        question: "Qual é uns dos significados de qualidade?",
        choices: [
            "Poder dominar o mundo.",
            "Característica de um produto ou serviço.",
            "Preço de um produto ou serviço.",
            "Quantidade de produtos vendidos."
        ],
        correctAnswer: 1
    },
    {
        question: "O que é qualidade de software?",
        choices: ["A quantidade de funcionalidades que o software possui.", "O tempo necessário para desenvolver o software.", "A habilidade do software em cumprir com os requisitos especificados e satisfazer as expectativas dos usuários.", "O número de usuários que o software pode suportar simultaneamente."],
        correctAnswer: 2
    },
    {
        question: "Qual dos seguintes aspectos não faz parte da qualidade de software?",
        choices: ["Confiabilidade", "Desempenho", "Portabilidade", "Número de linhas de código"],
        correctAnswer: 3
    },    
    {
        question: "O que significa manutenabilidade no contexto de qualidade de software?",
        choices: ["A capacidade do software de ser executado em diferentes dispositivos e sistemas.", "A facilidade com que o software pode ser mantido e atualizado sem introduzir novos problemas.", "A capacidade do software de funcionar corretamente sob alta carga de dados.", "O número de erros encontrados durante o desenvolvimento."],
        correctAnswer: 1
    }
    


];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.querySelectorAll(".choice");

    // Exibe a pergunta e opções
    questionElement.textContent = quiz[currentQuestion].question;

    choicesElement.forEach((button, index) => {
        button.textContent = quiz[currentQuestion].choices[index];
        button.style.display = "inline-block"; // Torna os botões visíveis
    });

    // Mostra a pergunta e as opções, oculta o resultado
    document.getElementById("result-container").style.display = "none";
    questionElement.style.display = "block";
    choicesElement.forEach(button => button.style.display = "inline-block");
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

    // Esconde a pergunta e as opções
    document.getElementById("question").style.display = "none";
    document.querySelectorAll(".choice").forEach(button => button.style.display = "none");

    // Mostra o resultado
    scoreElement.textContent = `Você acertou ${score} de ${quiz.length} perguntas!`;
    resultContainer.style.display = "block";
}

window.onload = function () {
    showQuestion();
};

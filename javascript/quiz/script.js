let questions = [
    {
        question: "質問1",
        answers: ["回答1", "回答2", "回答3", "回答4"],
        correctAnswer: 0
    },
    // 他の質問を追加...
];

let currentQuestion = 0;

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    for (let i = 0; i < 4; i++) {
        document.getElementById('answer' + (i+1)).textContent = question.answers[i];
    }
}

document.querySelectorAll('.answer').forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.textContent === questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]) {
            alert("正解！");
        } else {
            alert("不正解...");
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert("クイズ終了！");
        }
    });
});

showQuestion();

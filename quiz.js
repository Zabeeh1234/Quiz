const question = [
    {
        question : "What is the scripture of Islam religion?",
        answer : [
            {text: "Quran", correct: true},
            {text: "Hadees", correct: false},
            {text: "Bukari", correct: false},
            {text: "Fazail-Amaal", correct: false},
        ]
    },
    {
        question : "How many chapters are there in Quran?",
        answer : [
            {text: "120", correct: false},
            {text: "118", correct: false},
            {text: "115", correct: false},
            {text: "114", correct: true},
        ]
    },
    {
        question : "Last chapter in Quran:",
        answer : [
            {text: "Al-flaq", correct: false},
            {text: "An-Nās", correct: true},
            {text: "An-Asr", correct: false},
            {text: "al-ahad", correct: false},
        ]
    },
    {
        question : "Who revealed the Quran:",
        answer : [
            {text: "Allah", correct: true},
            {text: "Rasool", correct: false},
            {text: "Sahaba", correct: false},
            {text: "Imam", correct: false},
        ]
    },
    {
        question : "Which Prophet is mentioned most in the Qur'an?",
        answer : [
            {text: "Muhammed", correct: false},
            {text: "Musa", correct: true},
            {text: "Isa", correct: false},
            {text: "Ibrahim", correct: false},
        ]
    },
    {
        question : "Ayat al-Kursi appears in which Surah of the Qur'an?",
        answer : [
            {text: "Surah-fussilat", correct: false},
            {text: "Surah-Al-Mulk", correct: false},
            {text: "Surah-Al-Bakarah", correct: true},
            {text: "Surah-Al-Waqiah", correct: false},
        ]
    },
    {
        question : "The first revelation that Allah's messenger received forms the first verses of which Surah?",
        answer : [
            {text: "Surat Al-Ikhlas", correct: false},
            {text: "Surat Al-Alaq ", correct: true},
            {text: "Surat Al-Nas", correct: false},
            {text: "urat Al-Falaq", correct: false},
        ]
    },
    {
        question : "What does Ar-Rahman mean in English?",
        answer : [
            {text: "The Merciful is Al-Rahim", correct: false},
            {text: "the Sovereign Lord", correct: false},
            {text: "Al-Malik and Al-Quddus is the Holy.", correct: false},
            {text: "The Beneficent or Gracious", correct: true},
        ]
    },
    {
        question : " Al-Ahad is what in English?",
        answer : [
            {text: "The One", correct: true},
            {text: "Al-Awwal", correct: false},
            {text: "Al-Aakhir", correct: false},
            {text: "waiting for answer", correct: false},
        ]
    },
    {
        question : " What is the language of the Qu'ran?",
        answer : [
            {text: "Arabic", correct: true},
            {text: "Urdu", correct: false},
            {text: "Tamil", correct: false},
            {text: "All the Above", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",  selectAnswer);
    });
}

function resetState() {
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.Children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore () {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}! `;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click" , () =>{
    if(currentQuestionIndex < question.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();
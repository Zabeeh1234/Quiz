const question = [
    {
        question : "What is the purpose of studying hadith?",
        answer : [
            {text: "To gain historical knowledge", correct: false},
            {text: "To understand Islamic jurisprudence", correct: false},
            {text: "To learn from the example of Prophet Muhammad (s)", correct: false},
            {text: "All of the above", correct: true},
        ]
    },
    {
        question : "What does Islam mean ?",
        answer : [
            {text: " Islam means to obey Allah (s.w.t.) and follow His commands", correct: true},
            {text: "Islam means to obey our parents", correct: false},
            {text: "Islam means to obey our teachers and elders", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question : "When is Witr Prayer offered",
        answer : [
            {text: " After Sunrise (Fajr)", correct: false},
            {text: "After Evening (Isha)", correct: true},
            {text: "After Sunset (Maghrib)", correct: false},
            {text: "After Noon (Zuhr)", correct: false},
        ]
    },
    {
        question : "What is the purpose of Salat ?",
        answer : [
            {text: "To remember Allah (s.w.t.) is Right", correct: true},
            {text: "To remember Prophet Muhammad (s.a.w.)", correct: false},
            {text: "To remember Shaytan", correct: false},
            {text: " To remember school", correct: false},
        ]
    },
    {
        question : "1st  house of Allah (s.w.t.) in Makkah is called ",
        answer : [
            {text: "Masjid Al-Aqsa", correct: false},
            {text: "Kaaba", correct: true},
            {text: "Masjid An-Nabawi", correct: false},
            {text: "Majid-e-Madeena", correct: false},
        ]
    },
    {
        question : "What is the name of the book sent down to Prophet Ibrahim (a.s.)?",
        answer : [
            {text: " Sahifah", correct: true},
            {text: "Tawrat", correct: false},
            {text: "Zabur", correct: false},
            {text: "Injil", correct: false},
        ]
    },
    {
        question : "What do we call the meal taken before dawn in Ramadan ?",
        answer : [
            {text: "Iftar", correct: false},
            {text: "Sahar ", correct: true},
            {text: "Tarawih", correct: false},
            {text: "Fitr", correct: false},
        ]
    },
    {
        question : "Who was the last Prophet of Allah (s.w.t.)?",
        answer : [
            {text: "Muhammad (s.a.w.)", correct: true},
            {text: "Sulaiman (a.s.)", correct: false},
            {text: "Isa (a.s.)", correct: false},
            {text: "Ibrahim (a.s.)", correct: false},
        ]
    },
    {
        question : "In what way is Islam like a building?",
        answer : [
            {text: "It is built of bricks", correct: false},
            {text: "It protects its owner from the inside and outside", correct: true},
            {text: "It protects the owner from the outside but not the inside", correct: false},
            {text: "It shades its owner", correct: false},
        ]
    },
    {
        question : " What can't Muslims do during Ramadan?",
        answer : [
            {text: "pray", correct: false},
            {text: "Watching Tv", correct: false},
            {text: "Eat", correct: true},
            {text: "Read", correct: false},
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
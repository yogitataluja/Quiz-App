const Quizdata = [{
    question: 'How old are you?',
    a: '10',
    b: '20',
    c: '30',
    d: '45',
    correct: 'c'
},
{
    question: 'What is the best Programimg lang',
    a: 'js',
    b: 'pythond',
    c: 'C',
    d: 'C++',
    correct: 'd'
},
{
    question: 'How old are you brother?',
    a: '10',
    b: '20',
    c: '30',
    d: '45',
    correct: 'a'
},
{
    question: 'How old are you Mother?',
    a: '10',
    b: '20',
    c: '30',
    d: '45',
    correct: 'c'
},
{
    question: 'How old are you Father?',
    a: '10',
    b: '20',
    c: '30',
    d: '45',
    correct: 'b'
},
{
    question: 'How old are you Husband?',
    a: '10',
    b: '20',
    c: '30',
    d: '45',
    correct: 'd'
}]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0




function loadquiz() {

    deselectanswer()
    const currentQuizData = Quizdata[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
loadquiz()

// for store value of answer
function getselected() {
    const answerEls = document.querySelectorAll('.answer')
    let answer = undefined
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectanswer() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}
submitbtn.addEventListener("click", () => {
    const answer = getselected()
    console.log(answer)

    if (answer) {
        if (answer === Quizdata[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < Quizdata.length) {
            loadquiz()
        } else {
            quiz.innerHTML = `<h2> You answer correctly at  
            ${score}/${Quizdata.length} question.
             </h2>
             <button onclick="location.reload()"
             > Reload
             </button>`
        }


    }

})


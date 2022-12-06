const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const quizContEl = document.getElementById('quiz-container')
const questionEl = document.getElementById('question')
const answerBtnsEl = document.getElementById('answer-btn')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startBtn.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  quizContEl.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtnsEl.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while (answerBtnsEl.firstChild) {
    answerBtnsEl.removeChild(answerBtnsEl.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBtnsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Vad är en "array"?',
    answers: [
      { text: 'En referens till en lista med värden', correct: true },
      { text: 'En behållare för ett värde', correct: false },
      { text: 'En behållare för ett index', correct: false },
      { text: 'Samma som en funktion', correct: false }
    ]
  },
  {
    question: 'Poängen med vilkorssatsen "if" är att',
    answers: [
      { text: 'Kunna repetera block med kod', correct: false },
      { text: 'Kunna förgrena sin kod', correct: true },
      { text: 'Kunna lagra flera värden', correct: false },
      { text: 'Deklarera objekt', correct: false }
    ]
  },
  {
    question: 'En "for-sats" är ett exempel på',
    answers: [
      { text: 'Selektion', correct: false },
      { text: 'Repetition', correct: true },
      { text: 'Expression', correct: false },
      { text: '"While-sats"', correct: false }
    ]
  },
  {
    question: 'Hur anropar man funktionen "foo"',
    answers: [
      { text: 'foo {}', correct: false },
      { text: 'foo;', correct: false },
      { text: 'foo()', correct: true },
      { text: 'foo[]', correct: false }
    ]
  },
  {
    question: 'Vad är ett "objekt"',
    answers: [
      { text: 'En samling med index', correct: false },
      { text: 'En samling av "nyckel-värde" par', correct: true },
      { text: 'Samma som en metod', correct: false },
      { text: 'En behållare för ett värde', correct: false }
    ]
  },
  {
    question: 'Vid tilldelning använder vi operatorn:',
    answers: [
      { text: '====', correct: false },
      { text: '=', correct: true },
      { text: '===', correct: false },
      { text: '==', correct: false }
    ]
  },
  {
    question: 'Vad skriver koden ut? \n let a = 7; \n let b = 10; \n let c = a + b; \n c -= 5; \n console.log(c);',
    answers: [
      { text: '7', correct: false },
      { text: '12', correct: true },
      { text: '10', correct: false },
      { text: '17', correct: false }
    ]
  },  
  {
    question: 'Vad skriver koden ut? \n const arr = [ 12, 3, 8, 10 ]; \n arr.unshift(3); \n arr.pop(); \n console.log(arr[0]);',
    answers: [
      { text: '8', correct: false },
      { text: '12', correct: false },
      { text: '10', correct: false },
      { text: '3', correct: true }
    ]
  },  
  {
    question: 'Vad skriver koden ut? \n const obj = { \n name: "Olle", \n age: 12, \n fav_color: "black", \n}; \n console.log(obj.age);',
    answers: [
      { text: 'black', correct: false },
      { text: '12', correct: true },
      { text: 'obj.age', correct: false },
      { text: '"age: 12"', correct: false }
    ]
  },
  {
    question: 'Vad skriver koden ut? \n const b = 12; \n const a = 20; \n if(a === b) { \n console.log("ab"); \n} \n else if(a < b) { \n console.log("b"); \n} \n else { \n console.log("a"); \n}',
    answers: [
      { text: '"a"', correct: true },
      { text: 'a', correct: false },
      { text: '32', correct: false },
      { text: '20', correct: false }
    ]
  },
  {
    question: 'Vilken av dessa lägger till ett element i slutet av en array?',
    answers: [
      { text: 'push()', correct: true },
      { text: 'pop()', correct: false },
      { text: 'shift()', correct: false },
      { text: 'unshift()', correct: false }
    ]
  },
  {
    question: 'Vilken av dessa tar bort ett element i slutet av en array?',
    answers: [
      { text: 'push()', correct: false },
      { text: 'pop()', correct: true },
      { text: 'shift()', correct: false },
      { text: 'unshift()', correct: false }
    ]
  },
  {
    question: 'Vilken av dessa lägger till ett element i början av en array?',
    answers: [
      { text: 'push()', correct: false },
      { text: 'pop()', correct: false },
      { text: 'shift()', correct: false },
      { text: 'unshift()', correct: true }
    ]
  },
  {
    question: 'Vilken av dessa tar bort ett element i början av en array?',
    answers: [
      { text: 'push()', correct: false },
      { text: 'pop()', correct: false },
      { text: 'shift()', correct: true },
      { text: 'unshift()', correct: false }
    ]
  },
  {
    question: 'Vad är HTML DOM?',
    answers: [
      { text: 'Array typ', correct: false },
      { text: 'Module', correct: false },
      { text: 'Object Model', correct: true },
      { text: 'Loop typ', correct: false }
    ]
  },
  {
    question: 'Vad står HTML DOM för?',
    answers: [
      { text: 'Document Object Module', correct: false },
      { text: 'Default Order Model', correct: false },
      { text: 'Document Object Model', correct: true },
      { text: 'Default Order Module', correct: false }
    ]
  },
]

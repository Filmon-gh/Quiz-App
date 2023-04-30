
const activateButton = document.getElementById("Start");
const quizQuestion = document.getElementById("question");
const quizChoices = document.getElementById("choices");
const questionDisplay = document.getElementById("question");
const answerChoices = document.getElementById("choices");

let randomizedQuestions, currentQuestion

activateButton.addEventListener("click", startQuiz);



function startQuiz() {
    console.log("started")
    activateButton.classList.add("hide");
    quizQuestion.classList.remove("hide");
    quizChoices.classList.remove("hide");
    randomizedQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    NextQuestion() 
   
  }

  function NextQuestion() {
    showQuestion(randomizedQuestions[currentQuestion])
  }


  function showQuestion(question) {

    questionDisplay.innerText = question.question;
   
      }


  function selectAnswer() {
  
  }

  const questions = [
    {
      question: 'Which of the following is not a data type in JavaScript?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
]
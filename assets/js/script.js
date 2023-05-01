
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
    question.choices.forEach(choice => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.classList.add("choice");
      if (choice.correct) {
        button.dataset.correct = choice.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerChoices.appendChild(button);
    });
  }  


  function selectAnswer(e) {
  
  }

  const questions = [
    {
      question: 'Which of the following is not a data type in JavaScript?',
      choices: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
]
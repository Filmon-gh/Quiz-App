
const activateButton = document.getElementById("Start");
const nextQuestionButton = document.getElementById("Next");
const quizQuestion = document.getElementById("question");
const quizChoices = document.getElementById("choices");
const questionDisplay = document.getElementById("question");
const answerChoices = document.getElementById("choices");
const container = document.querySelector(".container");
const questionNumberElement = document.getElementById("question-number");
const timerElement = document.getElementById("timer");
const timerContainer= document.querySelector(".timer");


let randomizedQuestions, currentQuestion, totalQuestions, countdown;
let timeLeft =20;

activateButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener('click', () => {
  currentQuestion++;
  clearInterval(countdown);
  startTimer(timeLeft);
  NextQuestion(); 
})



function startQuiz() {
    console.log("started")
    activateButton.classList.add("hide");
    quizQuestion.classList.remove("hide");
    quizChoices.classList.remove("hide"); 
    randomizedQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0
    totalQuestions = randomizedQuestions.length;
    questionNumberElement.classList.remove("hide");// Show the question number element by removing the "hide" class.
    updateQuestionNumber();
    NextQuestion() 
    startTimer(20);
   
  }
  // Updates the displayed question number based on the current question and the total number of questions
  function updateQuestionNumber() {
    questionNumberElement.innerText = `${currentQuestion + 1}/${totalQuestions}`;
  }



  function NextQuestion() {
    clearQuizState()
    showQuestion(randomizedQuestions[currentQuestion])
    updateQuestionNumber();
  }
 

  function startTimer(time) {
    /*let timeLeft = 20; // Set the initial time to 15 seconds */
    countdown = setInterval(timer, 1000)
    function timer () {
      timerElement.textContent = time;
      time--;
      if(time <0) { 
        clearInterval(countdown);
        timerElement.textContent = "00";
      }
      if(time <9 && time >= 0 ) { 
        let padzero=timerElement.textContent ;
        timerElement.textContent="0" + padzero;
      }
    }
  
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

  function clearQuizState() {
    removeStatusClass(document.querySelector('.container'))
    nextQuestionButton.classList.add("hide")
    while ( answerChoices.firstChild) {
      answerChoices.removeChild( answerChoices.firstChild)
    }
  }



// Updates the status of an element based on whether the selected answer is correct or not
  function updateElementStatus(myElement, isCorrect ) {
    removeStatusClass(myElement)
    if (isCorrect ) {
      myElement.classList.add("correct")
    } else {
      myElement.classList.add("wrong")
    }
  }
  
  // Removes the status class from an element
  function removeStatusClass(myElement) {
    myElement.classList.remove("correct")
    myElement.classList.remove("wrong")
  }

// Updates the status of the container and each answer button based on the correctness of the answer selected by the user

  function selectAnswer(e) {
    /*clearInterval(countdown);
     startTimer(timeLeft);*/
    const chosenButton = e.target
    const isCorrect  = chosenButton.dataset.correct
    updateElementStatus(container, isCorrect )
    Array.from( answerChoices.children).forEach(button =>{
      updateElementStatus(button, button.dataset.correct)
    })
   

    if (randomizedQuestions.length > currentQuestion + 1) {
      nextQuestionButton.classList.remove("hide")
    } else {
      activateButton .innerText = "Restart"
      activateButton.classList.remove("hide")
    }
  }

  
  


  

  const questions = [
    {
      question: 'What is 2 + 2?',
       choices: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'What is the result of 3 + 2 + "7" in JavaScript?',
      choices: [
        { text: '12', correct: false },
        { text: '327', correct: true },
        { text: 'NaN', correct: false },
        { text: 'Undefined', correct: false }
      ]
    },
    {
      question: 'What is the output of the following code in JavaScript: console.log(1 + +"2" + 3 + "4")',
      choices: [
        { text: '1234', correct: false },
        { text: '10NaN', correct: false },
        { text: '16', correct: true },
        { text: 'NaN', correct: false }
      ]
    },
    {
      question: 'What is the value of the variable x after the following code in JavaScript: let x = 5; x += "2";',
      choices: [
        { text: '52', correct: true },
        { text: '7', correct: false },
        { text: 'NaN', correct: false },
        { text: 'Undefined', correct: false }
      ]
    },
  ];
  
  
  

  
  
  
  
  
  
  

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
const resultBox =document.querySelector(".Result_box");
const containerBox =document.querySelector(".container");
const scoreResult =document.querySelector(".score_text");
const restartQuiz= document.querySelector(".restart");


let randomizedQuestions, currentQuestion, totalQuestions, countdown;
let timeLeft =20;
let score=0;

// Add event listener to startButton and call startQuiz function
activateButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener('click', () => {
  currentQuestion++;
  clearInterval(countdown);
  startTimer(timeLeft);
  NextQuestion(); 
})


// Function to show the next question and update the question number. It clears the current quiz state first.
function NextQuestion() {
  clearQuizState()
  showQuestion(randomizedQuestions[currentQuestion])
  updateQuestionNumber();

}

// Function to start the quiz by setting up the initial quiz state, randomizing the questions, and calling the NextQuestion function to display the first question
function startQuiz() {
    console.log("started")
    activateButton.classList.add("hide");
    resultBox.classList.add("hide")
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
  // Function to display the current question and its answer choices. It creates a button for each answer choice and adds a click event listener to each button to call the selectAnswer function.
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
 // Function to clear the current quiz state by removing the status class from the container, hiding the nextQuestionButton, and removing all answer choices.
  function clearQuizState() {
    removeStatusClass(document.querySelector('.container'))
    nextQuestionButton.classList.add("hide")
    while ( answerChoices.firstChild) {
      answerChoices.removeChild( answerChoices.firstChild)
    }
  }



// Updates the status of the container and each answer button based on the correctness of the answer selected by the user

  function selectAnswer(e) {
    /*clearInterval(countdown);
     startTimer(timeLeft); */
    const chosenButton = e.target
    const isCorrect  = chosenButton.dataset.correct
    updateElementStatus(container, isCorrect )
    Array.from( answerChoices.children).forEach(button =>{
      updateElementStatus(button, button.dataset.correct)
    })

    if (isCorrect === 'true') {
      score++
      console.log(score)
    }
    if (randomizedQuestions.length > currentQuestion + 1) {
      nextQuestionButton.classList.remove("hide")
    } else {
    
     /* activateButton .innerText = "Restart"
      activateButton.classList.remove("hide") */
      showresultBox();
    
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
  

  // Function to start the countdown timer for the quiz, decrementing the time by one second until it reaches zero or the next question is shown. It also adds a leading zero to the timer element when the time is less than 10
  function startTimer(time) {
    countdown = setInterval(timer, 1000)
    function timer () {
      timerElement.textContent = time;
      time--;
      if(time <9 && time >= 0 ) { 
        let padzero=timerElement.textContent ;
        timerElement.textContent="0" + padzero;
      }
      else if(time <0) { 
        clearInterval(countdown);
        timerElement.textContent = "00";
      }
      else if(time === -1) { 
            NextQuestion(); 
            clearInterval(countdown);
            startTimer(20);
    }
  }
}



// This function hides the quiz question, choices, and container boxes and displays the result box
  function showresultBox(){
    quizQuestion.classList.add("hide");
    quizChoices.classList.add("hide")
    containerBox.classList.add("hide")
    resultBox.classList.remove("hide")
    if (score > 5) {
      let scoreElement = "<span>congrats!, you got <p> "+ score + "</p> out of<p>" + randomizedQuestions.length+ "</p> </span>"
      scoreResult.innerHTML=scoreElement ;
    }

    else if (score >3) {
      let scoreElement = "<span>nice!, you got <p> "+ score + "</p> out of<p>" + randomizedQuestions.length+ "</p> </span>"
      scoreResult.innerHTML=scoreElement ;
    }

    else {
      let scoreElement = "<span>and sorry, you got only<p> "+ score + "</p> out of<p>" + randomizedQuestions.length+ "</p> </span>"
      scoreResult.innerHTML=scoreElement ;
    }
    
  }

  // Add event listener to restartQuiz button to reload the page on click
restartQuiz.onclick = () => {
  window.location.reload();
  }
  
  


 // Array of objects containing quiz questions and choices for HTML, CSS, and JavaScript topics.

  const questions = [
    {
      question: 'What does HTML stand for ?',
      choices: [
        { text: 'HyperText Markup Language', correct: true },
        { text: 'HyperText Meta Language', incorrect: false },
        { text: 'HyperText Media Language', incorrect: false },
        { text: 'HyperText Management Language', incorrect: false }
        ]
    },
    {
      question: 'What is the purpose of CSS?',
      choices: [
        { text: 'To add interactivity to a website', incorrect: false },
        { text: 'To create dynamic web pages', incorrect: false },
        { text: 'To style and visually enhance the layout of a website', correct: true },
        { text: 'To handle the back-end functionality of a website', incorrect: false }
        ]
    },
    {
      question: 'What is the purpose of JavaScript?',
      choices: [
        { text: 'To create the structure and layout of a website', incorrect: false },
        { text: 'To add styling and visual effects to a website', incorrect: false },
        { text: 'To add interactivity and functionality to a website', correct: true },
        { text: 'To manage and store data for a website', incorrect: false }
        ]
    },
    {
      question: 'What is the box model in CSS?',
      choices: [
        { text: 'A model for creating 3D shapes in CSS', incorrect: false },
        { text: 'A model for organizing and displaying content on a web page', incorrect: false },
        { text: 'A model for calculating the size and position of elements on a web page', correct: true },
        { text: 'A model for creating rounded corners on boxes in CSS', incorrect: false }
        ]
    },
    {
      question: 'What is the purpose of the <head> tag in HTML?',
      choices: [
        { text: 'To define the main content of the web page', incorrect: false },
        { text: 'To define the footer of the web page', incorrect: false },
        { text: 'To define the header of the web page', incorrect: false },
        { text: 'To include metadata, such as the page title and links to external resources', correct: true }
      ]
    },
    {
      question: 'What is the difference between == and === in JavaScript?',
      choices: [
        { text: '== compares the values of two variables while === compares both the value and the type of the variables', correct: true },
        { text: '== compares the types of two variables while === compares the values of the variables', incorrect: false },
        { text: '== and === are the same thing', incorrect: false },
        { text: '== and === are not used in JavaScript', incorrect: false }
        ]
    },
    {
      question: 'What is the purpose of the <script> tag in HTML?',
      choices: [
        { text: 'To define the structure and layout of the web page', incorrect: false },
        { text: 'To define the content of the web page', incorrect: false },
        { text: 'To link to external stylesheets and other resources', incorrect: false },
        { text: 'To include JavaScript code in the web page', correct: true }
        ]
    },

  ];
  
  
  

  
  
  
  
  
  
  
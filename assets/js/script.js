
const activateButton = document.getElementById("Start");
const nextQuestionButton = document.getElementById("Next");
const quizQuestion = document.getElementById("question");
const quizChoices = document.getElementById("choices");
const questionDisplay = document.getElementById("question");
const answerChoices = document.getElementById("choices");
const container = document.querySelector(".container");

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
    clearQuizState()
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

  function clearQuizState() {
    nextQuestionButton.classList.add("hide")
    while ( answerChoices.firstChild) {
      answerChoices.removeChild( answerChoices.firstChild)
    }
  }



// Updates the status of an element based on whether the selected answer is correct or not
  function updateElementStatus(myElement, isCorrect ) {
    removeStatusClass(myElement)
    if (isCorrect ) {
      myElement.classList.add('correct')
    } else {
      myElement.classList.add('wrong')
    }
  }
  
  // Removes the status class from an element
  function removeStatusClass(myElement) {
    myElement.classList.remove('correct')
    myElement.classList.remove('wrong')
  }

// Updates the status of the container and each answer button based on the correctness of the answer selected by the user

  function selectAnswer(e) {
    const chosenButton = e.target
    const isCorrect  = chosenButton.dataset.correct
    updateElementStatus(container, isCorrect )
    Array.from( answerChoices.children).forEach(button =>{
      updateElementStatus(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestion + 1) {
      nextQuestionButton.classList.remove('hide')
    } else {
      activateButton .innerText = 'Restart'
      nextQuestionButton.classList.remove('hide')
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
  ];
  
  
  

  
  
  
  
  
  
  
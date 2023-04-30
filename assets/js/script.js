
const activateButton = document.getElementById("Start");
const quizQuestion = document.getElementById("question")
const quizChoices = document.getElementById("choices")

activateButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("started")
    activateButton.classList.add("hide");
    quizQuestion.classList.remove("hide");
    quizChoices.classList.remove("hide");
   
  }

  function NextQuestion() {
    
  }


  function selectAnswer() {
  
  }


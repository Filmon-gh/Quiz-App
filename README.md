
#  Code-Class Quiz      

Code Class Quiz: designed to help beginners learn the basics of HTML, CSS, and JavaScript through a series of questions and answers.The app features an intuitive interface that allows the user to easily navigate through the quiz. The questions are displayed with corresponding numbers, and the time remaining for each question is shown, adding an element of urgency to the quiz-taking experience.

One additional feature of the app is the shuffling of questions, which ensures that every time a user replays the quiz, the questions are arranged randomly and in a different order. This helps to keep the experience fresh and engaging for the user.Additionally, the app is designed to provide users with a real-time feedback experience, with green and red lights indicating correct and incorrect answers. At the end of the quiz, the user is presented with their result in a separate window, which includes their score

<img src="https://raw.githubusercontent.com/Filmon-gh/Quiz-App/cf7b01120a1ee6177a4824898f2e1ffc49e0fbfe/images-pr2/Frontpage.JPG"  width="900" /> 

## User stories
The user story for the development of the Delicious-Den website has been crafted to ensure that the website effectively meets the needs of its target audience. The following user stories have been identified: 

- As a beginner in web development, I want to practice my HTML, CSS, and JavaScript knowledge by taking a quiz.

-  I also want to be able to easily navigate through the quiz, with clear indication of which question I'm on and how much time I have remaining. 

- I want the questions to be displayed clearly, with shuffled order to prevent memorization. 

- After answering each question, I want to see  indication of whether my answer was correct or incorrect. 

-  At the end of the quiz, I want to see my final score displayed in a separate window. 



# Features

## Start-quiz 

![App Screenshot]()

- The start page of the quiz app features the name of the quiz app and a display area for the start of the quiz. At the bottom of the display area, users are presented with options to start quiz. Additionally, on the top-right section of the page, users can see a timer indicating the remaining time of 20 seconds for each question.
- In the quiz app, the "start" function is responsible for initializing the quiz by displaying the first question and answer choices, while hiding the start button. 


## Quiz-App area and Question area

![App Screenshot]()

- The quiz question area is located below the main header  providing a  structured presentation of the quiz content. The question area is designed to showcase the question number and the question itself, along with the answer choices presented in A, B, C, and D format. for easy comprehension. 
- The answer choices have interactive displays, highlighting the choice as the user moves the cursor towards it to indicate that the user is in the choice section of the quiz area. Additionally, the question number is also presented in the footer section, incrementing respectively as the number of questions covered increases, to keep the user informed about their progress.
- The "next" function is responsible for transitioning to the next question and updating the display with the new question and answer choices. 


## Answer selection

The figure below demonstrates how the quiz app interacts with the user when they select the right or wrong answer. When the user selects the wrong answer, the entire quiz app container area is highlighted with a red background color. 
- When the user selects the correct answer in the quiz app, the answer button is highlighted with a green background, indicating the correct choice. This feature helps users monitor their performance and provides immediate feedback on their answer selection.

![App Screenshot]()


## Feed back and score result

After the user completes all the quiz questions, the quiz app presents a score result. 

- The score result displays a congratulatory message if the user achieved a high score, a nice message if the score is average, and a sorry message if the score is low. The score result is a great way for the user to gauge their performance and assess their understanding of the quiz topic.


## Features to be added in the future        
 -Allow users to save their progress and return to the quiz at a later time.
 -Implement a leaderboard to display the highest scores achieved by all users.
 - Integrate social media sharing functionality to allow users to share their quiz results with their friends.
 - Implement a feature that enables users to review the questions and answers they got wrong at the end of the quiz.
 - Allow users to select their preferred difficulty level or category of questions.
 -Include multimedia elements, such as images or videos, to make the quiz more engaging.

## Technology Used: 

 - I used Visual Studio Code as the primary code editor for this project with HTML, CSS, and JavaScript.

 - GitHub: The project hosted on GitHub, a web-based hosting service for version control using Git. 

 - Command Line Interface: The command line interface was used to connect GitHub and Visual Studio Code, which allowed for seamless collaboration between the two technologies. This enabled me to push changes to GitHub from my local machine and to pull changes from GitHub to my local machine.

## Testing 
Testing was conducted for the quiz app to check its functionality and usability. 
 -The test results indicate that the quiz app accurately represents the number of questions answered correctly, and the replay feature works without issue. Each test was conducted and passed independently to ensure proper functionality.
 - The testing indicates that the app functions as expected, with a start display question, a next question button, and interactive answer choices.
 - The "start" and "next" functions work well, successfully displaying the questions and answer choices in the quiz app. This includes hiding and showing appropriate elements at the correct times and smoothly transitioning between questions without any errors or glitches.
 - The right answer is displayed with a green background color and the wrong answer with a red background color, as designed. Additionally, the score display and result box work as intended, with messages of congratulations, nice, and sorry displaying accordingly.
 
  - I conducted a cross-browser compatibility checking of the web page , utilizing  popular web browsers such as Microsoft Edge, Firefox, and Chrome.

The responsiveness of the web pages is also thoroughly tested to ensure that they can be easily accessed and navigated on different devices. The testing process involved checking the layout and design  across a range of devices, including laptops, tablets, and smartphones, to ensure that users could access and interact with the app seamlessly. 


## Bugs

Bug Report: Answer Selection Not Disabled During Quiz 

Description: During testing, i observed that the selected answer choices were not being restricted and could be changed at any time.  This means that users are able to change their answer selection even after they have made their final choice. This is not the intended behavior of the quiz app, as users should not be able to change their answer once it has been selected. 

-Expected Behavior: After an answer choice is selected, it should be disabled and users should not be able to change their answer. 

 -Actual Behavior: Answer choices were not disabled and users were able to change their answer selection without any problem. 

-Fix: To fix this issue, I included the following code in the selectAnswer function as initial code: 

Array.from(document.getElementsByClassName('choice')).forEach(e => {e.disabled = false}) 

-This code disables the answer choices after they have been selected, preventing users from changing their answer selection. After making this change, the answer selection function works as intended. 


## Validator Testing
 - HTML : After running the code through the official W3C validator, no errors were found.
 - CSS : After running the code through the official (Jigsaw) Validator, no errors were found.
 
 Accessibility: By running the project through Lighthouse, I have confirmed that the chosen colors and font size 
 are easy to read and accessible.
 
  <img src=" "  width="500"/>
  <img src=""/>


## Deployment 
The website has been successfully deployed on GitHub Pages. Here are the steps that were followed to deploy the website:
 - Navigate to the "Settings" page and select "Main" from the dropdown menu under "Source" to choose the main branch in the GitHub repository. Once selected on the main branch, GitHub Pages  provides a URL to the completed website.

## Credits 
  
  


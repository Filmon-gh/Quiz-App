
#  Quiz App Documentation    

Code-Class Quiz: designed to help beginners learn the basics of HTML, CSS, and JavaScript through a series of questions and answers.The app features an intuitive interface that allows the user to easily navigate through the quiz. The questions are displayed with corresponding numbers,and users are encouraged to allocate an appropriate amount of time for each question. While a predetermined time limit has been included as an optional feature, users have the flexibility to take as much time as they need to complete the quiz.

One additional feature of the app is the shuffling of questions, which ensures that every time a user replays the quiz, the questions are arranged randomly and in a different order. This helps to keep the experience fresh and engaging for the user.Additionally, the app is designed to provide users with a real-time feedback experience, with green and red lights indicating correct and incorrect answers. At the end of the quiz, the user is presented with their result in a separate window, which includes their score.

 <img src="https://raw.githubusercontent.com/Filmon-gh/Quiz-App/c9622315e491a4dec0c52be86078e01f539b34b0/Capture.JPG"  width="900" /> 

## User stories
 The following user stories have been identified for the development of the quiz app: 

- As a beginner in web development, I want to practice my HTML, CSS, and JavaScript knowledge by taking a quiz.

-  I also want to a user-friendly navigation system that provides clear indication of the current question I am answering while taking the quiz.

- I want the questions to be displayed clearly, with shuffled order to prevent memorization. 

- After answering each question, I want to see a general indication of whether my answer was correct or incorrect.

 - As a user, I am seeking a quiz application that provides a platform for efficient and flexible practice sessions. I require an app that enables me to work at my own pace, allowing me to take as much time as I need to understand and respond to each question.

-  At the end of the quiz, I want to know my final score. 



# Features

## Start-quiz 
- The quiz app's start page features the quiz app's name and a display area for the start of the quiz. At the bottom of the display area, users are presented with options to start the quiz. Additionally, on the top-right section of the page, users can see a timer.
- In the quiz app, the "start" function is responsible for initializing the quiz by displaying the first question and answer choices, while hiding the start button.

<img src="https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/Frontpage.JPG?raw=true"  width="700" height="500" /> 


## Time Management in the Quiz-App
"In the quiz app, a timer is integrated to add an extra element of challenge and excitement. Here's how the time management works:"

 - When a user starts a quiz, the timer is set to a default of 20 seconds.
 - Users can answer the questions at their own pace within this time limit.
 - The timer counts down continuously from 20 seconds.
 - After the user selects an answer, the timer stops counting down, and they can proceed using the "Next" button.
 - If the timer runs out before the user proceeds to the next question, they'll no longer have the option to make a choice. It's time to move on!
This time management system ensures that the quiz is engaging and keeps participants on their toes throughout the experience.

## Quiz-App area and Question area

- The quiz question area is located below the main header  providing a  structured presentation of the quiz content. The question area is designed to showcase the question number and the question itself, along with the answer choices presented in A, B, C, and D format. for easy comprehension. 
- The answer choices have interactive displays, highlighting the choice as the user moves the cursor towards it to indicate that the user is in the choice section of the quiz area. Additionally, the question number is also presented in the footer section, incrementing respectively as the number of questions covered increases, to keep the user informed about their progress.
- The "next" function is responsible for transitioning to the next question and updating the display with the new question and answer choices.

<img src="https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/questionpage.JPG?raw=true" width="700" height="500" /> 
 


## Answer selection

The figure below demonstrates how the quiz app interacts with the user when they select the right or wrong answer. When the user selects the wrong answer, the entire quiz app container area is highlighted with a red background color. 
- When the user selects the correct answer in the quiz app, the answer button is highlighted with a green background, indicating the correct choice. This feature helps users monitor their performance and provides immediate feedback on their answer selection.
<img src="https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/rightanswerpage.JPG?raw=true"  width="600" height="400" /> 

<img src="https://raw.githubusercontent.com/Filmon-gh/Quiz-App/cf7b01120a1ee6177a4824898f2e1ffc49e0fbfe/images-pr2/Answerselect.JPG" width="600" height="400" /> 


## Feed back and score result

After the user completes all the quiz questions, the quiz app presents a score result. 
- The score result displays a congratulatory message if the user achieved a high score, a nice message if the score is average, and a sorry message if the score is low. The score result is a great way for the user to gauge their performance and assess their understanding of the quiz topic.

<img src="https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/scoreresult.JPG?raw=true" width="320" height="250" />


## Features to be added in the future        
 - Allow users to save their progress and return to the quiz at a later time.
 - Integrate social media sharing functionality to allow users to share their quiz results with their friends.
 - Implement a feature that enables users to review the questions and answers they got wrong at the end of the quiz.
 - Allow users to select their preferred difficulty level or category of questions.
 - Include multimedia elements, such as images or videos, to make the quiz more engaging.

## Technology Used: 

 - For the initial stages of this project, I leveraged Visual Studio Code as the primary code editor, working with HTML, CSS, and JavaScript. However, to address specific time management and functionality-related challenges, I later transitioned to Gitpod, a cloud-based integrated development environment (IDE).

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
 
 - JS hint checker

 ![JS Hint Checker](https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/js.hint%20checker.png?raw=true)

  The JavaScript code has been meticulously inspected and analyzed using the JS Hint checker, and  it has passed without a single error.
    
### Accessibility:
By running the project through Lighthouse, I have confirmed that the chosen colors and font size 
 are easy to read and accessible.
 
  - For Mobile Devices
    
  ![Mobile Lighthouse Score](https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/lighthouse.JPG?raw=true)
  
 - For Desktop
   
  ![Desktop Lighthouse Score](https://github.com/Filmon-gh/Quiz-App/blob/main/readme-images/desktoplighthouse.JPG?raw=true)


## Deployment 
The website has been successfully deployed on GitHub Pages. Here are the steps that were followed to deploy the website:
 - Navigate to the "Settings" page and select "Main" from the dropdown menu under "Source" to choose the main branch in the GitHub repository. Once selected on the main branch, GitHub Pages  provides a URL to the completed website.

## Credits 
I have incorporated references from various sources, including youthful YouTube channels and web development tutorials, to complete this work. Notably, I have utilized the shuffle effect of questions, which was inspired by the techniques outlined in a web development tutorial by the channel "Web Dev Simplified
   -   [codingNepal](https://www.youtube.com/watch?v=WUBhpSRS_fk&t=475s)  (https://www.youtube.com/watch?v=pQr4O1OITJo&t=1491s) 
   -   [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=933s) 


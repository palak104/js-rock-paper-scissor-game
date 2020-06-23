/*
I palak depani ,student no - 000787449 , cerify that all code submitted is my own work;
that i have not copied from any other source .
I also certify that i have not allowed my work to be copied by other.

Purpose of this assignment is create game but before staring it taking some input from 
user in form and then using that input value for display and then start small rock paper
scissor game using button.

*/




// defining constant for some elements which will remain constant 
// getting input value from form entered by user
const form = document.querySelector('form');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");



let message = document.getElementById("message"); // used to display game result
let userOption = document.getElementById("userChoice"); // used to display option selected by user
let compOption = document.getElementById("compChoice"); //used to display option selected by computer
let playerScore_board = document.getElementById("winScore"); // this will display user win numbers
let compScore_board = document.getElementById("compWinScore"); // this will display no. of game won by computer
let drawScore_board = document.getElementById("drawScore"); // this will display draw score of game

// this is used to increment score of game for user, computer and draw
let userScore = 0;
let compScore = 0;
let drawGameScore = 0;

// defining sound variable
let mySound = new sound("sound.mp3");


// getting whole data from form when clicksubmit button
form.addEventListener("submit", function(event) {
    event.preventDefault();

    //this will get user name
    let userName = document.getElementById("username").value;
    // this will get user age 
    let userAge = document.getElementById("userage").value;
    // this will get color input by user
    let ufavColor = document.getElementById("usercolor").value;

    //creating button after submiting form
    let button = document.createElement("button");
     button.innerHTML = "Help"; // text on button
    document.body.appendChild(button); //appending button to body

    // creating click event function for button click
    button.addEventListener("click", function(){
      alert("you have 3 option Rock, Paper & Scissor. Click on any button and start game.");
    })
   
    // assigning color input get from user to display all input get from form in that color
    form.style.color = ufavColor;

    // creating function to get radiobutton value for skill
    function skill(){
        let skillLevel = document.getElementsByName("skill");
        for(var i = 0; i < skillLevel.length; i++) {
            if(skillLevel[i].checked){
                 return skillLevel[i].value;
                 }
                }
            }
    
  
    console.log("Form Submitted for: " + userName );
    console.log("user age is : " + userAge );
    console.log("Favourite color is : " + ufavColor );
    console.log("skill: " + skill() );

    // display text and value from form
    form.innerHTML="<p>Hey "+userName + "! click on below option and start game. <br> You are "
    +userAge + " year old! <br> Your Skill level is "+ skill() + "<br>Your fav color is " 
    +ufavColor+"</p>";
    
    // calling game function to start game
    startGame();

})


// start game function
// getting user input from click event
function startGame() {
    rock.addEventListener("click",function(){
        mySound.play(); // play sound
        game("rock"); 
        
    })
    
    paper.addEventListener("click",function(){
        mySound.play(); // play sound on click
        game("paper");
       
    })
    
    scissor.addEventListener("click",function(){
        mySound.play(); // play sound on click
        game("scissor");
        
    })
    
    }
  
 
    //game function with user choice enetred by clicking button
    function game (userSelection){
        // message to display user choice
        userOption.innerHTML = "Your selection is: " + userSelection 
        // getting computer choice 
        let computerSelection = getcomputerSelection();
        // display computer choice
        compOption.innerHTML = "Computer selection is: " + computerSelection

        //defining situation and calling win , loss or draw function
        if ( userSelection == "rock" && computerSelection =="scissor" || userSelection
        == "paper" && computerSelection == "rock" || userSelection == "scissor" &&
        computerSelection =="paper"){
            // call win function if user win
            userWin(userSelection,computerSelection);
          
        }
        else if( userSelection == "rock" && computerSelection == "paper" || userSelection
        == "paper"&& computerSelection=="scissor" || userSelection =="scissor" && 
        computerSelection =="rock"){
            // call loss function if computer win
            computerWin(userSelection,computerSelection);

        }

        else if( userSelection =="rock" && computerSelection =="rock" || userSelection
        =="paper"&& computerSelection=="paper" || userSelection == "scissor"&& computerSelection
        == "scissor" ) {
            // call gamedraw function if game draws
            gameDraw(userSelection,computerSelection);
        }

       
        else {
            console.log("select appropriate option !");
        }

    
           

    }

    // creating one function to get computer choice using random function
    function getcomputerSelection(){
        // defining array with 3 option
        let compSelect = ["rock","paper","scissor"];
        // using inbuit function to getting random choice 
        let randomChoice = Math.floor(Math.random()*3);
        // getting single return value from array of selection
        return compSelect[randomChoice];

    }
        
        
    // user win function
        function userWin(userSelection,computerSelection){
            userScore++; // updating win score 
            
            // switch cases to display message and score
            switch(userSelection){
                case  "rock":
                message.innerHTML = userSelection + " breaks " + computerSelection + ". You Win!!"
                playerScore_board.innerHTML = "Your Win : "+  userScore 
                 break;

                case "paper":
                    message.innerHTML= userSelection + " covers " + computerSelection + ". You Win!!"
                    playerScore_board.innerHTML = "Your Win : " + userScore 
                    break;

                case "scissor":
                    message.innerHTML = userSelection + " cuts " + computerSelection + ". You Win!!"
                    playerScore_board.innerHTML = "Your Win : " + userScore 
                    break; 
            }
            
        }

        // computer win function  
        function computerWin(userSelection,computerSelection){
            compScore++; // updating computerwin score
            
            // switch cases for displaying comp win message and score
            switch(userSelection){
                case  "rock":
                message.innerHTML = computerSelection + " covers " + userSelection + ". You Lost!!"
                compScore_board.innerHTML = "Computer Win : " + compScore 
                break;
                case "paper":
                    message.innerHTML= computerSelection + " cuts " + userSelection + ". You Lost!!"
                    compScore_board.innerHTML = "Computer Win : " + compScore 
                    break;
                case "scissor":
                    message.innerHTML = computerSelection + " breaks " + userSelection + ". You Lost!!"
                    compScore_board.innerHTML = "Computer Win : " + compScore 
                    break;
            }
            
        }
        
        // function call when game draw 
        function gameDraw(userSelection , computerSelection){
            drawGameScore++; //update draw or tie game score
            
            // switch cases to display message and tie score
            switch(userSelection){
                case  "rock":
                message.innerHTML = userSelection + " vs " + computerSelection + ". its tie!!"
                drawScore_board.innerHTML = "Tie : " + drawGameScore 
                 break;

                case "paper":
                    message.innerHTML= userSelection + " vs " + computerSelection + ". its tie!!"
                    drawScore_board.innerHTML = "tie : " + drawGameScore 
                    break;

                case "scissor":
                    message.innerHTML = userSelection + " vs " + computerSelection + ". its tie!!"
                    drawScore_board.innerHTML = "tie: " + drawGameScore 
                    break; 
            }
            
        }

    // sound function to play sound it usually follow same sturcture so haven't change much 
    // but figured out logics that how it will gonna use     
   function sound(src) {
      this.sound = document.createElement("audio");
      this.sound.src = src;
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      document.body.appendChild(this.sound);
      this.play = function(){
        this.sound.play();
    }    
   }
      
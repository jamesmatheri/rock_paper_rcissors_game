
// DOM caching
let userScore= 0;
let computerScore =0;

const announceWin_h1 = document.querySelector('#announce-won');
const trackPoints_p = document.querySelector('#track-points');
const userChoice_div =document.querySelector('#user-choice');
const playerScore_span = document.querySelector('#player-score');
const compChoice_div = document.querySelector('#comp-choice');
const computerScore_span = document.querySelector('#computer-score');
const choice = document.querySelectorAll('#choices div')
const start = document.querySelector('#start')
const rock = document.querySelector('#r');
const paper = document.querySelector('#p')
const scissors = document.querySelector('#s')


// get user choice

Array.from(choice).forEach(btn =>{
  btn.addEventListener('click', function(event){
   userChoice(event);
   event.target.style.border = '2px solid black';
  setTimeout(function(){
    event.target.style.border = '';
  },100);

  start.style.display = 'none';
  userChoice_div.style.display = 'block';
  compChoice_div.style.display = 'block';


  })
})

// if user wins
function win(){
  userScore++;
  playerScore_span.innerHTML = `Player Score: ${userScore}`
  userChoice_div.style.backgroundColor = "green";
  compChoice_div.style.backgroundColor = "red";
  setTimeout(function(){
    userChoice_div.style.backgroundColor = "";
    compChoice_div.style.backgroundColor = "";
  },1000)
  

}

// if user loses to comp

function lose(){
  computerScore++;
  computerScore_span.innerHTML = `Computer Score: ${computerScore}`
  compChoice_div.style.backgroundColor = "green";
  userChoice_div.style.backgroundColor = "red";
  setTimeout(function(){
    userChoice_div.style.backgroundColor = "";
    compChoice_div.style.backgroundColor = "";
  },1000)

}

//draw
function draw(){
  compChoice_div.style.backgroundColor = "grey";
  userChoice_div.style.backgroundColor = "grey";
  setTimeout(function(){
    userChoice_div.style.backgroundColor = "";
    compChoice_div.style.backgroundColor = "";
  },1000)

}

function renderPlayerSelection(playerSelection){
  if(playerSelection == "r" ){
    userChoice_div.className = 'rock'
  }else if(playerSelection == "p"){
    userChoice_div.className = 'paper'
  }else{
    userChoice_div.className ='scissors'
  }
}


function renderComputerSelection(computerSelection){
  if(computerSelection == "r"){
    compChoice_div.className = 'rock'
  }else if(computerSelection == "p"){
    compChoice_div.className = 'paper'
  }else{
    compChoice_div.className ='scissors'
  }
}


// determine user win, computer win or draw
function game(playerSelection){
const computerSelection = computerChoice();
renderPlayerSelection(playerSelection);
renderComputerSelection(computerSelection);

   switch(playerSelection + computerSelection){
    case "pr":
    case "sp":
    case "rs":
            win();
    break;

    case "rp":
    case "ps":
    case "sr":
           lose();
      break;

    case "rr":
    case "pp":
    case "ss":
           draw();
      break;
   }

  
}

//get user choice
function userChoice(event){
  game(event.target.id);
}


//get computer choice

function computerChoice(){
  const choices = [rock,paper,scissors];
  const randomComputerChoice = choices[Math.floor(Math.random()*choices.length)];
  return randomComputerChoice.id;
 
}




// check winner































/*function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissors"];
    const randomCompPick = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomCompPick;
     }
 
 function playerChoice(){
   let playerPick = prompt("what is your selection, Rock,Paper or Scissors?");
   playerPick = playerPick.toLowerCase();
 
   return playerPick; 
 }
 

 function checkWinner(computerSelection,playerSelection){

  if(playerSelection == computerSelection){
    return "tie";
  }else if(
          (playerSelection == 'rock' && computerSelection == 'scissors') ||
          (playerSelection == 'paper' && computerSelection == 'rock')  ||
          (playerSelection == 'scissors' && computerSelection == 'paper')
  ){
    return "player";
  }else {
    return "computer";
  }
  };

function playRound(computerSelection, playerSelection){
  const results = checkWinner(computerSelection,playerSelection);

  if(results == 'tie'){ 
    return 'It is a draw'
  }else if(results == 'player'){
    return `player won!!!!!!"${playerSelection}" beats ${computerSelection}`;
  }else{ 
    return `you lose!!!! "${computerSelection}" beats ${playerSelection}`;
  }
}



function game(){
  let playerScore = 0;
  let computerScore =0;
  for( let i=0; i <5 ; i++){
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(computerSelection,playerSelection))
    if(checkWinner(computerSelection,playerSelection) == 'player'){
      playerScore++;
    }else if(checkWinner(computerSelection,playerSelection) == 'computer'){
      computerScore++;
    }
    
  };
  console.log("End of game");
  if(playerScore > computerScore){
    console.log("Nyang'au imeshinda");
  }else if(computerScore > playerScore){
    console.log(" wewe! Enda mtaa");
  } else{
    console.log("Its a tie");
  }
}

game();
*/
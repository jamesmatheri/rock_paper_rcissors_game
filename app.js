
// DOM caching

const announceWin_h1 = document.querySelector('#announce-won');
const trackPoints_p = document.querySelector('#track-points');
const userChoice_div =document.querySelector('#user-choice');
const playerScore_span = document.querySelector('#player-score');
const compChoice_div = document.querySelector('#comp-choice');
const computerScore_span = document.querySelector('#computer-score');
const choice = document.querySelectorAll('#choices div')
const rock = document.querySelector('#r');
const paper = document.querySelector('#p')
const scissors = document.querySelector('#s')


// get user choice

Array.from(choice).forEach(btn =>{
  btn.addEventListener('click', userChoice)
})

function userChoice(btn){
  return btn.target.id;
}

//get computer choice

function computerChoice(){
  const choices = [rock,paper,scissors];
  const randomComputerChoice = choices[Math.floor(Math.random()*choices.length)];
  console.log(randomComputerChoice.id);

}
computerChoice();






























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
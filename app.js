function getComputerChoice(){
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
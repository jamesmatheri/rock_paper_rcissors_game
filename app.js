function getComputerChoice(){
    const computerPick = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return computerPick[randomNum];
     }
 
 function playerChoice(){
   let playerPick = prompt("what is your selection, Rock,Paper or Scissors?");
   playerPick = playerPick.toLowerCase();
 
   return playerPick 
 }
 let computerScore = 0;
 let playerScore = 0;
 function playRound(playerSelection, computerSelection) {
   if(playerSelection == computerSelection){
     console.log("It is a Draw");
     computerScore++;
     playerScore++;
   }else if(playerSelection == "rock" && computerSelection == "paper"){
     console.log("comp wins")
    computerScore++;
   }else if(playerSelection == "rock" && computerSelection == "scissors"){
     console.log("you win")
     playerScore++;
   }else if(computerSelection == "rock" && playerSelection == "paper"){
     console.log("You win")
     playerScore++;
   }else if(computerSelection == "rock" && playerSelection == "scissors"){
     console.log("Comp wins")
     computerScore++;
   }else if(playerSelection == "paper" && computerSelection == "scissors"){
     console.log("comp wins")
    computerScore++;
   }else if(computerSelection == "paper" && playerSelection == "scissors"){
     console.log("Comp wins")
     computerScore++;
   }
 }
 var playerSelection = playerChoice();
 var computerSelection = getComputerChoice();
 console.log(playerSelection, computerSelection);
 console.log(playRound(playerSelection, computerSelection));
 console.log(playerScore);
 console.log(computerScore);
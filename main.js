let playerCount = 0;
let computerCount = 0;
const content = document.querySelector('#Sshow');
const Round = document.querySelector("round")
const message = document.querySelector('#Rmessage');


const result = document.querySelector('.winner');
const showResult = document.createElement('span');
showResult.style.fontSize = "50px";
showResult.style.color = "#3882F6";
result.appendChild(showResult);



function game(){

const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            let round = playRound(button.id, computerSelection);
            message.textContent = `${round}`; 
            if (round.includes("computer")){
                computerCount++
            }else if (round.includes("player")){
                playerCount++
            }
            content.textContent = `${playerCount} - ${computerCount}`;
            
            if (playerCount === 5){
                showResult.style.visibility = 'visible';
                    showResult.textContent = `${"Player WON The Game"}`;
                    playerCount = 0;
                    computerCount = 0;
            }else if (computerCount === 5){
                    showResult.style.visibility = 'visible';
                    showResult.textContent = `${"Computer WON The Game"}`;
                    playerCount = 0;
                    computerCount = 0;
            } else{
                showResult.style.visibility = 'hidden';
            }

                

        
        });
    });
}




function getComputerChoice(){
  const choice = ["Rock", "Paper", "Scissor"];

  let computer = Math.floor(Math.random()*choice.length);

  let play = choice[computer];

  return play
}

function playRound(playerSelection, computerSelection) {
      let player = playerSelection.toLowerCase();
      let cs = computerSelection.toLowerCase();

      if (player === cs ) {
          return "Tie!"
      } 
      else if (player === "rock" && cs === "paper"){
          return `${cs} beats ${player}, computer wins this round`
      }
      else if (player === "rock" && cs === "scissor"){
          return `${player} beats ${cs}, player wins this round`
      }

      else if (player === "paper" && cs === "scissor"){
          return `${cs} beats ${player}, computer wins this round`
      }
      else if (player === "paper" && cs === "rock"){
          return `${player} beats ${cs}, player wins this round`
      }

      else if (player === "scissor" && cs === "rock"){
          return `${cs} beats ${player}, computer wins this round`
      }
      else if (player === "scissor" && cs === "paper"){
          return `${player} beats ${cs}, player wins this round`
      }
}

game()
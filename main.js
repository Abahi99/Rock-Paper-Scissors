

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
            return `${cs} beats ${player}, computer wins`
        }
        else if (player === "rock" && cs === "scissor"){
            return `${player} beats ${cs}, player wins`
        }

        else if (player === "paper" && cs === "scissor"){
            return `${cs} beats ${player}, computer wins`
        }
        else if (player === "paper" && cs === "rock"){
            return `${player} beats ${cs}, player wins`
        }

        else if (player === "scissor" && cs === "rock"){
            return `${cs} beats ${player}, computer wins`
        }
        else if (player === "scissor" && cs === "paper"){
            return `${player} beats ${cs}, player wins`
        }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose (Paper, Rock, or Scissor)");
        const computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);

        if (round.includes("computer")){
            computerCount++
        }else if (round.includes("player")){
            playerCount++
        }else{
            continue
        }
    }

    if (playerCount > computerCount){
        console.log("Player WON")
    }else if (computerCount > playerCount){
        console.log("Computer WON")
    }else{
        console.log("TIE!!!")
    }
}

game()
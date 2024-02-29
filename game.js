function getComputerSelection() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(computerSelection, playerSelection) {
    let winner = "";
    if(computerSelection === "rock" && playerSelection === "paper") {
        winner = "computer";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        winner = "computer";

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        winner = "computer";
    } else if (computerSelection === playerSelection) {
        winner = "draw";
    } else {
        winner = "player";
    }

    return winner;
}
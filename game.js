function getComputerSelection() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(computerSelection, playerSelection) {
    let winner = "";
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === "rock" && playerSelection === "paper") {
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

function playGame() {

    const overall = 0;

    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerSelection()
        do {
            let playerSelection = prompt("Enter rock, paper, or scissors.", "").toLowerCase();;
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                break;
            } else {
                console.log("Invalid input. Enter one of the aforementioned strings.")
            }
        } while (true);

        if (playRound(computerSelection, playerSelection) === "computer") {
            console.log(`You lose because the computer's ${computerSelection} beats your ${playerSelection}!`)
        } else if (playRound(computerSelection, playerSelection) === "player") {
            console.log(`You win because the computer's ${computerSelection} loses to your ${playerSelection}!`)
        } else {
            console.log(`It's a draw because the computer's ${computerSelection} ties your ${playerSelection}!`)
        }
    }

}
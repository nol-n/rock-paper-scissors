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

    let computerRecord = 0;
    let playerRecord = 0;

    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerSelection()
        do {
            let playerSelection = prompt("Enter rock, paper, or scissors.", "").toLowerCase();;
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {

                if (playRound(computerSelection, playerSelection) === "computer") {
                    console.log(`You lost that round because the computer's ${computerSelection} beats your ${playerSelection}!`)
                    computerRecord++
                } else if (playRound(computerSelection, playerSelection) === "player") {
                    console.log(`You win that round because the computer's ${computerSelection} loses to your ${playerSelection}!`)
                    playerRecord++
                } else {
                    console.log(`It's a draw that round because the computer's ${computerSelection} ties your ${playerSelection}!`)
                }

                break;

            } else {
                console.log("Invalid input. Enter one of the aforementioned strings.")
            }
        } while (true);

    }

    if (computerRecord > playerRecord) {
        console.log(`The computer wins the game! The computer beat you ${computerRecord} times to ${playerRecord} times.`)
    } else if (playerRecord > computerRecord) {
        console.log(`You win the game! You beat the computer ${playerRecord} times to ${computerRecord} times.`)
    } else {
        console.log(`Wow! What are the odds. You tied with ${playerRecord} wins to the computer's ${computerRecord} wins.`)
    }
}

playGame();
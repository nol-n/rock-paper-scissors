function getComputerSelection() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(computerSelection, playerSelection) {
    let winner = "";
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === "rock" && playerSelection === "scissors") {
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

const btns = document.querySelectorAll('.btn');

let computerRecord = 0;
let playerRecord = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const playerSelection = btn.name;
        const computerSelection = getComputerSelection();

        console.log(computerSelection)

        const rounds_div = document.querySelector('#rounds');
        const round_div = document.createElement('div');
        round_div.setAttribute('id', 'roundResult');
        rounds_div.append(round_div);
        const record_div = document.createElement('div');
        record_div.setAttribute('id', 'record');
        rounds_div.append(record_div);

        if (playRound(computerSelection, playerSelection) === "computer") {
            computerRecord++
            round_div.textContent = `You lost that round because the computer's ${computerSelection} beats your ${playerSelection}!`;
            record_div.textContent = `The computer has won ${computerRecord} times and you have won ${playerRecord} times.`;

        } else if (playRound(computerSelection, playerSelection) === "player") {
            playerRecord++
            round_div.textContent = `You win that round because the computer's ${computerSelection} loses to your ${playerSelection}!`;
            record_div.textContent = `The computer has won ${computerRecord} times and you have won ${playerRecord} times.`;

        } else {
            round_div.textContent = `It's a draw that round because the computer's ${computerSelection} ties your ${playerSelection}!`;
            record_div.textContent = `The computer has won ${computerRecord} times and you have won ${playerRecord} times.`;
        }

        if (computerRecord === 5 || playerRecord === 5) {
            const winner_div = document.createElement('div');
            winner_div.setAttribute('id', 'winner');
            rounds_div.append(winner_div);

            if (computerRecord === 5) {
                winner_div.textContent = `The computer wins the game! The computer beat you ${computerRecord} times to ${playerRecord} times.`;

            } else {
                winner_div.textContent = `You win the game! You beat the computer ${playerRecord} times to ${computerRecord} times.`;
            }

            computerRecord = 0;
            playerRecord = 0;

        }
    });
});
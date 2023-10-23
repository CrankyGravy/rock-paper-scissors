//  Array of choices per game
let options = ["rock", "paper", "scissors"];

// Function that get the computers choice from options array above
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// Function to check for the winner of a round
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  }
  return "Computer";
}

// Function for playing a round
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a tie";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  }
  return `You Lose! ${computerSelection} beats ${playerSelection}.`;
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));

// Function to play 5 games and display results
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
// // Function for computer vs player that declares if round is one or lost
// function playRound(playerSelection, computerSelection) {
//   // Input for player selection
//   playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
//   console.log(playerSelection);

//   // Computer selection
//   computerSelection = getComputerChoice().toLowerCase();
//   console.log(computerSelection);

//   // If statement for result of game
//   if (computerSelection === "ROCK" && playerSelection === "PAPER") {
//     return Win;
//   } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
//     return Win;
//   } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
//     return Win;
//   } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
//     return Lose;
//   } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
//     return Lose;
//   } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
//     return Lose;
//   } else if (computerSelection === playerSelection) {
//     return Draw;
//   }
// }
// // Function with for loop to play five rounds and record previous scores

// let player = 0;
// let computer = 0;
// let equal = 0;
// let Win = "Win";
// let Lose = "Lose";
// let Draw = "Draw";

// // console.log(playRound());

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound());
//     if (playRound() === Win) {
//       player++;
//     } else if (playRound() === Lose) {
//       computer++;
//     }
//   }
// }

// playGame();

//  Array of choices per game
let options = ["Rock", "Paper", "Scissors"];

// Function that get the computers choice from options array above
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return options;
}

// // Function for computer vs player that declares if round is one or lost
// function playRound(playerSelection, computerSelection) {
//   // Input for player selection
//   playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
//   console.log(playerSelection);

//   // Computer selection
//   computerSelection = getComputerChoice().toUpperCase();
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

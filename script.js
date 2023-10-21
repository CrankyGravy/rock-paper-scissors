//  Array of choices per game
let arr = ["Rock", "Paper", "Scissors"];

// Function that will randomly pick between items in arr variable on every run
function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function for computer vs player that declares if round is one or lost
function game() {
  // Input for player selection
  playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();

  console.log(playerSelection);

  // Computer selection
  computerSelection = getComputerChoice().toUpperCase();
  console.log(computerSelection);

  // If statement for result of game
  function result() {
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
      return "You Win! Rock beats Scissors";
    } else if (
      computerSelection === "PAPER" &&
      playerSelection === "SCISSORS"
    ) {
      return "You Win! Paper beats Scissors";
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
      return "You Lose! Rock beats Scissors";
    } else if (
      computerSelection === "SCISSORS" &&
      playerSelection === "PAPER"
    ) {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection === playerSelection) {
      return "Draw!";
    }
  }
  console.log(result());
}

game();

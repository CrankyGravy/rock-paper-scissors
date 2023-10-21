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

  // If statement for repapaersult

  if (computerSelection === playerSelection) {
    result = "YES";
  } else if (computerSelection != playerSelection) {
    result = "NO";
  }
  console.log(result);
}

game();

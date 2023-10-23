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

// Function to prompt the user for a choice
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice == null) {
      continue;
    }
    if (options.includes(choice)) {
      validatedInput = true;
      return choice;
    }
  }
}

// Function to play 5 games and display results
function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  if (scorePlayer > scoreComputer) {
    console.log(`Player is the winner with ${scorePlayer} points!`);
  } else if (scoreComputer > scorePlayer) {
    console.log(`Computer is the winner with ${scorePlayer} points!`);
  } else {
    console.log("It's a tie!");
  }
}

game();

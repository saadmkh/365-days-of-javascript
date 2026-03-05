let secretNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 3;
let gameOver = false;

function guess(number) {
  if (gameOver) {
    console.log("Game already finished");
    return;
  }

  if (attemptsLeft <= 0) {
    console.log("No attempts left");
    gameOver = true;
    return;
  }

  attemptsLeft--;

  if (number === secretNumber) {
    console.log("You guessed it right");
    gameOver = true;
  } 
  else if (number > secretNumber) {
    console.log("Too high");
  } 
  else {
    console.log("Too low");
  }

  if (attemptsLeft === 0 && !gameOver) {
    console.log("Game over. Number was:", secretNumber);
    gameOver = true;
  }
}

function remainingAttempts() {
  console.log("Attempts left:", attemptsLeft);
}

function revealNumber() {
  if (gameOver) {
    console.log("Secret number:", secretNumber);
  } else {
    console.log("Finish the game first");
  }
}

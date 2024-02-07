const gameNumber = 25;
let trials = 0;
let userGuess;
do {
  userGuess = prompt("Please enter your guess-number:");
  trials++;
  userGuess = parseInt(userGuess);
  if (userGuess === gameNumber) {
    console.log("You did it! no. of trials taken:", trials);
    break;
  }
} while (userGuess !== gameNumber);

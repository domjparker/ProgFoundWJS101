const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock')) {
    prompt('You Win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'scissors')) {
    prompt('Computer Wins!');
  } else {
    prompt("It's a tie.");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice. Please choose again: ${VALID_CHOICES.join(', ')}`);
    choice = readline.question;
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter either "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0].toLowerCase() !== 'y') break;
}
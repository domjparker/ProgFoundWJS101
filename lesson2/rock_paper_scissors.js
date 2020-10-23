const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const NUMBER_OF_ROUNDS = 5;

function prompt(message) {
  console.log(`=> ${message}\n`);
}

function displayGameRules() {
  prompt('Welcome to ROCK PAPER SCISSORS LIZARD SPOCK, ' +
    'a variation on the game ROCK PAPER SCISSORS. \n' +
    'Here is how game play works: \n' +
    'ROCK crushes SCISSORS & crushes LIZARD. \n' +
    'PAPER covers ROCK & disproves SPOCK. \n' +
    'SCISSORS cuts PAPER & decapitates LIZARD. \n' +
    'LIZARD eats PAPER & poisons SPOCK. \n' +
    'SPOCK smashes SCISSORS & vaporizes ROCK. \n' +
    'Best out of 5 wins!! LETS PLAY!!!');
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}. \n` +
    `(For ease, you may also choose: r, p, sc, l, sp`);
  let choice = readline.question();
  if (choice.toLowerCase() === 'r') choice = 'rock';
  else if (choice.toLowerCase() === 'p') choice = 'paper';
  else if (choice.toLowerCase() === 'sc') choice = 'scissors';
  else if (choice.toLowerCase() === 'l') choice = 'lizard';
  else if (choice.toLowerCase() === 'sp') choice = 'Spock';
  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let randomChoiceOfComputer = VALID_CHOICES[randomIndex];
  return randomChoiceOfComputer;
}

function displayWinner(userScore, computerScore) {
  if (userScore > computerScore) {
    prompt(`YOU'VE WON this competition! YOU WON ${userScore} games, while ` +
      `the computer only won ${computerScore}. This means YOU WIN!!!`);
  } else {
    prompt(`Sorry. You lost this competition! The Computer won ${computerScore}` +
      `games, while you only won ${userScore} games. Consider another round.`);
  }
}

console.clear();
displayGameRules();

while (true) {
  let userScore = 0;
  let computerScore = 0;
  let gamesPlayed = 0;
  while (gamesPlayed < NUMBER_OF_ROUNDS) {
    let choice = getUserChoice();
    console.clear();

    if (VALID_CHOICES.includes(choice)) {
      let computerChoice = getComputerChoice();

      if ((choice === 'rock' && ((computerChoice === 'scissors') || (computerChoice === 'lizard'))) ||
        (choice === 'paper' && ((computerChoice === 'rock') || (computerChoice === 'Spock'))) ||
        (choice === 'scissors' && ((computerChoice === 'paper') || (computerChoice === 'lizard'))) ||
        (choice === 'lizard' && ((computerChoice === 'paper') || (computerChoice === 'Spock'))) ||
        (choice === 'Spock' && ((computerChoice === 'rock') || (computerChoice === 'scissors')))) {
        userScore += 1;
        gamesPlayed += 1;
        prompt(`You chose ${choice}, computer chose ${computerChoice}\nYOU WIN round ${gamesPlayed}!\nUpdated Score = User: ${userScore} | Computer: ${computerScore}`);
      } else if ((computerChoice === 'rock' && ((choice === 'scissors') || (choice === 'lizard'))) ||
        (computerChoice === 'paper' && ((choice === 'rock') || (choice === 'Spock'))) ||
        (computerChoice === 'scissors' && ((choice === 'paper') || (choice === 'lizard'))) ||
        (computerChoice === 'lizard' && ((choice === 'paper') || (choice === 'Spock'))) ||
        (computerChoice === 'Spock' && ((choice === 'rock') || (choice === 'scissors')))) {
        computerScore += 1;
        gamesPlayed += 1;
        prompt(`You chose ${choice}, computer chose ${computerChoice}\nCOMPUTER WINS round ${gamesPlayed}!\nUpdated Score = User: ${userScore} | Computer: ${computerScore}`);
      } else {
        prompt(`You chose ${choice}, computer chose ${computerChoice}\nIt's a TIE! This round won't be counted.\nCurrent Score = User: ${userScore} | Computer: ${computerScore}`);
      }
    } else {
      prompt(`That's not a valid choice. Please choose again: ${VALID_CHOICES.join(', ')}`);
      choice = readline.question;
    }
  }

  displayWinner(userScore, computerScore);

  prompt("Would you like to play again?");
  let answer = readline.question()[0].toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter either "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  console.clear();

  if (answer !== 'y') {
    prompt('Thanks for playing!!');
    break;
  }
}
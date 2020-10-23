const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const NUMBER_OF_ROUNDS = 5;
const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['scissors', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

let userChoice = '';
let computerChoice = '';
let userScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

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
  let choice = readline.question().toLowerCase();
  if (choice[0] === 'r') choice = 'rock';
  else if (choice[0] === 'p') choice = 'paper';
  else if (choice.substring(0, 2) === 'sc') choice = 'scissors';
  else if (choice[0] === 'l') choice = 'lizard';
  else if (choice.substring(0, 2) === 'sp') choice = 'spock';
  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let randomChoiceOfComputer = VALID_CHOICES[randomIndex];
  return randomChoiceOfComputer;
}

function calculateRoundWinner(UserChoice, computerChoice) {
  if (WINNING_COMBINATIONS[UserChoice].includes(computerChoice)) {
    return "user";
  } else if (userChoice === computerChoice) {
    return "neither";
  } else {
    return "computer";
  }
}

function updateScore(roundWinner) {
  if (roundWinner === "user") {
    userScore += 1;
  } else if (roundWinner === "computer") {
    computerScore += 1;
  }
}
function updateGamesPlayed(roundWinner) {
  if (roundWinner === "user" || roundWinner === "computer") {
    gamesPlayed += 1;
  }
}
function displayRoundWinner(roundWinner) {
  if (roundWinner === 'user') {
    prompt(`You chose ${userChoice}, computer chose ${computerChoice}\nYOU WIN ` +
      `round ${gamesPlayed}!\nUpdated Score = User: ${userScore} | Computer: ` +
      `${computerScore}`);
  } else if (roundWinner === 'computer') {
    prompt(`You chose ${userChoice}, computer chose ${computerChoice}\nCOMPUTER ` +
      `WINS round ${gamesPlayed}!\nUpdated Score = User: ${userScore} | ` +
      `Computer: ${computerScore}`);
  } else {
    prompt(`You chose ${userChoice}, computer chose ${computerChoice}\nIt's a TIE! ` +
      `This round won't be counted.\nCurrent Score = User: ${userScore} | ` +
      ` Computer: ${computerScore}`);
  }
}

function displayCompetitionWinner(userScore, computerScore) {
  if (userScore > computerScore) {
    prompt(`YOU WON ${userScore} games, while the computer only won ${computerScore}` +
      `. This means YOU WIN THIS ROUND!!!`);
  } else {
    prompt(`Sorry. You lost this round! The Computer won ${computerScore}` +
      ` games, while you only won ${userScore}. Consider playing another round.`);
  }
}

function resetRound() {
  userScore = 0;
  computerScore = 0;
  gamesPlayed = 0;
}

function askToPlayAgain() {
  prompt("Would you like to play again?");
  let answer = readline.question()[0].toLowerCase();
  return answer;
}

function validatePlayAgainAnswer(answer) {
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter either "y" or "n".');
    answer = readline.question()[0].toLowerCase();
    validatePlayAgainAnswer(answer);
  }
  return answer;
}

console.clear();
displayGameRules();

while (true) {
  while (gamesPlayed < NUMBER_OF_ROUNDS) {
    userChoice = getUserChoice();
    console.clear();

    if (VALID_CHOICES.includes(userChoice)) {
      computerChoice = getComputerChoice();
      let roundWinner = calculateRoundWinner(userChoice, computerChoice);
      updateScore(roundWinner);
      updateGamesPlayed(roundWinner);
      displayRoundWinner(roundWinner);
    } else {
      prompt(`That's not a valid choice. Please choose again: ${VALID_CHOICES.join(', ')}`);
      userChoice = readline.question;
    }
  }

  displayCompetitionWinner(userScore, computerScore);
  resetRound();
  let playAgainAnswer = askToPlayAgain();
  let validatedPlayAgainAnswer = validatePlayAgainAnswer(playAgainAnswer);
  console.clear();

  if (validatedPlayAgainAnswer !== 'y') {
    prompt('Thanks for playing!!');
    break;
  }
}
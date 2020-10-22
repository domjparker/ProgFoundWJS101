const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

function prompt(message) {
  console.log(`=> ${message}\n`);
}

function displayScores(userScore, computerScore) {
  if (userScore > computerScore) {
    prompt(`YOU'VE WON this competition! YOU WON ${userScore} games, while ` +
      `the computer only won ${computerScore}. This means YOU WIN!!!`);
  } else {
    prompt(`Sorry. You lost this competition! The Computer won ${computerScore}` +
      `games, while you only won ${userScore} games. Consider another round.`);
  }
}

console.clear();
prompt('Welcome to this game of ROCK PAPER SCISSORS SPOCK LIZARD, ' +
  'a variation on the game ROCK PAPER SCISSORS. \n' +
  'Here is how game play works: \n' +
  'ROCK crushes SCISSORS & crushes LIZARD. \n' +
  'PAPER covers ROCK & disproves SPOCK. \n' +
  'SCISSORS cuts PAPER & decapitates LIZARD. \n' +
  'LIZARD eats PAPER & poisons SPOCK. \n' +
  'SPOCK smashes SCISSORS & vaporizes ROCK. \n' +
  'LETS PLAY!!!!!!!!!!!!!!!!!!!!');

while (true) {
  let userScore = 0;
  let computerScore = 0;
  let gamesPlayed = 0;
  while (gamesPlayed < 5) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}. \n` +
      `(For ease, you may also choose: ${VALID_CHOICES.map(choice => choice[0]).join(', ')})`);
    let choice = readline.question();
    if (choice === 'r') choice = 'rock';
    else if (choice === 'p') choice = 'paper';
    else if (choice === 's') choice = 'scissors';
    else if (choice === 'l') choice = 'lizard';
    else if (choice === 'S') choice = 'Spock';
    else if (choice === 'spock') choice = 'Spock';

    console.clear();

    if (VALID_CHOICES.includes(choice)) {
      let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
      let computerChoice = VALID_CHOICES[randomIndex];

      // prompt(`You chose ${choice}, computer chose ${computerChoice}`);

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

  displayScores(userScore, computerScore);

  prompt("Would you like to play again?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter either "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0].toLowerCase() !== 'y') {
    prompt('Thanks for playing!!');
    break;
  }
}
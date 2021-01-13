const READLINE = require("readline-sync");
const EMPTY_SPACE = ' ';
const EMPTY_SPACES = '  ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 3;
const WINNING_LINES = [
  // horizontal winning lines
  [1, 2, 3], [2, 3, 4], [3, 4, 5], [6, 7, 8], [7, 8, 9],
  [8, 9, 10], [11, 12, 13], [12, 13, 14], [13, 14, 15], [16, 17, 18],
  [17, 18, 19], [18, 19, 20], [21, 22, 23], [22, 23, 24], [23, 24, 25],
  // vertical winning lines
  [1, 6, 7], [6, 7, 11], [11, 16, 21], [2, 7, 12], [7, 12, 17], [12, 17, 22],
  [3, 8, 13], [8, 13, 18], [13, 18, 23], [4, 9, 14], [9, 14, 19], [14, 19, 24],
  [5, 10, 15], [10, 15, 20], [15, 20, 25],
  // diagonal winning lines
  [1, 7, 13], [2, 8, 14], [3, 9, 15], [6, 12, 18], [7, 13, 19], [8, 14, 20],
  [11, 17, 23], [12, 18, 24], [13, 19, 25],
  // diagonal winning lines
  [11, 7, 3], [12, 8, 4], [13, 9, 5], [16, 12, 8], [17, 13, 9], [18, 14, 10],
  [21, 17, 13], [22, 18, 14], [23, 19, 15]
];


// Function Definitions

function gameInstructions() {
  console.log(`\n\n\n\n\nWelcome to this game of Tic Tac Toe!`);
  console.log(`Try to get 3 'X's in a row before the computer does.`);
  console.log(`The first to win 3 rounds is the winner of the match.\n\n`);
}

function displayBoard(board, options, score) {
  console.log(`You are '${HUMAN_MARKER}'. Computer is '${COMPUTER_MARKER}'.`);
  console.log(' _______________________________________');
  console.log('|       |       |       |       |       |');
  console.log(`|   ${board['1']}   |   ${board['2']}   |   ${board['3']}   |   ${board['4']}   |   ${board['5']}   |                    YOUR SCORE: ${score.humanScore}.`);
  console.log('|       |       |       |       |       |');
  console.log(`|-------+-------+-------+-------+-------|                    COMPUTER SCORE: ${score.computerScore}.`);
  console.log('|       |       |       |       |       |');
  console.log(`|   ${board['6']}   |   ${board['7']}   |   ${board['8']}   |   ${board['9']}   |   ${board['10']}   |`);
  console.log('|       |       |       |       |       |');
  console.log(`|-------+-------+-------+-------+-------|                    Available Squares:`);
  console.log(`|       |       |       |       |       |                ${options['1']}     ${options['2']}     ${options['3']}     ${options['4']}     ${options['5']}   `);
  console.log(`|   ${board['11']}   |   ${board['12']}   |   ${board['13']}   |   ${board['14']}   |   ${board['15']}   |                ${options['6']}     ${options['7']}     ${options['8']}     ${options['9']}     ${options['10']}  `);
  console.log(`|       |       |       |       |       |                ${options['11']}    ${options['12']}    ${options['13']}    ${options['14']}    ${options['15']}  `);
  console.log(`|-------+-------+-------+-------+-------|                ${options['16']}    ${options['17']}    1${options['8']}    ${options['19']}    ${options['20']}  `);
  console.log(`|       |       |       |       |       |                ${options['21']}    ${options['22']}    ${options['23']}    ${options['24']}    ${options['25']}  `);
  console.log(`|   ${board['16']}   |   ${board['17']}   |   ${board['18']}   |   ${board['19']}   |   ${board['20']}   |`);
  console.log('|       |       |       |       |       |');
  console.log('|-------+-------+-------+-------+-------|');
  console.log(`|       |       |       |       |       |                Choose an available square.`);
  console.log(`|   ${board['21']}   |   ${board['22']}   |   ${board['23']}   |   ${board['24']}   |   ${board['25']}   |`);
  console.log('|_______|_______|_______|_______|_______|');
  console.log(' ');
}

function chooseFirstMover() {
  while (true) {
    prompt(`Who should make the first move? (me, computer, or random)`);
    let answer = READLINE.question().trim().toLowerCase();
    if (answer[0] === 'm') return "player";
    else if (answer[0] === 'c') return "computer";
    else if (answer[0] === 'r') {
      let randomNum = Math.floor(Math.random() * 2);
      if (randomNum === 0) return "player";
      else return "computer";
    } else {
      prompt(`Please enter a valid answer.`);
    }
  }
}

function someoneNotYetWonMatch(score) {
  return (score.humanScore < WINNING_SCORE && score.computerScore <
    WINNING_SCORE);
}

function initializeBoard() {
  let board = {};

  let counter = 1;
  while (counter <= 25) {
    board[String(counter)] = EMPTY_SPACE;
    counter += 1;
  }

  return board;
}

function initializeOptions() {
  let options = {};

  let counter = 1;
  while (counter <= 25) {
    options[String(counter)] = String(counter);
    counter += 1;
  }

  return options;
}

function prompt(message) {
  console.log(` ==>> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY_SPACE);
}

// function joinOr(array, punctuation = ', ', conjunction = 'or') {
//   if (array.length < 2) return array.toString();
//   else if (array.length === 2) {
//     return `${array.slice(0, 1).toString()} ${conjunction}
//     ${array.slice(1).toString()}`;
//   } else {
//     return `${array.slice(0, (array.length - 1))
//       .map(element => element + punctuation)
//       .join('')}${conjunction} ${array.slice(array.length - 1)
//         .toString()}`
//   }
// }

function playerChoosesSquare(board, options, score) {
  displayBoard(board, options, score);

  let chosenSquare;

  while (true) {
    // prompt(`Choose an available square (${joinOr(emptySquares(board))})`);
    chosenSquare = READLINE.question().trim();
    if (emptySquares(board).includes(chosenSquare)) break;

    prompt(`Sorry, '${chosenSquare}' is not a valid choice. Choose another.`);
  }
  if (chosenSquare > 9) options[chosenSquare] = EMPTY_SPACES;
  else options[chosenSquare] = EMPTY_SPACE;
  board[chosenSquare] = HUMAN_MARKER;
}

function isWinningMove(board) {
  for (let line of WINNING_LINES) {
    let [sq1, sq2, sq3] = line; // destructures the current array

    if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === EMPTY_SPACE
    ) return sq3;
    else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === EMPTY_SPACE &&
      board[sq3] === COMPUTER_MARKER
    ) return sq2;
    else if (
      board[sq1] === EMPTY_SPACE &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) return sq1;
  }

  return false;
}

function isThreat(board) {
  for (let line of WINNING_LINES) {
    let [sq1, sq2, sq3] = line;

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === EMPTY_SPACE
    ) return sq3;
    else if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === EMPTY_SPACE &&
      board[sq3] === HUMAN_MARKER
    ) return sq2;
    else if (
      board[sq1] === EMPTY_SPACE &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) return sq1;
  }

  return false;
}

function computerChoosesSquare(board, options) {
  let square;
  let winningMove = isWinningMove(board);
  let threatenedSquare = isThreat(board);

  if (winningMove !== false) {
    square = winningMove;
  } else if (threatenedSquare !== false) {
    square = threatenedSquare;
  } else if (board['13'] === EMPTY_SPACE) {
    square = 13;
  } else {
    let randomIdx = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIdx];
  }
  if (square > 9) options[square] = EMPTY_SPACES;
  else options[square] = EMPTY_SPACE;
  board[square] = COMPUTER_MARKER;
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function chooseSquare(board, currentPlayer, options, score) {
  if (currentPlayer === 'player') playerChoosesSquare(board, options, score);
  else computerChoosesSquare(board, options);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function detectRoundWinner(board) {
  for (let line of WINNING_LINES) {
    let [sq1, sq2, sq3] = line;

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'You';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWinsRound(board) {
  return detectRoundWinner(board);
}

function updateScore(winner, score) {
  if (winner === 'You') score.humanScore += 1;
  if (winner === 'Computer') score.computerScore += 1;
}

function playAgain() {
  let playAgainAnswer;

  while (true) {
    prompt("Would you like to play again (Y or N)?");
    playAgainAnswer = READLINE.question().trim().toLowerCase();
    if (playAgainAnswer[0] === 'y' || playAgainAnswer[0] === 'n') break;
    prompt("Please enter a valid answer.");
  }

  return playAgainAnswer;
}

// Game Initialization

while (true) { // match setup
  let score = {
    humanScore: 0,
    computerScore: 0,
  };

  console.clear();
  gameInstructions();
  let firstMover = chooseFirstMover();
  let currentPlayer = firstMover;

  while (someoneNotYetWonMatch(score)) { // individual round setup
    let board = initializeBoard();
    let options = initializeOptions();

    while (true) { // each player gets a turn. first mover depends on who was decided in match setup.
      console.clear();

      chooseSquare(board, currentPlayer, options, score);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWinsRound(board) || boardIsFull(board)) break;
    }

    if (someoneWinsRound(board)) {
      let winner = detectRoundWinner(board);
      updateScore(winner, score);
      prompt(`${winner} won this round!`);
      displayBoard(board, options, score);
    } else {
      displayBoard(board, options, score);
      prompt(`This round was a tie!`);
    }

    if (someoneNotYetWonMatch(score)) {
      prompt(`Press the 'enter' key to continue`);
      READLINE.question();
      console.clear();  // may not be necessary
      currentPlayer = firstMover;
    } else if (score.humanScore === WINNING_SCORE) prompt(`YOU WON the match!\n`);
    else prompt(`COMPUTER WON the match!\n`);

  }

  let playAgainAnswer = playAgain();

  if (playAgainAnswer[0] !== 'y') break;
}

prompt("Thanks for playing Tic Tac Toe!");
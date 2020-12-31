let readline = require("readline-sync");

// Function Definitions

function displayBoard(board) {
  console.clear();

  console.log(`You are '${HUMAN_MARKER}'. Computer is '${COMPUTER_MARKER}'.`)
  console.log(' _________________')
  console.log('|     |     |     |');
  console.log(`|  ${board['1']}  |  ${board['2']}  |  ${board['3']}  |`);
  console.log('|     |     |     |');
  console.log('|-----+-----+-----|');
  console.log('|     |     |     |');
  console.log(`|  ${board['4']}  |  ${board['5']}  |  ${board['6']}  |`);
  console.log('|     |     |     |');
  console.log('|-----+-----+-----|');
  console.log('|     |     |     |');
  console.log(`|  ${board['7']}  |  ${board['8']}  |  ${board['9']}  |`);
  console.log('|_____|_____|_____|');
  console.log(' ')
}

const EMPTY_SPACE = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function initializeBoard() {
  let board = {};

  let counter = 1;
  while (counter <= 9) {
    board[String(counter)] = EMPTY_SPACE;
    counter += 1;
  }

  return board;
}

function prompt(message) {
  console.log(` ==>> ${message}`)
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY_SPACE);
}

function playerChoosesSquare(board) {
  let chosenSquare;

  while (true) {
    prompt(`Choose an available square (${emptySquares(board).join(", ")})`);
    chosenSquare = readline.question().trim();
    if (emptySquares(board).includes(chosenSquare)) break;

    prompt(`Sorry, '${chosenSquare}' is not a valid choice.`)
  }
  board[chosenSquare] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  prompt(`Computer is making its choice.`);
  let randomIdx = Math.floor(Math.random() * emptySquares(board).length);

  let chosenSquare = emptySquares(board)[randomIdx];
  board[chosenSquare] = COMPUTER_MARKER;
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  for (line of winningLines) {
    let [sq1, sq2, sq3] = line; // destructures the current array

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

function someoneWins(board) {
  return detectWinner(board);
}

// Game Initialization

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWins(board) || boardIsFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWins(board) || boardIsFull(board)) break;
  }

  displayBoard(board);

  if (someoneWins(board)) {
    prompt(`${detectWinner(board)} won!`)
  } else prompt(`It's a tie!`);

  prompt("Would you like to play again (Y or N)?");
  let playAgainAnswer = readline.question().toLowerCase()[0];

  if (playAgainAnswer !== 'y') break;
}

prompt("Thanks for playing Tic Tac Toe!")

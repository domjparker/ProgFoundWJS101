const READLINE = require("readline-sync");
const EMPTY_SPACE = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 3;

// Function Definitions

function displayBoard(board) {
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

function joinOr(array, punctuation = ', ', conjunction = 'or') {
  if (array.length < 2) return array.toString();
  else if (array.length === 2) {
    return `${array.slice(0, 1).toString()} ${conjunction} ${array.slice(1).toString()}`;
  } else {
    return `${array.slice(0, (array.length - 1))
      .map(element => element + punctuation)
      .join('')}${conjunction} ${array.slice(array.length - 1)
        .toString()}`
  }
}

function playerChoosesSquare(board) {
  let chosenSquare;

  while (true) {
    prompt(`Choose an available square (${joinOr(emptySquares(board))})`);
    chosenSquare = READLINE.question().trim();
    if (emptySquares(board).includes(chosenSquare)) break;

    prompt(`Sorry, '${chosenSquare}' is not a valid choice.`)
  }
  board[chosenSquare] = HUMAN_MARKER;
}

function isThreat(board) {
  let winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  for (line of winningLines) {
    let [sq1, sq2, sq3] = line; // destructures the current array

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === ' '
    ) return sq3;
    else if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === ' ' &&
      board[sq3] === HUMAN_MARKER
    ) return sq2;
    else if (
      board[sq1] === ' ' &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) return sq1;
  }
  return false;
}

function computerChoosesSquare(board) {
  let threat = isThreat(board);
  if (threat !== false) {
    board[threat] = COMPUTER_MARKER;
  } else {
    let randomIdx = Math.floor(Math.random() * emptySquares(board).length);

    board[emptySquares(board)[randomIdx]] = COMPUTER_MARKER;
  }
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function detectRoundWinner(board) {
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

function someoneWinsRound(board) {
  return detectRoundWinner(board);
}

// Game Initialization

while (true) {
  let human_score = 0;
  let computer_score = 0;

  while (human_score < WINNING_SCORE && computer_score < WINNING_SCORE) {
    let board = initializeBoard();

    while (true) {
      console.clear();
      prompt(`YOUR SCORE: ${human_score}`);
      prompt(`COMPUTER SCORE: ${computer_score}`);
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWinsRound(board) || boardIsFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWinsRound(board) || boardIsFull(board)) break;
    }

    displayBoard(board);

    if (someoneWinsRound(board)) {
      let winner = detectRoundWinner(board);
      prompt(`${winner} won this round!`);
      if (winner === 'You') human_score += 1;
      if (winner === 'Computer') computer_score += 1;
    } else prompt(`This round was a tie!`);
  }

  console.clear();
  if (human_score === WINNING_SCORE) prompt(`YOU WON the match!\n`);
  else prompt(`COMPUTER WON the match!\n`);

  prompt("Would you like to play again (Y or N)?");
  let playAgainAnswer = READLINE.question().toLowerCase()[0];

  if (playAgainAnswer !== 'y') break;
}

prompt("Thanks for playing Tic Tac Toe!")
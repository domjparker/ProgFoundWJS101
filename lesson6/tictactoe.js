const READLINE = require("readline-sync");
const EMPTY_SPACE = ' ';
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

function displayBoard(board) {
  console.log(`You are '${HUMAN_MARKER}'. Computer is '${COMPUTER_MARKER}'.`)
  console.log(' _____________________________')
  console.log('|     |     |     |     |     |');
  console.log(`|  ${board['1']}  |  ${board['2']}  |  ${board['3']}  |  ${board['4']}  |  ${board['5']}  |`);
  console.log('|     |     |     |     |     |');
  console.log('|-----+-----+-----+-----+-----|');
  console.log('|     |     |     |     |     |');
  console.log(`|  ${board['6']}  |  ${board['7']}  |  ${board['8']}  |  ${board['9']}  |  ${board['10']}  |`);
  console.log('|     |     |     |     |     |            Example Squares:');
  console.log('|-----+-----+-----+-----+-----|             | 1 | 2 | 3 | 4 | 5 |');
  console.log('|     |     |     |     |     |             | 6 | 7 | 8 | 9 | 10|');
  console.log(`|  ${board['11']}  |  ${board['12']}  |  ${board['13']}  |  ${board['14']}  |  ${board['15']}  |             | 11| 12| 13| 14| 15|`);
  console.log('|-----+-----+-----+-----+-----|             | 16| 17| 18| 19| 20|');
  console.log('|     |     |     |     |     |             | 21| 22| 23| 24| 25|');
  console.log(`|  ${board['16']}  |  ${board['17']}  |  ${board['18']}  |  ${board['19']}  |  ${board['20']}  |`);
  console.log('|-----+-----+-----+-----+-----|');
  console.log('|     |     |     |     |     |');
  console.log(`|  ${board['21']}  |  ${board['22']}  |  ${board['23']}  |  ${board['24']}  |  ${board['25']}  |`);
  console.log('|_____|_____|_____|_____|_____|');
  console.log(' ')
}

function chooseFirstMover() {
  prompt(`Who should make the first move? (me, computer, or random)`);
  let answer = READLINE.question().trim().toLowerCase();
  if (answer[0] === 'm') return "player";
  else if (answer[0] === 'c') return "computer";
  else if (answer[0] === 'r') {
    let randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) return "player";
    else return "computer";
  }
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
  displayBoard(board);

  let chosenSquare;

  while (true) {
    prompt(`Choose an available square (${joinOr(emptySquares(board))})`);
    chosenSquare = READLINE.question().trim();
    if (emptySquares(board).includes(chosenSquare)) break;

    prompt(`Sorry, '${chosenSquare}' is not a valid choice.`)
  }
  board[chosenSquare] = HUMAN_MARKER;
}

function isWinningMove(board) {
  for (line of WINNING_LINES) {
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
  for (line of WINNING_LINES) {
    let [sq1, sq2, sq3] = line; // destructures the current array

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

function computerChoosesSquare(board) {
  let square;
  let winningMove = isWinningMove(board);
  let threatenedSquare = isThreat(board);

  if (winningMove !== false) {
    square = winningMove;
  } else if (threatenedSquare !== false) {
    square = threatenedSquare;
  } else if (board['5'] === EMPTY_SPACE) {
    square = 13;
  } else {
    let randomIdx = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIdx];
  }
  return board[square] = COMPUTER_MARKER;
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') playerChoosesSquare(board);
  else computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function detectRoundWinner(board) {
  for (line of WINNING_LINES) {
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

while (true) { // match setup
  let human_score = 0;
  let computer_score = 0;
  console.clear();
  let currentPlayer = chooseFirstMover();

  while (human_score < WINNING_SCORE && computer_score < WINNING_SCORE) { // individual round setup
    let board = initializeBoard();

    while (true) { // each player gets one turn. first player depends on who was decided in match setup.
      console.clear();

      prompt(`YOUR SCORE: ${human_score}`);
      prompt(`COMPUTER SCORE: ${computer_score}`);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

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

  let playAgainAnswer;

  while (true) {
    prompt("Would you like to play again (Y or N)?");
    playAgainAnswer = READLINE.question().trim().toLowerCase();
    if (playAgainAnswer[0] === 'y' || playAgainAnswer[0] === 'n') break;
    prompt("Please enter a valid answer.")
  }

  if (playAgainAnswer[0] !== 'y') break;
}

prompt("Thanks for playing Tic Tac Toe!")
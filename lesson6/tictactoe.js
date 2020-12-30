let readline = require("readline-sync");

let displayBoard = (board) => {
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
};

const EMPTY_SPACE = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

let initializeBoard = () => {
  let board = {};

  let counter = 1;
  while (counter <= 9) {
    board[String(counter)] = EMPTY_SPACE;
    counter += 1;
  }

  return board;
};

let prompt = (message) => {
  console.log(` ==>> ${message}`)
}

let playerChoosesSquare = (board) => {
  let chosenSquare;

  let emptySquares = Object.keys(board).filter(key => board[key] === EMPTY_SPACE);

  while (true) {
    prompt(`Choose an available square (${emptySquares.join(", ")})`);
    chosenSquare = readline.question().trim();
    
    if (emptySquares.includes(chosenSquare)) break;

    prompt(`Sorry, '${chosenSquare}' is not a valid choice.`)
  }

  board[chosenSquare] = HUMAN_MARKER;
};


let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);


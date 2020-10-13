// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')

function messages(message, lang= 'es') {
  return MESSAGES[lang][message]
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculate() {
  prompt(messages('firstNum', 'es'));
  let number1 = readline.question();
  // prompt(number1);
  while (invalidNumber(number1)) {
    prompt(messages.invalidNum);
    number1 = readline.question();
  }

  prompt(messages('secondNum', 'es'));
  let number2 = readline.question();
  // prompt(`${number1} ${number2}`);
  while (invalidNumber(number2)) {
    prompt(messages.invalidNum);
    number2 = readline.question();
  }

  prompt(messages('whatOp', 'es'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('mustChoose', 'es'));
    operation = readline.question();
  }

  let output;
  // if (operation === '1') {
  //   output = Number(number1) + Number(number2);
  // } else if ( operation === '2') {
  //   output = Number(number1) - Number(number2);
  // } else if ( operation === '3') {
  //   output = Number(number1) * Number(number2);
  // } else if ( operation === '4') {
  //   output = Number(number1) / Number(number2);
  // }
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);
  repeatCalc();
}

function repeatCalc() {
  prompt(messages('anotherCalc', 'es'));
  let repeatAnswer = readline.question();
  if (repeatAnswer[0].toLocaleLowerCase() === "y" || "s") {
    calculate();
  } else {
    console.log(messages('exitThanks', 'es'));
  }
}

prompt(messages('welcome', 'en'));
calculate();








// Welcome user
// Ask user for the amount they want to borrow for mortgage
// Validate loan amount
// Ask user for annual percentage rate (APR) they have been quoted
// Validate APR and convert to monthly rate
// Ask user for the duration of loan they have chosen (15, 30, or other years)
// Validate year repayment duration
// Calculate monthly payment
// Return result to terminal
// Ask user if they would like to do another calculation

// require readline for getting answers to question prompts
const READLINE = require('readline-sync')

// function to tidy message display
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to validate loan amount input
function validLoanAmount(inputValue) {
  if (inputValue.includes(' thousand' || ' grand' || ' thousand dollars')) {
    let refinedValue = parseInt(inputValue.replace(' thousand' || ' grand' || 'thousand dollars', '')) * 1000;
    return refinedValue;
  } else {
    refinedValue = parseInt(inputValue.replace(/[^\d.-]/g, ''));
    return refinedValue;
  }
}

// function to validate APR input
function validPercentage(value) {
  if (!value.includes('%')) {
    prompt('Please enter a valid percentage value.')
    getMortRate();
  }
  if (value.includes('%')) {
    return parseFloat(value.replace('%', '')) / 100;
  }
}

// function to validate loan year duration (somewhat redundant, but I'm just experimenting)
function validateDuration(durationAnswer) {
  if (durationAnswer === 'other') {
    prompt('Over how many years will the loan be repaid? (e.g 5, 7, 13, 24)');
    durationAnswer2 = READLINE.question();
    yearAnswerValid = validateDuration(durationAnswer2);
    return yearAnswerValid;
  } else if (durationAnswer.includes(' years')) {
    return durationAnswer.replace(' years', '');
  } else {
    return durationAnswer;
  }
}

// function to insert commas as thousands separators
function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Create function to allow for repeated calculations
function getMortRate() {
  // Ask user for the amount they want to borrow for mortgage
  prompt(`What is the amount you would like to borrow in this mortgage loan?`);
  let initLoanAmount = READLINE.question();
  let loanAmount = validLoanAmount(initLoanAmount);
  // console.log(loanAmount);
  // console.log(typeof loanAmount);
  // Ask user for annual percentage rate (APR) they have been quoted
  prompt(`What is the annual percentage rate (APR) you have been quoted? (e.g. 3.5%, 4%, 4.5%)`);
  let initAnnPercRate = READLINE.question();
  let annPercRate = validPercentage(initAnnPercRate);
  // console.log(annPercRate);
  // console.log(typeof annPercRate);
  // Ask user for the duration of loan they have been chosen (15, 30, or other years)
  prompt('Will this be repaid over 15 years, 30 years, or other? (15/30/other)');
  let yearAnswer = READLINE.question();
  let loanYearDur = validateDuration(yearAnswer);
  calcMonthPayment(loanAmount, annPercRate, loanYearDur);
}

// function to calculate monthly repayment
function calcMonthPayment(loanAm, aPR, loanYears) {
  // convert APR to monthly interest rate
  let monthPercRate = aPR / 12;
  // convert loan years amount to months
  let monthLoanDur = loanYears * 12;
  // run formula
  let monthPayment = addCommas((loanAm * (monthPercRate / (1 - Math.pow((1 + monthPercRate), (-monthLoanDur))))).toFixed(2));
  let totalPayment = (monthPayment * 12 * loanYears).toFixed(2);
  let repaymentDifference = addCommas((totalPayment - loanAm).toFixed(2));
  // log results for user
  prompt(`Your monthly repayment for this mortgage will be $${monthPayment}. Over a period of ${loanYears} years (${monthLoanDur} months), your total repayment amount comes to $${addCommas(totalPayment)}. Therefore, on top of the repayment of your initial loan amount ($${addCommas(loanAm)}) you will end up paying an extra $${repaymentDifference} to the loaning institution. Is it worth it?`);
  repeatCalc();
}

// function to repeat calculation
function repeatCalc() {
  prompt('Would you like to do another calculation? (y/n)');
  let answerRepeat = READLINE.question();
  if (answerRepeat[0].toLocaleLowerCase() === 'y') {
    getMortRate();
  } else {
    prompt('Thanks for using this mortgage calculator.');
  }
}

// Welcome
prompt('Welcome. This is a mortgage calculator. Answer these questions to calculate the amount you would be forecasted to repay.');
// Run initial program
getMortRate();



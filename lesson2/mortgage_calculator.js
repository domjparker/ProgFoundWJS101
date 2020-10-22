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
const READLINE = require('readline-sync');

// function to tidy message display
function prompt(message) {
  console.log(`\n=> ${message}`);
}

// function to validate loan amount input
function getValidLoanAmount() {
  // Ask user for the amount they want to borrow for mortgage
  prompt(`What is the amount you would like to borrow in this mortgage loan?`);
  let loanInputValue = READLINE.question();
  if ((loanInputValue.includes('-')) || (Math.sign(loanInputValue) === -1) || (Number(loanInputValue) === 0)
  || (isNaN(loanInputValue))) {
    prompt('You have entered an invalid loan amount.');
    runMainProgram();
  }
  if (loanInputValue.includes(' thousand' || ' grand' || ' thousand dollars')) {
    let refinedValue = Number(loanInputValue.replace(' thousand' || ' grand' || 'thousand dollars', '')) * 1000;
    return refinedValue;
  } else {
    let refinedValue = Number(loanInputValue.replace(/[^\d.-]/g, ''));
    return refinedValue;
  }
}

// function to validate APR input
function getValidAPR() {
  // Ask user for annual percentage rate (APR) they have been quoted
  prompt(`What is the annual percentage rate (APR) you have been quoted? (e.g. 3.5%, 4%, 4.5%)`);
  let annualPercentageRateInputValue = READLINE.question();
  if (!annualPercentageRateInputValue.includes('%')) {
    prompt('You have entered an invalid percentage Annual Percentage Rate (APR).');
    runMainProgram();
  }
  return parseFloat((annualPercentageRateInputValue.replace('%', '')) / 100);
}

// function to validate loan year duration (somewhat redundant, but I'm
// just experimenting)
function getValidDuration() {
  // Ask user for the duration of loan they have been chosen (15, 30, or
  // other years)
  prompt('Will this be repaid over 15 years, 30 years, or other? (e.g 15, 30, 7, 13, 24)');
  let durationAnswer = READLINE.question();
  if (durationAnswer.includes(' years')) {
    durationAnswer = Number(durationAnswer.replace(' years', ''));
  } else if (isNaN(durationAnswer)) {
    prompt('Please enter a valid number amount of years for the loan duration');
    runMainProgram();
  }
  return durationAnswer;
}

// function to insert commas as thousands separators
function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Create function to allow for repeated calculations
function getUserInputsForCalculation() {
  let loanAmount = getValidLoanAmount();
  // console.log(loanAmount);
  // console.log(typeof loanAmount);
  let annPercRate = getValidAPR();
  // console.log(annPercRate);
  // console.log(typeof annPercRate);
  let loanYearDur = getValidDuration();
  return {
    loanAmount,
    annPercRate,
    loanYearDur
  };
}

// function to calculate and display monthly repayment
function displayMonthlyPayment(validUserInputs) {
  let vUI = validUserInputs;
  // convert APR to monthly interest rate
  let monthPercRate = vUI.annPercRate / 12;
  // convert loan years amount to months
  let monthLoanDur = vUI.loanYearDur * 12;
  // run formula
  let monthPayment = addCommas((vUI.loanAmount * (monthPercRate /
    (1 - Math.pow((1 + monthPercRate),
      (-monthLoanDur))))).toFixed(2));
  let totalPayment = (monthPayment * 12 * vUI.loanYearDur).toFixed(2);
  let repaymentDifference = addCommas((totalPayment -
    vUI.loanAmount).toFixed(2));
  // log results for user
  prompt(`Your monthly repayment for this mortgage will be $${monthPayment}. 
  Over a period of ${vUI.loanYearDur} years (${monthLoanDur} months), your total 
  repayment amount comes to $${addCommas(totalPayment)}. Therefore, on top of 
  the repayment of your initial loan amount ($${addCommas(vUI.loanAmount)}) you 
  will end up paying an extra $${repaymentDifference} to the loaning institution. 
  Is it worth it?`);
}

// function to repeat calculation
function repeatCalculationYesNo() {
  prompt('Would you like to do another calculation? (y/n)');
  let answerRepeat = READLINE.question();
  if (answerRepeat[0].toLocaleLowerCase() === 'y') {
    console.clear();
    runMainProgram();
  }
}

function runMainProgram() {
  // get necessary inputs from user
  let validUserInputs = getUserInputsForCalculation();
  displayMonthlyPayment(validUserInputs);
  repeatCalculationYesNo();
}

// Welcome
console.clear();
prompt('Welcome. This is a mortgage calculator. Answer these questions to forecast the amount you would have to repay.');
runMainProgram();


prompt('Thanks for using this mortgage calculator.');


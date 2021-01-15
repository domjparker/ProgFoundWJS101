const READLINE = require("readline-sync");
const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack',
  'Queen', 'King', 'Ace'];
const SUITS = ['♥', '♣', '♦', '♠'];
const WINNING_SCORE = 3;
const DEALER_AUTO_STAY_VALUE = 17;
const MAX_SUM_HAND_VALUE = 21;

// shuffles deck with its current number of cards
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
}

// creates full deck in order
function initializeDeck() {
  let deck = [];
  SUITS.forEach(suit => {
    CARD_VALUES.forEach(value => {
      deck.push([suit, value]);
    });
  });
  return shuffle(deck);
}

// Deal initial two cards
function dealInitialCards(deck) {
  let initialHand = [];
  initialHand.push(deck.shift());
  initialHand.push(deck.shift());
  return initialHand;
}

function prompt(message) {
  console.log(`  ==>>  ${message}`);
}

// Displays info on the first screen before game starts
function gameIntro() {
  console.log('  ---------------------------------------------------------\n');
  prompt('Welcome to the game of Twenty-One!\n');
  prompt('Game Instructions:\n');
  console.log(`  The initial object of the game is to get the sum of your card 
  values as close to, but not over, ${MAX_SUM_HAND_VALUE}. You will play first, followed 
  by the dealer. If you go over ${MAX_SUM_HAND_VALUE}, you 'bust' (lose). If you 'stay'
  (pass before busting), it is then the dealer's turn. If the dealer 
  'busts' (you win). If the dealer chooses to 'stay', then whoever
  has the higher sum hand value in the end, wins!\n
  The game here will consist of multiple rounds. Whoever scores 3
  points first, wins the game.\n`);
}

// Displays current hands, with dealer's last card hidden
function displayHands(playerHand, dealerHand, gameStats, showHidden) {
  console.log('  ---------------------------------------------------------');
  console.log(`  GAME STATS :`);
  console.log(`  Your Score : ${gameStats["playerScore"]}`);
  console.log(`  Dealer Score : ${gameStats["dealerScore"]}`);
  console.log(`  Current Round Number : ${gameStats["roundNum"]}`);
  console.log('  ---------------------------------------------------------');
  console.log(`  PLAYER HAND :`);
  playerHand.forEach(card => console.log(`  ${card[1]} of ${card[0]}`));
  console.log('  ---------------------------------------------------------');
  console.log(`  DEALER HAND:`);
  if (showHidden === 'noShow') {
    for (let idx = 0; idx < dealerHand.length - 1; idx += 1) {
      console.log(`  ${dealerHand[idx][1]} of ${dealerHand[idx][0]}`);
    }
    console.log(`  ?? 🂠 ??`);
  } else for (let card of dealerHand) console.log(`  ${card[1]} of ${card[0]}`);
  console.log('  ---------------------------------------------------------\n');
}

// adds card values in hand, accounting for Aces (1/11)
function sumHandValue(hand) {
  let cardValues = hand.map(card => card[1]);

  let sum = 0;
  cardValues.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  cardValues.filter(value => value === "Ace").forEach(_ => {
    if (sum > MAX_SUM_HAND_VALUE) sum -= 10;
  });

  return sum;
}

// Checks to see if a hand's total value is above MAX_SUM_HAND_VALUE
function busted(hand) {
  return (sumHandValue(hand) > MAX_SUM_HAND_VALUE);
}

// Displays overall game winner
function displayGameWinner(gameStats) {
  console.log(`\n\n\n\n\n`);
  if (gameStats["playerScore"] === WINNING_SCORE) {
    console.log(`                  +++  YOU WON  +++`);
  } else console.log(`                 +++  DEALER WON  +++`);

  console.log(`                   Rounds Played: ${gameStats["roundNum"]}`);
  console.log(`                   Your Score: ${gameStats["playerScore"]}`);
  console.log(`                   Dealer Score: ${gameStats["dealerScore"]}`);
}

// Asks and validates if player wants to play again
function playAgain() {
  let playAgainAnswer;

  while (true) {
    console.log('  \n-------------------------------------------------\n');
    prompt("Would you like to play again (Y or N)?");
    playAgainAnswer = READLINE.question().toLowerCase();
    if (playAgainAnswer[0] === 'y' || playAgainAnswer[0] === 'n') break;
    prompt("Please enter a valid answer.");
  }

  return playAgainAnswer[0];
}

// GAME SETUP LOOP
console.clear();
gameIntro();
prompt(`Press 'Enter' to start the start the game.`);
READLINE.question();

while (true) {
  let gameStats = { playerScore: 0, dealerScore: 0, roundNum: 0 };

  while (gameStats["playerScore"] < WINNING_SCORE && gameStats["dealerScore"] <
    WINNING_SCORE) {
    let deck = initializeDeck();

    // initial hands deal
    let playerHand = dealInitialCards(deck);
    let dealerHand = dealInitialCards(deck);
    let whoBusted;

    // PLAYER TURN LOOP
    while (true) {
      console.clear();
      displayHands(playerHand, dealerHand, gameStats, 'noShow');
      let playerAnswer;

      while (true) {
        prompt("hit or stay? (h/s)");
        playerAnswer = READLINE.question().toLowerCase();
        if (playerAnswer[0] === 'h' || playerAnswer[0] === 's') break;
        prompt("Please enter a valid answer.");
      }

      if (playerAnswer[0] === 's') {
        prompt("You chose to stay! Press 'Enter' and DEALER will take a card.");
        READLINE.question();
        break;
      } else if (playerAnswer[0] === 'h') {
        playerHand.push(deck.shift());
        if (busted(playerHand)) {
          whoBusted = "player";
          break;
        }
      }
    }

    if (!busted(playerHand)) {
      // DEALER TURN LOOP
      while (true) {
        console.clear();
        if (busted(dealerHand)) {
          whoBusted = "dealer";
          break;
        } else if (sumHandValue(dealerHand) >= DEALER_AUTO_STAY_VALUE) {
          displayHands(playerHand, dealerHand, gameStats, 'noShow');
          prompt("DEALER stays. Press 'Enter' to find out who wins.");
          READLINE.question();
          break;
        } else {
          dealerHand.push(deck.shift());
          displayHands(playerHand, dealerHand, gameStats, 'noShow');
          prompt("DEALER has taken a card. Press 'Enter' to continue.");
          READLINE.question();
        }
      }
    }

    console.clear();
    displayHands(playerHand, dealerHand, gameStats, 'show');
    let playerHandTotal = sumHandValue(playerHand);
    let dealerHandTotal = sumHandValue(dealerHand);

    // COMPARE CARDS + DECLARE WINNER
    if (whoBusted === 'player') {
      console.log('  +++ YOU BUSTED! DEALER WINS! +++\n');
      gameStats["dealerScore"]++;
    } else if (whoBusted === 'dealer') {
      console.log('  +++ DEALER BUSTED! YOU WIN! +++\n');
      gameStats["playerScore"]++;
    } else if (playerHandTotal > dealerHandTotal) {
      console.log('  +++ YOU WON! +++\n');
      gameStats["playerScore"]++;
    } else if (playerHandTotal < dealerHandTotal) {
      console.log('  +++ DEALER WON +++\n');
      gameStats["dealerScore"]++;
    } else console.log('  +++ YOU and DEALER TIED +++\n');

    gameStats["roundNum"]++;

    prompt(`YOUR HAND's total value was ${playerHandTotal}`);
    prompt(`The DEALER's HAND's total value was ${dealerHandTotal}\n`);

    prompt(`Press 'Enter' to continue.`);
    READLINE.question();
  }

  console.clear();
  displayGameWinner(gameStats);


  // play again decision
  let playAgainAnswer = playAgain();
  if (playAgainAnswer !== 'y') break;
}
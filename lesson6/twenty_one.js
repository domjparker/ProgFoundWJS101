const READLINE = require("readline-sync");
const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const SUITS = ['♥', '♣', '♦', '♠'];

// creates full deck in order
function initializeDeck() {
  let deck = [];
  SUITS.forEach(suit => {
    CARD_VALUES.forEach(value => {
      deck.push([suit, value]);
    });
  });
  return deck;
}

// shuffles (mutates) deck with its current number of cards
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

// Deal initial two cards
function dealInitialCards(deck) {
  let initialHand = [];
  initialHand.push(deck.shift());
  initialHand.push(deck.shift());
  return initialHand;
}

function prompt(message) {
  console.log(`==>> ${message}`);
}

// Displays info on the first screen before game starts
function gameInstructions() {
  prompt('Game instructions go here.....');
}

// Displays current hands, with dealer's last card hidden
function displayHands(playerHand, dealerHand, showHidden) {
  console.log('--------------------');
  console.log(`PLAYER HAND :`);
  playerHand.forEach(card => console.log(`${card[1]} of ${card[0]}`));
  console.log('--------------------');
  console.log(`DEALER HAND:`);
  if (showHidden === 'noShow') {
    for (let idx = 0; idx < dealerHand.length - 1; idx += 1) {
      console.log(`${dealerHand[idx][1]} of ${dealerHand[idx][0]}`);
    }
    console.log(`?? 🂠 ??`);
  } else for (let card of dealerHand) {
    console.log(`${card[1]} of ${card[0]}`);
  }
  console.log('--------------------');
}

function hitOrStay() {
  let hitOrStayAnswer;

  while (true) {
    prompt("hit or stay? (h/s)");
    hitOrStayAnswer = READLINE.question().trim().toLowerCase();
    if (hitOrStayAnswer[0] === 'h' || hitOrStayAnswer[0] === 's') break;
    prompt("Please enter a valid answer.");
  }

  return hitOrStayAnswer[0];
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
    if (sum > 21) sum -= 10;
  });

  return sum;
}

// checks to see if a hand's total value is above 21
function busted(hand) {
  return (sumHandValue(hand) > 21);
}

// Asks and validates if player wants to play again
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

// GAME SETUP LOOP
while (true) {
  console.clear();
  let deck = initializeDeck();
  shuffle(deck);

  let playerHand = dealInitialCards(deck);
  let dealerHand = dealInitialCards(deck);

  gameInstructions();
  prompt(`Press 'Enter' to start the game.`);
  READLINE.question();

  // PLAYER TURN LOOP
  while (true) {
    console.clear();
    displayHands(playerHand, dealerHand, 'noShow');
    let playerAnswer = hitOrStay();
    if (playerAnswer === 's') {
      prompt("You chose to stay! Press 'Enter' to let DEALER to take a card.");
      READLINE.question();
      break;
    } else if (playerAnswer === 'h') {
      playerHand.push(deck.shift());
      if (busted(playerHand)) break;
    }
  }

  if (!busted(playerHand)) {
    // DEALER TURN LOOP
    while (true) {
      console.clear();
      if (sumHandValue(dealerHand) >= 17) {
        displayHands(playerHand, dealerHand, 'noShow');
        prompt("DEALER stays. Press 'Enter' to find out who wins.");
        READLINE.question();
        break;
      } else if (busted(dealerHand)) break;
      else {
        dealerHand.push(deck.shift());
        displayHands(playerHand, dealerHand, 'noShow');
        prompt("DEALER has taken a card. Press 'Enter' to continue.");
        READLINE.question();
      }
    }
  }

  console.clear();
  displayHands(playerHand, dealerHand, 'show');

  // COMPARE CARDS + DECLARE WINNER
  if (busted(playerHand)) {
    prompt("YOU BUSTED!!! YOUR hand's total value is above 21!!");
  } else if (busted(dealerHand)) {
    prompt("DEALER BUSTS!!! THE DEALER'S HAND'S total value is above 21!!");
  } else {
    let playerHandTotal = sumHandValue(playerHand);
    let dealerHandTotal = sumHandValue(dealerHand);
    if (playerHandTotal > dealerHandTotal) prompt('This means YOU won!');
    else if (playerHandTotal < dealerHandTotal) prompt('This means DEALER won.');
    else prompt('YOU and DEALER TIED.');
    prompt(`YOUR HAND's total value was ${playerHandTotal}`);
    prompt(`The DEALER's HAND's total value was ${dealerHandTotal}`);
  }

  // play again decision
  let playAgainAnswer = playAgain();
  if (playAgainAnswer !== 'y') break;
}


/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
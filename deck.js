// Arrays to represent card suits and ranks
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King ', 'Ace'];

// Function for creating a deck of cards
function createDeck() {
     let deck = [];
     for (const suit of suits) {
         for (const rank of ranks) {
             deck.push({ suit, rank });
         }
     }
     return deck;
}

// Function for shuffling the deck
function shuffleDeck(deck) {
     for (let i = deck.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [deck[i], deck[j]] = [deck[j], deck[i]];
     }
}

// Create and shuffle the deck
const deck = createDeck();
shuffleDeck(deck);

// Output the deck to the console
console.log(deck);

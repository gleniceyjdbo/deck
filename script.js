const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

function createDeck() {
    let deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

const deck = createDeck();
shuffleDeck(deck);

for (const card of deck) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.textContent = `${card.rank} of ${card.suit}`;
    document.body.appendChild(cardElement);
}

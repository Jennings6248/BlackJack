const playerCards = []
const dealerCards = []

const YOUR_TURN = 'your turn'
const DEALER_TURN = 'dealer turn'
const PLAYER_WON = 'player won'
const DEALER_WON = 'dealer won'

const gameState = YOUR_TURN

const HEARTS = 'hearts'
const SPADES = 'spades'
const DIAMONDS = 'diamonds'
const CLUBS = 'clubs'

const suits = [HEARTS, SPADES, DIAMONDS, CLUBS]

const TWO = 'two'
const THREE = 'three'
const FOUR = 'four'
const FIVE = 'five'
const SIX = 'six'
const SEVEN = 'seven'
const EIGHT = 'eight'
const NINE = 'nine'
const TEN = 'ten'
const JACK = 'jack'
const QUEEN = 'queen'
const KING = 'king'
const ACE = 'ace'

const ranks = [
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
]

const deckOfCards = []
suits.forEach(function(suit) {
  suit
  ranks.forEach(function(rank) {
    rank

    const cardObject = {
      suit: suit,
      rank: rank,
    }

    deckOfCards.push(cardObject)
    console.log(deckOfCards)
  })
})

const heartsOfTwo = {
  suit: HEARTS,
  rank: THREE,
}

// const nineOfHearts = {
//     suit: suits[0],
//     rank: ranks[8]
// }

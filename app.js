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

const TWO = 'r02'
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
    //console.log(deckOfCards)
  })
})

playerCards.push(deckOfCards[0])
playerCards.push(deckOfCards[1])

dealerCards.push(deckOfCards[2])
dealerCards.push(deckOfCards[3])

//console.log(dealerCards)
//console.log(playerCards)

console.log(playerCards[0].rank)

const rankToNumber = function(cardRank) {
  const rankedValue = ranks.map(function(rank) {
    if (rank === TWO) {
      return 2
    } else if (rank === THREE) {
      return 3
    } else if (rank === FOUR) {
      return 4
    } else if (rank === FIVE) {
      return 5
    } else if (rank === SIX) {
      return 6
    } else if (rank === SEVEN) {
      return 7
    } else if (rank === EIGHT) {
      return 8
    } else if (rank === NINE) {
      return 9
    } else if (rank === TEN) {
      return 10
    } else if (rank === JACK) {
      return 10
    } else if (rank === QUEEN) {
      return 10
    } else if (rank === KING) {
      return 10
    } else if (rank === ACE) {
      return 11
    }
  })
  console.log(rankedValue)
  const indexOfRank = ranks.findIndex(function(rank) {
    return rank === cardRank
  })
  console.log('findIndex:', indexOfRank)
  return rankedValue[indexOfRank]
}

console.log(rankToNumber(EIGHT)) //8
console.log(rankToNumber(JACK)) /// 10

const sumRankToNumber = function(num1, num2) {
  return num1 + num2
}

//console.log(sumRankToNumber(rankToNumber(EIGHT), rankToNumber(JACK)))

const yourScoreValue = function() {
  return rankToNumber(playerCards[0].rank) + rankToNumber(playerCards[1].rank)
}

const dealerScoreValue = function() {
  return rankToNumber(dealerCards[0].rank) + rankToNumber(dealerCards[1].rank)
}

console.log(yourScoreValue())

const render = function() {
  const playerMessageClass = document.querySelector('.player-score')
  const dealerMessageClass = document.querySelector('.dealer-score')

  playerMessageClass.textContent = `Your score: ${yourScoreValue()}`
  dealerMessageClass.textContent = `Dealer score: ${dealerScoreValue()}`
  const cardContainer = document.querySelector('.cards-container')
  const image1 = document.createElement('div')
  image1.setAttribute('class', 'card hearts r02')
  cardContainer.appendChild(image1)

  const image2 = document.createElement('div')
  image2.setAttribute('class', 'card hearts r03')
  cardContainer.appendChild(image2)

  const image3 = document.createElement('div')
  image3.setAttribute('class', 'card hearts r04')
  cardContainer.appendChild(image3)

  const image4 = document.createElement('div')
  image4.setAttribute('class', 'card hearts r05')
  cardContainer.appendChild(image4)
}
render()

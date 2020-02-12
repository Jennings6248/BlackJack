const playerCards = []
const dealerCards = []
//console.log(playerCards)

const YOUR_TURN = 'your turn'
const DEALER_TURN = 'dealer turn'
const PLAYER_WON = 'player won'
const DEALER_WON = 'dealer won'
const TIE = 'tie'

let gameState = YOUR_TURN

const HEARTS = 'hearts'
const SPADES = 'spades'
const DIAMONDS = 'diamonds'
const CLUBS = 'clubs'

const suits = [HEARTS, SPADES, DIAMONDS, CLUBS]

const TWO = 'r02'
const THREE = 'r03'
const FOUR = 'r04'
const FIVE = 'r05'
const SIX = 'r06'
const SEVEN = 'r07'
const EIGHT = 'r08'
const NINE = 'r09'
const TEN = 'r10'
const JACK = 'J'
const QUEEN = 'Q'
const KING = 'K'
const ACE = 'A'

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

let deckOfCards = []
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

// referenced from Jim Clark Repl
function shuffledDeck() {
  let newDeck = deckOfCards.slice()
  deckOfCards = []
  while (newDeck.length) {
    let randomNumber = Math.floor(Math.random() * newDeck.length)
    deckOfCards.push(newDeck.splice(randomNumber, 1)[0])
  }
}
shuffledDeck()

//console.log(playerCards)
playerCards.push(deckOfCards[0])
playerCards.push(deckOfCards[1])

dealerCards.push(deckOfCards[2])
dealerCards.push(deckOfCards[3])

//console.log(dealerCards)
// console.log(playerCards)
// console.log(dealerCards)

// console.log(playerCards[0].rank)

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
  //console.log(cardRank)
  //console.log(rankedValue)
  const indexOfRank = ranks.findIndex(function(rank) {
    return rank === cardRank
  })
  //console.log('findIndex:', indexOfRank)
  return rankedValue[indexOfRank]
}

// console.log(rankToNumber(EIGHT)) //8
// console.log(rankToNumber(JACK)) /// 10

const sumRankToNumber = function(num1, num2) {
  return num1 + num2
}

//console.log(sumRankToNumber(rankToNumber(EIGHT), rankToNumber(JACK)))

const yourScoreValue = function() {
  const playerSum = playerCards.reduce(function(total, card) {
    return total + rankToNumber(card.rank)
  }, 0)
  //console.log(playerCards)
  // console.log(playerSum)

  return playerSum
}

const dealerScoreValue = function() {
  const dealerSum = dealerCards.reduce(function(total, card) {
    return total + rankToNumber(card.rank)
  }, 0)

  return dealerSum
}

//console.log(yourScoreValue())
const cardContainer = document.querySelector('.cards-container')

const render = function() {
  const playerScoreElement = document.querySelector('.player-score')
  const dealerScoreElement = document.querySelector('.dealer-score')
  const winOrLostMessage = document.querySelector('.winner-message')

  playerScoreElement.textContent = `Your score: ${yourScoreValue()}`
  dealerScoreElement.textContent = `Dealer score: ${dealerScoreValue()}`

  if (gameState === DEALER_WON) {
    winOrLostMessage.textContent = `Dealer Wins!!`
  }

  cardContainer.innerHTML = ''

  playerCards.forEach(function(card) {
    const image1 = document.createElement('div')
    image1.setAttribute('class', `card ${card.suit} ${card.rank}`)
    cardContainer.appendChild(image1)
    console.log(cardContainer.innerHTML)
  })

  dealerCards.forEach(function(card) {
    const image2 = document.createElement('div')
    image2.setAttribute('class', `card ${card.suit} ${card.rank}`)
    cardContainer.appendChild(image2)
    console.log(cardContainer.innerHTML)
  })
}
render()

const playerHit = function(event) {
  const dealtCards = playerCards.length + dealerCards.length
  playerCards.push(deckOfCards[dealtCards])

  console.log(dealtCards)
  if (yourScoreValue() > 21) {
    gameState = DEALER_WON
  }

  render()

  console.log(playerCards)
  //console.log(dealerCards)
  console.log(gameState)
}

const hitButton = document.querySelector('.hit')
hitButton.addEventListener('click', playerHit)

// playerCards.push(randomCardSelector(deckOfCards))
// playerCards.push(randomCardSelector(deckOfCards))
// console.log(randomCardSelector(deckOfCards))
// console.log(deckOfCards)

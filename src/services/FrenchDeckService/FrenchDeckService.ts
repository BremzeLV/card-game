import {
  Card, DeckType, Suit,
  SuitsMap, Value, ValuesMap,
} from './FrenchDeckService.types'

class FrenchDeckService {
  /**
   * Takes cards from the deck and returns both ends of the card deck
   */
  static drawDeck(deck: Card[], count: number): {
        head: Card[],
        tail: Card[]
    } | null {
    if (deck.length < count) {
      return null
    }

    return {
      head: deck.slice(0, count),
      tail: deck.slice(count),
    }
  }

  static encodeDeck(deckToBeEncoded: Card[]): string {
    return deckToBeEncoded.map((card) => card.code).toString()
  }


  /**
   * Parses French Deck card codes to card objects
   */
  static parseDeck(deckToBeParsed: string): Card[] {
    const suitMap: SuitsMap = {
      S: 'SPADES',
      C: 'CLUBS',
      D: 'DIAMONDS',
      H: 'HEARTS',
    }
    const valueMap: ValuesMap = {
      J: 'JACK',
      Q: 'QUEEN',
      K: 'KING',
      A: 'ACE',
    }

    const deck = deckToBeParsed.split(',')

    return deck.map((cardCode) => {
      let value = cardCode.slice(0, -1)

      if (valueMap[value]) {
        value = valueMap[value]
      }

      return {
        value,
        suit: suitMap[cardCode.slice(cardCode.length - 1)],
        code: cardCode,
      }
    })
  }

  /**
     * Generates French Deck card codes
     */
  static generateDeck(type: DeckType): string[] {
    const suits: Suit[] = [
      'S', 'C', 'D', 'H',
    ]
    let values: Value[] = [
      '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    ]

    const cardDeck: string[] = []

    if (type === DeckType.SHORT) {
      // only from 7 and up
      values = values.splice(4, 14)
    }

    values.forEach((value) => {
      suits.forEach((suit) => {
        cardDeck.push(value + suit)
      })
    })

    return cardDeck
  }
}

export default FrenchDeckService

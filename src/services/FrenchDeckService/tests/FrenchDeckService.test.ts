import FrenchDeckService from '../FrenchDeckService'
import {DeckType} from '../FrenchDeckService.types'

describe('FrenchDesckService', () => {
  describe('drawDeck', () => {
    it('should drawDeck', () => {
      const deck = [{
        value: '8',
        suit: 'SPADES',
        code: '8S',
      },
      {
        value: '10',
        suit: 'DIAMONDS',
        code: '10D',
      }]
      const expected = {
        head: [{
          value: '8',
          suit: 'SPADES',
          code: '8S',
        }],
        tail: [{
          value: '10',
          suit: 'DIAMONDS',
          code: '10D',
        }],
      }

      expect(FrenchDeckService.drawDeck(deck, 1)).toStrictEqual(expected)
    })

    it('should not drawDeck when too little items in deck', () => {
      const deck = [{
        value: '8',
        suit: 'SPADES',
        code: '8S',
      }, {
        value: '8',
        suit: 'SPADES',
        code: '8S',
      }]
      const expected = null

      expect(FrenchDeckService.drawDeck(deck, 5)).toStrictEqual(expected)
    })
  })

  describe('encodeDeck', () => {
    it('should encode deck', () => {
      const deck = [{
        value: '8',
        suit: 'SPADES',
        code: '8S',
      }, {
        value: 'KING',
        suit: 'DIAMONDS',
        code: 'KD',
      }]
      const expected = '8S,KD'

      expect(FrenchDeckService.encodeDeck(deck)).toStrictEqual(expected)
    })
  })

  describe('parseDeck', () => {
    it('shoould parse deck', () => {
      const deck = '8C,KC,10D'
      const expected = [{
        code: '8C',
        suit: 'CLUBS',
        value: '8',
      }, {
        code: 'KC',
        suit: 'CLUBS',
        value: 'KING',
      }, {
        code: '10D',
        suit: 'DIAMONDS',
        value: '10',
      }]

      expect(FrenchDeckService.parseDeck(deck)).toStrictEqual(expected)
    })
  })

  describe('generateDeck', () => {
    it('should generate short deck', () => {
      const expected = [
        '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C',
        '8D', '8H', '9S', '9C', '9D', '9H', '10S', '10C', '10D', '10H',
        'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC',
        'KD', 'KH', 'AS', 'AC', 'AD', 'AH',
      ]

      expect(FrenchDeckService.generateDeck(DeckType.SHORT)).toStrictEqual(expected)
    })

    it('should generate full deck', () => {
      const expected = [
        '2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D',
        '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C',
        '7D', '7H', '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', '10S',
        '10C', '10D', '10H', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH',
        'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH',
      ]

      expect(FrenchDeckService.generateDeck(DeckType.FULL)).toStrictEqual(expected)
    })
  })
})

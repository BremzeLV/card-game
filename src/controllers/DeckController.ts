import {NextFunction, Request, Response} from 'express'

import ApiError from '../exceptions/ApiErrorException'
import DeckService from '../services/DeckService'

import FrenchDeckService from '../services/FrenchDeckService/FrenchDeckService'

class DeckController {
  async createDeckHandler({body}: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const deckOfCards = FrenchDeckService.generateDeck(body.type)
      const deck = await DeckService.createDeck(deckOfCards, body)

      if (!deck) throw new ApiError('Deck was not created', 400)

      return res.status(201).json({
        deckId: deck.deckId,
        type: deck.type,
        shuffled: deck.shuffled,
        remaining: deck.remaining,
      })
    } catch (error) {
      next(error)
    }
  }

  async openDeck({query: {deckId}}: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const deck = await DeckService.openDeck({deckId})

      if (!deck) throw new ApiError('Deck not found', 404)

      return res.status(200).json({
        deckId: deck.deckId,
        type: deck.type,
        shuffled: deck.shuffled,
        remaining: deck.remaining,
        cards: FrenchDeckService.parseDeck(deck.cards),
      })
    } catch (error) {
      next(error)
    }
  }

  async drawDeck({query: {deckId}, body: {count}}: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const deck = await DeckService.openDeck({deckId})

      if (!deck) throw new ApiError('Deck not found', 404)

      const decodedDeck = FrenchDeckService.parseDeck(deck.cards)
      const drawnDeck = FrenchDeckService.drawDeck(decodedDeck, count)

      if (!drawnDeck) {
        throw new ApiError('Deck has less cards in it than requested', 400)
      }

      const deckUpdated = await DeckService.updateDeck({deckId}, {
        remaining: drawnDeck.tail.length,
        cards: FrenchDeckService.encodeDeck(drawnDeck.tail),
      })

      if (!deckUpdated) {
        throw new ApiError('Deck was not updated', 400)
      }

      return res.status(200).json({
        cards: drawnDeck.head,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default new DeckController()

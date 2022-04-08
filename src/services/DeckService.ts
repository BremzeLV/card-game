import {UpdateQuery, FilterQuery, DocumentDefinition} from 'mongoose'
import {shuffle} from 'lodash'

import Deck, {DeckDocument} from '../models/DeckModel'

class DeckService {
  static async createDeck(
      deckOfCards: string[],
      {type, shuffled}: DocumentDefinition<DeckDocument>,
  ) {
    if (shuffled) {
      deckOfCards = shuffle(deckOfCards)
    }

    return await Deck.create({
      type,
      shuffled,
      remaining: deckOfCards.length,
      cards: deckOfCards.toString(),
    })
  }

  static async openDeck(filter: FilterQuery<DeckDocument>) {
    return await Deck.findOne(filter)
  }

  static async updateDeck(
      filter: FilterQuery<DeckDocument>,
      update: UpdateQuery<DeckDocument>,
  ) {
    return await Deck.findOneAndUpdate(filter, update)
  }
}

export default DeckService

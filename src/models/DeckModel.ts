import mongoose from 'mongoose'
import {v4 as uuid} from 'uuid'

import {DeckType} from '../services/FrenchDeckService/FrenchDeckService.types'

export interface DeckDocument extends mongoose.Document {
    deckId: string,
    type: DeckType,
    shuffled: boolean,
    remaining: number,
    cards: string,
}

const DeckSchema = new mongoose.Schema(
    {
      deckId: {
        type: String,
        required: true,
        unique: true,
        default: () => uuid(),
      },
      type: {
        type: String,
        default: true,
        required: true,
      },
      shuffled: {
        type: Boolean,
        default: true,
        required: true,
      },
      remaining: {
        type: Number,
        default: true,
        required: true,
      },
      cards: {
        type: String,
        default: '',
        required: true,
      },
    },
)

const Deck = mongoose.model<DeckDocument>('Deck', DeckSchema)

export default Deck

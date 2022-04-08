import {boolean, number, object, string, mixed} from 'yup'
import {DeckType} from '../services/FrenchDeckService/FrenchDeckService.types'

const payload = {
  body: object({
    type: mixed<DeckType>().oneOf(Object.values(DeckType)).required('type is not provided'),
    shuffled: boolean().required('shuffled is not provided'),
  }),
}

const query = {
  query: object({
    deckId: string().required('deckId is not provided'),
  }),
}

export const createDeckSchema = object({
  ...payload,
})

export const openDeckSchema = object({
  ...query,
})

export const drawDeckSchema = object({
  ...query,
  body: object({
    count: number().required('count is required'),
  }),
})

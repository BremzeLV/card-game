import {Express} from 'express'

import DeckController from './controllers/DeckController'
import validateRequest from './middleware/validateRequest'

import {createDeckSchema, drawDeckSchema, openDeckSchema} from './schemas/DeckSchema'

export default function(app: Express) {
  app.post('/create-deck', validateRequest(createDeckSchema), DeckController.createDeckHandler)
  app.get('/open-deck', validateRequest(openDeckSchema), DeckController.openDeck)
  app.patch('/draw-deck', validateRequest(drawDeckSchema), DeckController.drawDeck)
}

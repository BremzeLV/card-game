import express from 'express'
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

const app = express()

app.set('host', process.env.HOST)
app.set('port', process.env.PORT)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

export default app

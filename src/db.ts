import mongoose from 'mongoose'

function connect() {
  return mongoose
      .connect(process.env.MONGODB_URL as string)
      .then(() => {
        console.info('Database connected')
      })
      .catch((error) => {
        console.error('Database error', error)
        process.exit(1)
      })
}

export default connect

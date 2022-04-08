import app from './app'
import routes from './routes'
import connect from './db'
import errorHandler from './middleware/errorHandler'

const server = app.listen(app.get('port'), () => {
  console.log(
      'App is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env'),
  )

  connect()

  routes(app)

  app.use(errorHandler)
})

export default server

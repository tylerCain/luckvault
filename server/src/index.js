import express from 'express'
import routes from './routes.js'

const app = express()
  .use(express.json())
  .use('/api', routes)
  .use('/static', express.static('public'))

app.listen(process.env.PORT || 4001, function () {
  console.log('Server listening on port 4001')
})
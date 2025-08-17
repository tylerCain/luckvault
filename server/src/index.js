import express from 'express'
import routes from './routes.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
  .use(express.json())
  .use('/api', routes)
  .use('/static', express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
  })
  

app.listen(process.env.PORT || 4001, function () {
  console.log('Server listening on port 4001')
})
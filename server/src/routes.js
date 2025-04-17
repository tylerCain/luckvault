import { Router } from 'express'
import entries from './controllers/entries/index.js'
import raffles from './controllers/raffles/index.js'

import checkJwt from './middleware/checkJwt.js'
import ensureUser from './middleware/ensureUser.js'
import isAdmin from './middleware/isAdmin.js'

const routes = Router()

routes.get('/raffle', raffles.get)
routes.get('/raffle/:raffleId', raffles.getRaffle)
routes.post('/raffle', raffles.post)

routes.get('/raffle/:raffleId/entries', entries.get)
routes.get('/raffle/:raffleId/entries/user/:userId', entries.getUserEntries)
routes.post('/raffle/:raffleId/entries', entries.post)

export default routes
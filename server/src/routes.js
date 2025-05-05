import { Router } from 'express'
import entries from './controllers/entries/index.js'
import raffles from './controllers/raffles/index.js'
import users from './controllers/users/index.js'

import checkJwt from './middleware/checkJwt.js'
import ensureUser from './middleware/ensureUser.js'
import isAdmin from './middleware/isAdmin.js'

const routes = Router()

routes.delete('/raffle/:raffleId', raffles.delete)
routes.put('/raffle/:raffleId/draw', raffles.draw)
routes.get('/raffle', raffles.get)
routes.get('/raffle/:raffleId', raffles.getRaffle)
routes.post('/raffle', raffles.post)
routes.put('/raffle/:raffleId', raffles.put)

routes.get('/raffle/:raffleId/entries', entries.get)
routes.get('/raffle/:raffleId/entries/user/:userId', entries.getUserEntries)
routes.post('/raffle/:raffleId/entries', entries.post)

routes.get('/users', users.get)
routes.get('/user/:userId/entries', entries.getAllUserEntries)
routes.get('/raffle/:raffleId/winner', users.getWinner)

export default routes
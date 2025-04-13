import { Router } from 'express'
import raffles from './controllers/raffles/index.js'

import checkJwt from './middleware/checkJwt.js'
import ensureUser from './middleware/ensureUser.js'
import isAdmin from './middleware/isAdmin.js'

const routes = Router()

routes.get('/raffle', raffles.get)
routes.get('/raffle/:raffleId', raffles.getRaffle)
routes.post('/raffle', raffles.post)

export default routes
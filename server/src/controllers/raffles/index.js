import withExpress from '../../connectors/withExpress.js'
import createRaffle from './createRaffle.js'
import deleteRaffle from './deleteRaffle.js'
import drawRaffle from './drawRaffle.js'
import getRaffle from './getRaffle.js'
import getRaffles from './getRaffles.js'
import updateRaffle from './updateRaffle.js'

export default {
  delete: withExpress(deleteRaffle),
  draw: withExpress(drawRaffle),
  get: withExpress(getRaffles),
  getRaffle: withExpress(getRaffle),
  post: withExpress(createRaffle),
  put: withExpress(updateRaffle)
}
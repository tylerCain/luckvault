import withExpress from '../../connectors/withExpress.js'
import createRaffle from './createRaffle.js'
import getRaffle from './getRaffle.js'
import getRaffles from './getRaffles.js'

export default {
  get: withExpress(getRaffles),
  getRaffle: withExpress(getRaffle),
  post: withExpress(createRaffle)
}
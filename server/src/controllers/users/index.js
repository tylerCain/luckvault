import withExpress from '../../connectors/withExpress.js'
import getAllUsers from './getAllUsers.js'
import getWinnerInfo from './getWinnerInfo.js'
import syncUser from './syncUser.js'

export default {
  get: withExpress(getAllUsers),
  getWinner: withExpress(getWinnerInfo),
  post: withExpress(syncUser),
}
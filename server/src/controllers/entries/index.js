import withExpress from '../../connectors/withExpress.js'
import getEntries from './getEntries.js'
import getUserEntries from './getEntriesByUser.js'
import createEntries from './createEntry.js'
import getAllUserEntries from './getAllUserEntries.js'

export default {
  get: withExpress(getEntries),
  getUserEntries: withExpress(getUserEntries),
  getAllUserEntries: withExpress(getAllUserEntries),
  post: withExpress(createEntries),
}
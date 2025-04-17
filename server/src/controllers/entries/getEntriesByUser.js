import { getEntriesByUser} from '../../services/entries/index.js'

const controller = async (req) => {
  const { raffleId, userId } = req.params

  const entries = await getEntriesByUser(raffleId, userId)

  return {
    status: 200,
    body: { entries }
  }
}

export default controller
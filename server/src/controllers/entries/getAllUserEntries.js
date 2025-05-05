import { getAllUserEntries } from '../../services/entries/index.js'

const controller = async (req) => {
  const { userId } = req.params

  const entries = await getAllUserEntries(userId)

  return {
    status: 200,
    body: { entries } // ✅ only sending serializable JSON
  }
}

export default controller

import { createEntry } from '../../services/entries/index.js'

const controller = async (req) => {
  const { auth0Id, email, mobile, raffleId, entryCount } = req.body
  const entry = await createEntry(auth0Id, email, mobile, raffleId, entryCount)
  
  return {
    status: entry ? 201 : 500,
    body: { entry }
  }
}

export default controller

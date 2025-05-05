import { deleteRaffle } from '../../services/raffles/index.js'

const controller = async (req) => {
  const { raffleId } = req.params
  const deleted = await deleteRaffle(raffleId)

  return {
    status: deleted ? 200 : 404,
    body: deleted
      ? { message: 'Raffle deleted', raffle: deleted }
      : { error: 'Raffle not found' }
  }
}

export default controller

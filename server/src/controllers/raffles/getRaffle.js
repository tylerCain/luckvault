import { getRaffle } from '../../services/raffles/index.js'

const controller = async (req) => {
  const { raffleId } = req.params
  const raffles = await getRaffle(raffleId)
  
  return {
    status: 200,
    body: { raffles }
  }
}

export default controller

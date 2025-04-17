import { getRaffle } from '../../services/raffles/index.js'

const controller = async (req) => {
  const { raffleId } = req.params
  const raffle = await getRaffle(raffleId)
  
  return {
    status: 200,
    body: { raffle }
  }
}

export default controller

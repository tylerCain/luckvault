import { drawRaffle } from '../../services/raffles/index.js'


const controller = async (req) => {
  const { raffleId } = req.params
  const raffle = await drawRaffle(raffleId)
  
  return {
    status: 200,
    body: { raffle }
  }
}

export default controller

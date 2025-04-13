import { getRaffles } from '../../services/raffles/index.js'

const controller = async (req) => {
  const raffles = await getRaffles()
  
  return {
    status: 200,
    body: { raffles }
  }
}

export default controller

import { createRaffle } from '../../services/raffles/index.js'

const controller = async (req) => {
  const { title, description, imageUrl, ticketPrice, minTicketsPurchase, maxTickets, endsAt, status } = req.body
  const raffle = await createRaffle(title, description, imageUrl, ticketPrice, minTicketsPurchase, maxTickets, endsAt, status)
  
  return {
    status: raffle ? 201 : 500,
    body: { raffle }
  }
}

export default controller

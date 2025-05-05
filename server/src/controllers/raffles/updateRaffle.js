import { updateRaffle } from '../../services/raffles/index.js'

const controller = async (req) => {
  try {
    const { raffleId } = req.params
    const {
      title,
      description,
      imageUrl,
      ticketPrice,
      minTicketsPurchase,
      maxTickets,
      endsAt,
      status
    } = req.body

    const raffle = await updateRaffle(
      raffleId,
      title,
      description,
      imageUrl,
      ticketPrice,
      minTicketsPurchase,
      maxTickets,
      endsAt,
      status
    )

    return {
      status: 200,
      body: { raffle }
    }
  } catch (error) {
    console.error('Failed to update raffle:', error)
    return {
      status: 500,
      body: { error: 'Failed to update raffle' }
    }
  }
}

export default controller

import { pool } from '../../connectors/postgres.js'

const mapRaffle = raffle => ({
  raffleId: raffle.id,
  title: raffle.title,
  description: raffle.description,
  imageUrl: raffle.image_url,
  ticketPrice: raffle.ticket_price,
  minTicketsPurchase: raffle.min_tickets_purchase,
  maxTickets: raffle.max_tickets,
  endsAt: raffle.ends_at,
  status: raffle.status,
})

const getRaffleQuery = `
  SELECT * FROM luckvault.raffles
  WHERE id = $1
`

const getRaffle = async (raffleId) => {
  const getRaffleResult = await pool.query(getRaffleQuery, [raffleId])
  return getRaffleResult.rows.map(mapRaffle)
}

export default getRaffle
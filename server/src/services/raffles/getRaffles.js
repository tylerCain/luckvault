import { pool } from '../../connectors/postgres.js'

const mapRaffles = raffle => ({
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

const getRafflesQuery = `
  SELECT * FROM luckvault.raffles
`

const getRaffles = async () => {
  const getRafflesResult = await pool.query(getRafflesQuery)
  console.log(getRafflesResult)
  return getRafflesResult.rows.map(mapRaffles)
}

export default getRaffles
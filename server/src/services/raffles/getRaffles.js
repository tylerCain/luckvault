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
  ticketsSold: parseInt(raffle.tickets_sold, 10) || 0,
  winner_id: raffle.winner_id,
  winner_nickname: raffle.winner_nickname
})

const getRafflesQuery = `
  SELECT 
    r.*,
    COALESCE(e.tickets_sold, 0) AS tickets_sold
  FROM luckvault.raffles r
  LEFT JOIN (
    SELECT raffle_id, COUNT(*) AS tickets_sold
    FROM luckvault.entries
    GROUP BY raffle_id
  ) e ON r.id = e.raffle_id
`

const getRaffles = async () => {
  const result = await pool.query(getRafflesQuery)
  return result.rows.map(mapRaffle)
}

export default getRaffles

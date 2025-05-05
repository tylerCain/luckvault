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
  winnerId: raffle.winner_id,
  winnerNickname: raffle.winner_nickname
})

const getRaffleQuery = `
  SELECT 
    r.*,
    (
      SELECT COUNT(*) 
      FROM luckvault.entries e 
      WHERE e.raffle_id = r.id
    ) AS tickets_sold
  FROM luckvault.raffles r
  WHERE r.id = $1
`

const getRaffle = async (raffleId) => {
  const getRaffleResult = await pool.query(getRaffleQuery, [raffleId])
  const raffle = getRaffleResult.rows[0] 

  return mapRaffle(raffle)
}

export default getRaffle
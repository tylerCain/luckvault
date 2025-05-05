import { pool } from '../../connectors/postgres.js'

const updateRaffleQuery = `
  UPDATE luckvault.raffles
  SET 
    title = $2,
    description = $3,
    image_url = $4,
    ticket_price = $5,
    min_tickets_purchase = $6,
    max_tickets = $7,
    ends_at = $8,
    status = $9
  WHERE id = $1
  RETURNING *
`

const updateRaffle = async (raffleId, title, description, imageUrl, ticketPrice, minTicketsPurchase, maxTickets, endsAt, status) => {
  const updateRaffleResult = await pool.query(updateRaffleQuery, [raffleId, title, description, imageUrl, ticketPrice, minTicketsPurchase, maxTickets, endsAt, status])
  
  return updateRaffleResult.rowCount === 1
}

export default updateRaffle
import { pool } from '../../connectors/postgres.js'

const createRaffleQuery = `
  INSERT INTO luckvault.raffles 
    (title, description, image_url, ticket_price, min_tickets_purchase, max_tickets, ends_at, status)
  VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *
`

const createRaffle = async (title, description, imageUrl, ticketPrice, minTicketsPurchase, maxTickets, endsAt, status) => {
  const createRaffleResult = await pool.query(createRaffleQuery, [title, description, imageUrl, ticketPrice, minTicketsPurchase, maxTickets, endsAt, status])
  
  return createRaffleResult.rowCount === 1
}

export default createRaffle
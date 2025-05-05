import { pool } from '../../connectors/postgres.js'

const drawWinnerQuery = `
  WITH numbered_entries AS (
    SELECT 
      id AS entry_id,
      user_id,
      ROW_NUMBER() OVER (ORDER BY id) AS ticket_number
    FROM luckvault.entries
    WHERE raffle_id = $1
  )
  SELECT * FROM numbered_entries
  ORDER BY RANDOM()
  LIMIT 1
`

const updateRaffleQuery = `
  UPDATE luckvault.raffles
  SET winner_id = $1,
      winner_nickname = $2,
      status = 'CLOSED'
  WHERE id = $3
  RETURNING *
`

const winnerDetailsQuery = `
  SELECT email, nickname
  FROM luckvault.users
  WHERE auth0_id = $1
`

const drawRaffle = async (raffleId) => {
  const winnerResult = await pool.query(drawWinnerQuery, [raffleId])
  const { user_id: winnerId, ticket_number: ticketNumber } = winnerResult.rows[0] || {}
  if (!winnerId) return null

  const userResult = await pool.query(winnerDetailsQuery, [winnerId])
  const user = userResult.rows[0]

  const updateResult = await pool.query(updateRaffleQuery, [winnerId, user?.nickname, raffleId])

  return {
    raffle: updateResult.rows[0],
    winner: {
      userId: winnerId,
      email: user?.email,
      nickname: user?.nickname,
      ticketNumber
    }
  }
}

export default drawRaffle

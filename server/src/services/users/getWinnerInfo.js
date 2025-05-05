import { pool } from '../../connectors/postgres.js'

const getWinnerIdQuery = `
  SELECT winner_id
  FROM luckvault.raffles
  WHERE id = $1
`

const getWinnerDetailsQuery = `
  SELECT email, mobile, nickname
  FROM luckvault.users
  WHERE auth0_id = $1
`

const getWinnerInfo = async (raffleId) => {
  // Step 1: Get the winner_id from the raffles table
  const raffleResult = await pool.query(getWinnerIdQuery, [raffleId])
  const winnerId = raffleResult.rows[0]?.winner_id

  if (!winnerId) return null

  // Step 2: Get full user details
  const userResult = await pool.query(getWinnerDetailsQuery, [winnerId])
  const winner = userResult.rows[0]

  return winner ? { userId: winnerId, ...winner } : null
}

export default getWinnerInfo

import { pool } from '../../connectors/postgres.js'

const deleteRaffleQuery = `
  DELETE FROM luckvault.raffles
  WHERE id = $1
  RETURNING *
`

const deleteRaffle = async (raffleId) => {
  const result = await pool.query(deleteRaffleQuery, [raffleId])
  return result.rows[0] // return the deleted raffle info (if needed)
}

export default deleteRaffle

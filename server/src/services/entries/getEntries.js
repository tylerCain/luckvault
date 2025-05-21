import { pool } from '../../connectors/postgres.js'

const getEntriesRawQuery = `
  SELECT 
    e.id AS entry_id,
    e.raffle_id,
    e.user_id,
    u.email,
    u.mobile,
    e.purchase_time,
    e.free
  FROM luckvault.entries e
  JOIN luckvault.users u ON u.auth0_id = e.user_id
  WHERE e.raffle_id = $1
  ORDER BY e.purchase_time ASC
`

const getEntries = async (raffleId) => {
  const result = await pool.query(getEntriesRawQuery, [raffleId])
  return result.rows
}

export default getEntries

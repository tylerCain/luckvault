import { pool } from '../../connectors/postgres.js'

const getUserEntriesGroupedQuery = `
  SELECT 
    e.user_id,
    u.email,
    u.mobile,
    COUNT(*) AS tickets,
    MIN(e.purchase_time) AS first_entry,
    MAX(e.purchase_time) AS last_entry
  FROM luckvault.entries e
  JOIN luckvault.users u ON u.auth0_id = e.user_id
  WHERE e.raffle_id = $1 AND e.user_id = $2
  GROUP BY e.user_id, u.email, u.mobile
`

const getEntriesByUser = async (raffleId, userId) => {
  const result = await pool.query(getUserEntriesGroupedQuery, [raffleId, userId])
  return result.rows
}

export default getEntriesByUser

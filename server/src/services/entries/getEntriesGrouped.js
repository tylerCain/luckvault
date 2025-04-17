import { pool } from '../../connectors/postgres.js'

const getEntriesGroupedQuery = `
  SELECT 
    e.user_id,
    u.email,
    u.mobile,
    COUNT(*) AS tickets,
    MIN(e.purchase_time) AS first_entry,
    MAX(e.purchase_time) AS last_entry
  FROM luckvault.entries e
  JOIN luckvault.users u ON u.auth0_id = e.user_id
  WHERE e.raffle_id = $1
  GROUP BY e.user_id, u.email, u.mobile
  ORDER BY tickets DESC
`

const getEntriesGroupedByUser = async (raffleId) => {
  const result = await pool.query(getEntriesGroupedQuery, [raffleId])
  return result.rows
}

export default getEntriesGroupedByUser

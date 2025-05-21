import { pool } from '../../connectors/postgres.js'

const getAllUserEntriesQuery = `
  SELECT 
    e.raffle_id,
    r.title,
    r.ends_at,
    r.status,
    r.winner_id,
    r.winner_nickname,
    e.free,
    COUNT(*) AS tickets,
    MIN(e.purchase_time) AS first_entry,
    MAX(e.purchase_time) AS last_entry
  FROM luckvault.entries e
  JOIN luckvault.raffles r ON r.id = e.raffle_id
  WHERE e.user_id = $1
  GROUP BY e.raffle_id, r.title, r.ends_at, r.status, r.winner_id, r.winner_nickname, e.free
  ORDER BY r.ends_at DESC
`

const getAllUserEntries = async (userId) => {
  const result = await pool.query(getAllUserEntriesQuery, [userId])
  return result.rows
}

export default getAllUserEntries

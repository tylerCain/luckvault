// src/services/users/syncUser.js
import { pool } from '../../connectors/postgres.js'

const syncUserQuery = `
    INSERT INTO luckvault.users (auth0_id, email, mobile, nickname)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (auth0_id) DO NOTHING
  `

const syncUser = async ({ auth0Id, email, mobile, nickname }) => {
  const syncUserResult = await pool.query(syncUserQuery, [auth0Id, email, mobile, nickname])

  return syncUserResult.rowCount === 1
}

export default syncUser

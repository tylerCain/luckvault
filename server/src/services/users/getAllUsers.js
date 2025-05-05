import { pool } from '../../connectors/postgres.js'

const getAllUsersQuery = `
  SELECT 
    id,
    auth0_id,
    email,
    mobile,
    nickname
  FROM luckvault.users
  ORDER BY id ASC
`

const getAllUsers = async () => {
  const result = await pool.query(getAllUsersQuery)
  return result.rows
}

export default getAllUsers

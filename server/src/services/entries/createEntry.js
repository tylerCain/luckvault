import { pool } from '../../connectors/postgres.js'

const insertUserQuery = `
  INSERT INTO luckvault.users (auth0_id, email, mobile)
  VALUES ($1, $2, $3)
  ON CONFLICT (auth0_id) DO UPDATE 
    SET email = EXCLUDED.email,
        mobile = EXCLUDED.mobile
`

const insertEntryQuery = `
  INSERT INTO luckvault.entries (raffle_id, user_id)
  VALUES ($1, $2)
`

const createEntries = async (auth0Id, email, mobile, raffleId, entryCount) => {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    // Upsert user
    await client.query(insertUserQuery, [auth0Id, email, mobile])

    // Loop through entryCount and insert entries
    for (let i = 0; i < entryCount; i++) {
      await client.query(insertEntryQuery, [raffleId, auth0Id])
    }

    await client.query('COMMIT')
    return true
  } catch (err) {
    await client.query('ROLLBACK')
    console.error('createEntries error:', err)
    return false
  } finally {
    client.release()
  }
}

export default createEntries

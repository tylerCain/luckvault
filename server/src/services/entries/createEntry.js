import { pool } from '../../connectors/postgres.js'

const insertUserQuery = `
  INSERT INTO luckvault.users (auth0_id, email, mobile, nickname)
  VALUES ($1, $2, $3, $4)
  ON CONFLICT (auth0_id) DO UPDATE 
    SET email = EXCLUDED.email,
        mobile = EXCLUDED.mobile
`

const insertEntryQuery = `
  INSERT INTO luckvault.entries (raffle_id, user_id, free)
  VALUES ($1, $2, $3)
`

const createEntries = async (auth0Id, email, mobile, nickname, raffleId, entryCount, free) => {
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    // Upsert user
    await client.query(insertUserQuery, [auth0Id, email, mobile, nickname])

    // Loop through entryCount and insert entries
    for (let i = 0; i < entryCount; i++) {
      await client.query(insertEntryQuery, [raffleId, auth0Id, free])
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

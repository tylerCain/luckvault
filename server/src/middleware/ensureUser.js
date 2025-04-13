import { pool } from '../connectors/postgres.js'

const ensureUser = async (req, res, next) => {
  const { sub, email, mobile } = req.auth

  try {
    await pool.query(
      `INSERT INTO users (auth0_id, email, mobile)
       VALUES ($1, $2, $3)
       ON CONFLICT (auth0_id) DO NOTHING`,
      [sub, email, mobile]
    )
    next()
  } catch (err) {
    console.error('Failed to ensure user:', err)
    res.status(500).json({ message: 'Server error ensuring user' })
  }
}

export default ensureUser
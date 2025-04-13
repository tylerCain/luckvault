import { pool } from '../connectors/postgres.js'

const isAdmin = async (req, res, next) => {
  const { sub } = req.auth

  try {
    const result = await pool.query(
      'SELECT admin FROM users WHERE auth0_id = $1',
      [sub]
    )

    const user = result.rows[0]

    if (!user || !user.admin) {
      return res.status(403).json({ message: 'Access denied: Admins only' })
    }

    next()
  } catch (err) {
    console.error('Admin check failed:', err)
    res.status(500).json({ message: 'Server error checking admin status' })
  }
}

export default isAdmin
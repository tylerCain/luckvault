// src/controllers/users/syncUser.js
import { syncUser } from '../../services/users/index.js'

const controller = async (req) => {
  const { auth0Id, email, mobile, nickname } = req.body

  const user = await syncUser({ auth0Id, email, mobile, nickname })

  return {
    status: 200,
    body: { message: 'User synced', user }
  }
}

export default controller

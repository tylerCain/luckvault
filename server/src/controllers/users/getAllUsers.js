import { getAllUsers } from '../../services/users/index.js'

const controller = async (req) => {
  const users = await getAllUsers()
  
  return {
    status: 200,
    body: { users }
  }
}

export default controller

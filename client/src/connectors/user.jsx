import { useQuery } from 'react-query'

const queryAllUsers = async () => {
  const res = await fetch('/api/users')
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export const useAllUsers = () => useQuery(['users'], queryAllUsers)
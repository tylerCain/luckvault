import { useQuery, useMutation } from 'react-query'

/** GET entries (raw or grouped) */
const queryEntries = async ({ queryKey }) => {
  const [, raffleId, options] = queryKey
  const { grouped = false } = options || {}

  const res = await fetch(`/api/raffle/${raffleId}/entries${grouped ? '?grouped=true' : ''}`)

  if (!res.ok) throw new Error('Failed to fetch entries')
  return res.json()
}

const queryUserEntries = async ({ queryKey }) => {
  const [, raffleId, userId] = queryKey

  const res = await fetch(`/api/raffle/${raffleId}/entries/user/${userId}`)

  if (!res.ok) throw new Error('Failed to fetch user entries')
  return res.json()
}

/** POST entries */
const createEntry = async (body) => {
  const { raffleId } = body

  const res = await fetch(`/api/raffle/${raffleId}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  if (!res.ok) throw new Error('Failed to create entry')
  return res.json()
}

export const useEntries = (raffleId, options = {}) => useQuery(['entries', raffleId, options], queryEntries, { enabled: !!raffleId })
export const useUserEntries = (raffleId, userId) => useQuery(['userEntries', raffleId, userId], queryUserEntries, { enabled: !!raffleId && !!userId, select: (data) => data.entries?.[0] || null })

export const useCreateEntry = (body) => useMutation(createEntry, body)

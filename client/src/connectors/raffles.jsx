import { useQuery, useMutation } from 'react-query'

/** GET all raffles */
const queryAllRaffles = async () => {
  const raffles = await fetch('/api/raffle')
  if (!raffles.ok) {
    throw new Error('GET request not ok')
  }
  return raffles.json()
}

/** GET single raffle */
const queryRaffle = async ({ queryKey }) => {
  const [, raffleId] = queryKey
  if (raffleId === '') return undefined

  const raffle = await fetch(`/api/raffle/${raffleId}`)
  if (!raffle.ok) throw new Error('GET request not ok')
  return raffle.json()
}

const queryWinnerInfo = async ({ queryKey }) => {
  const [, raffleId] = queryKey

  const res = await fetch(`/api/raffle/${raffleId}/winner`)
  if (!res.ok) throw new Error('Failed to fetch winner info')
  return res.json()
}

/** POST create raffle */
const createRaffle = async (body) => {
  const response = await fetch(`/api/raffle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

/** DELETE raffle */
const deleteRaffle = async (raffleId) => {
  const response = await fetch(`/api/raffle/${raffleId}`, {
    method: 'DELETE',
  })

  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

/** PUT update raffle */
const updateRaffle = async ({ raffleId, data }) => {
  const response = await fetch(`/api/raffle/${raffleId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) throw new Error('Failed to update raffle')
  return response.json()
}

/** PUT draw raffle */
const drawRaffle = async (raffleId) => {
  const response = await fetch(`/api/raffle/${raffleId}/draw`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) throw new Error('Failed to draw raffle')
  return response.json()
}

export const useRaffles = () => useQuery(['raffles'], queryAllRaffles)
export const useRaffle = (raffleId) => useQuery(['raffle', raffleId], queryRaffle)

export const useWinnerInfo = (raffleId) => 
  useQuery(['winnerInfo', raffleId], queryWinnerInfo, { enabled: !!raffleId })

export const useCreateRaffle = (options) => useMutation(createRaffle, options)
export const useDeleteRaffle = (options) => useMutation(deleteRaffle, options)
export const useUpdateRaffle = (options) => useMutation(updateRaffle, options)
export const useDrawRaffle = (options) => useMutation(drawRaffle, options)

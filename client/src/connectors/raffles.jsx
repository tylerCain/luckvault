import { useMutation, useQuery } from 'react-query'

const queryAllRaffles = async () => {
  const raffles = await fetch('/api/raffle')
  if (!raffles.ok) {
    throw new Error('GET request not ok')
  }
  return raffles.json()
}

const queryRaffle = async ({ queryKey }) => {
  const [, raffleId] = queryKey
  if (raffleId === '') {
    return undefined
  }
  else {
    const raffle = await fetch(`/api/raffle/${raffleId}`)
    if (!raffle.ok) {
      throw new Error('GET request not ok')
    }
    return raffle.json()
  }
}

const createRaffle = async (body) => {
  const response = await fetch(`/api/raffle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useRaffles = () => useQuery(['raffles'], queryAllRaffles)
export const useRaffle = (raffleId) => useQuery(['raffle', raffleId], queryRaffle)

export const useCreateRaffle = (body) => useMutation(createRaffle, body)

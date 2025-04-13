import { useQuery } from 'react-query'

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
    const apiSpecs = await fetch(`/api/raffle/${raffleId}`)
    if (!apiSpecs.ok) {
      throw new Error('GET request not ok')
    }
    return apiSpecs.json()
  }
}

export const useRaffles = () => useQuery(['raffles'], queryAllRaffles)
export const useRaffle = (raffleId) => useQuery(['raffle', raffleId], queryRaffle)

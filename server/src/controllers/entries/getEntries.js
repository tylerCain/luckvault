import { getEntriesGroupedByUser, getEntries } from '../../services/entries/index.js'

const controller = async (req) => {
  const { raffleId } = req.params
  const { grouped } = req.query
  try {
    const data = grouped
      ? await getEntriesGroupedByUser(raffleId)
      : await getEntries(raffleId)

    return {
      status: 200,
      body: { entries: data }
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500,
      body: { error: 'Failed to fetch entries' }
    }
  }
}

export default controller

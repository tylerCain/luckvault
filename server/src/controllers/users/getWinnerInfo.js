import getWinnerInfo from '../../services/users/getWinnerInfo.js'

const controller = async (req) => {
  const { raffleId } = req.params
  const winner = await getWinnerInfo(raffleId)

  return {
    status: winner ? 200 : 404,
    body: { winner }
  }
}

export default controller


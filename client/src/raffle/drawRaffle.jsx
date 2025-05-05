import React from 'react'
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
  Typography,
  CircularProgress
} from '@mui/material'
import { useQueryClient } from 'react-query'
import { useDrawRaffle } from '../connectors/raffles'

const DrawRaffleDialog = ({ open, onClose, raffle }) => {
  const queryClient = useQueryClient()

  const {
    mutate,
    data,
    isLoading,
    isSuccess
  } = useDrawRaffle({
    onSuccess: () => {
      queryClient.invalidateQueries('raffles')
      queryClient.invalidateQueries(['raffle', raffle?.raffleId])
    }
  })

  if (!raffle) return null

  const handleDraw = () => {
    mutate(raffle.raffleId)
  }

  const hasEnded = raffle?.status === 'CLOSED'
  const draw = data?.raffle

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isSuccess ? 'Winner Drawn!' : 'Draw Raffle?'}</DialogTitle>
      <Divider />
      <DialogContent>
        {isLoading ? (
          <Box textAlign="center" py={2}>
            <CircularProgress />
          </Box>
        ) : isSuccess && draw?.winner ? (
          <>
            <Typography variant="h6" fontWeight={600} mb={2}>
              🎉 Ticket #{draw.winner.ticketNumber} is the winner!
            </Typography>
            <Typography variant="body1"><strong>Nickname:</strong> {draw.winner.nickname || 'Unknown'}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {draw.winner.email || 'Unknown'}</Typography>
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              This raffle is now marked as <strong>Closed</strong>.
            </Typography>
          </>
        ) : (
          <DialogContentText>
            Are you sure you want to draw <strong>{raffle?.title}</strong>?
            <br /><br />
            <strong>Warning:</strong> This action cannot be undone.
            <br /><br />
            {!hasEnded && (
              <span style={{ color: '#b00020', fontWeight: 600 }}>
                ⚠️ The raffle has not yet ended based on the deadline.<br />
              </span>
            )}
            {raffle?.ticketsSold < raffle?.maxTickets && (
              <span style={{ color: '#b00020', fontWeight: 600 }}>
                ⚠️ Not all tickets have been sold yet.
              </span>
            )}
          </DialogContentText>
        )}
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={onClose} sx={{ textTransform: 'none' }}>
          Close
        </Button>
        {!isSuccess && (
          <Button
            onClick={handleDraw}
            variant="contained"
            color="error"
            sx={{ textTransform: 'none' }}
          >
            Draw Raffle
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default DrawRaffleDialog

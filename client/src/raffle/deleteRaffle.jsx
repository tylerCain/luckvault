import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider
} from '@mui/material'
import { useDeleteRaffle } from '../connectors/raffles'
import { useQueryClient } from 'react-query'

const DeleteRaffleDialog = ({ open, onClose, raffleId, raffleTitle }) => {
  const queryClient = useQueryClient()
  const deleteMutation = useDeleteRaffle()

  const handleDelete = () => {
    console.log(raffleId)
    deleteMutation.mutate(raffleId, {
      onSuccess: () => {
        queryClient.invalidateQueries('raffles')
        onClose()
      },
      onError: (error) => {
        console.error('Delete failed:', error)
      }
    })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Raffle?</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>
          Are you sure you want to permanently delete <strong>{raffleTitle}</strong>?<br /><br />
          <strong>Warning:</strong> This action cannot be undone.
          <br /><br />
          If you'd rather hide this raffle, you can change its status to <strong>DRAFT</strong> instead.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose} sx={{ textTransform: 'none' }}>
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          variant="outlined"
          color="error"
          sx={{ textTransform: 'none' }}
          disabled={deleteMutation.isLoading}
        >
          Delete Raffle
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteRaffleDialog

import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material'

const DeleteRaffleDialog = ({ open, onClose, onConfirm, raffleTitle }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Raffle?</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to permanently delete <strong>{raffleTitle}</strong>?<br /><br />
          <strong>Warning:</strong> This action cannot be undone.
          <br /><br />
          If you'd rather hide this raffle, you can change its status to <strong>DRAFT</strong> instead.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} sx={{ textTransform: 'none' }}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          sx={{ textTransform: 'none' }}
        >
          Delete Raffle
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteRaffleDialog

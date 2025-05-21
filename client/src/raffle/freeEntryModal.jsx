import React, { useState, useEffect } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, MenuItem, Select, FormControl, InputLabel, CircularProgress, Typography
} from '@mui/material'
import { useAllUsers } from '../connectors/user'
import { useCreateEntry } from '../connectors/entries'

const FreeEntryModal = ({ open, onClose, raffleId }) => {
  const { data, isLoading } = useAllUsers()
  const [selectedUser, setSelectedUser] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useCreateEntry({
    onSuccess: () => {
      onClose()
      setSelectedUser('')
      setErrorMessage('')
    },
    onError: (error) => {
      setErrorMessage('User already has a free entry for this raffle.')
    }
  })

  const handleSubmit = () => {
    const user = data?.users.find(u => u.auth0_id === selectedUser)
    mutation.mutate({
      raffleId,
      auth0Id: selectedUser,
      entryCount: 1,
      email: user?.email,
      mobile: user?.mobile || '',
      free: true
    })
  }

  useEffect(() => {
    if (!open) {
      setSelectedUser('')
      setErrorMessage('')
    }
  }, [open])

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Assign Free Entry</DialogTitle>
      <DialogContent dividers>
        {isLoading ? <CircularProgress /> : (
          <>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>User</InputLabel>
              <Select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                label="User"
              >
                {data?.users.map((user) => (
                  <MenuItem key={user.auth0_id} value={user.auth0_id}>
                    {user.email}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errorMessage && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errorMessage}
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={!selectedUser || mutation.isLoading}>
          {mutation.isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FreeEntryModal

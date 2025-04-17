import React, { useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

// 👇 helper to cleanly format datetime-local input
const formatDateForInput = (isoString) => {
  if (!isoString) return ''
  const date = new Date(isoString)
  const pad = (n) => n.toString().padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}

const EditRaffleModal = ({ open, onClose, onSubmit, raffle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control
  } = useForm({
    defaultValues:  raffle
  })

  useEffect(() => {
    if (raffle) {
      reset({
        ...raffle,
        endsAt: formatDateForInput(raffle.endsAt),
        status: raffle.status
      })
    }
  }, [raffle, reset])

  const onFormSubmit = (data) => {
    onSubmit(data)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" disableScrollLock>
      <DialogTitle>Edit Raffle</DialogTitle>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                {...register('title', { required: 'Title is required' })}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={3}
                {...register('description')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                {...register('imageUrl')}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Ticket Price (£)"
                type="number"
                inputProps={{ min: 0 }}
                {...register('ticketPrice', { required: 'Required' })}
                error={!!errors.ticketPrice}
                helperText={errors.ticketPrice?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Min Tickets / Purchase"
                type="number"
                inputProps={{ min: 1 }}
                {...register('minTicketsPurchase', { required: 'Required' })}
                error={!!errors.minTicketsPurchase}
                helperText={errors.minTicketsPurchase?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Max Tickets"
                type="number"
                inputProps={{ min: 1 }}
                {...register('maxTickets', { required: 'Required' })}
                error={!!errors.maxTickets}
                helperText={errors.maxTickets?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Ends At"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                {...register('endsAt', { required: 'Required' })}
                error={!!errors.endsAt}
                helperText={errors.endsAt?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="status"
                control={control}
                rules={{ required: 'Status is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Status"
                    fullWidth
                    error={!!errors.status}
                    helperText={errors.status?.message}
                  >
                    {["DRAFT", "OPEN", "CLOSED"].map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Update Raffle
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default EditRaffleModal

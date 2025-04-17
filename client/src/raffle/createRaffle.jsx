import React from 'react'
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
import { useForm } from 'react-hook-form'
import { useCreateRaffle } from '../connectors/raffles'
import { useQueryClient } from 'react-query'

const statuses = ['DRAFT', 'OPEN', 'CLOSED']

const CreateRaffleModal = ({ open, onClose, onSubmit }) => {
  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const mutation = useCreateRaffle({
    onSuccess: () => {
      console.log('Raffle created successfully')
      queryClient.invalidateQueries('raffles')
      reset()
    }
  })

  const onFormSubmit = (data) => {
    mutation.mutate({
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      ticketPrice: data.ticketPrice,
      minTicketsPurchase: data.minTicketsPurchase,
      maxTickets: data.maxTickets,
      endsAt: data.endsAt,
      status: data.status
    })
    console.log(data)
    reset()
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" disableScrollLock>
      <DialogTitle>Create New Raffle</DialogTitle>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                {...register('title', { required: 'Title is required' })}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                {...register('description')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Image URL"
                fullWidth
                {...register('imageUrl')}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Ticket Price (£)"
                fullWidth
                type="number"
                inputProps={{ min: 0 }}
                {...register('ticketPrice', { required: 'Required', valueAsNumber: true })}
                error={!!errors.ticketPrice}
                helperText={errors.ticketPrice?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Min Tickets / Purchase"
                fullWidth
                type="number"
                inputProps={{ min: 1 }}
                {...register('minTicketsPurchase', { required: 'Required', valueAsNumber: true })}
                error={!!errors.minTicketsPurchase}
                helperText={errors.minTicketsPurchase?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Max Tickets"
                fullWidth
                type="number"
                inputProps={{ min: 1 }}
                {...register('maxTickets', { required: 'Required', valueAsNumber: true })}
                error={!!errors.maxTickets}
                helperText={errors.maxTickets?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Ends At"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                {...register('endsAt', { required: 'Required' })}
                error={!!errors.endsAt}
                helperText={errors.endsAt?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Status"
                fullWidth
                select
                defaultValue="DRAFT"
                {...register('status')}
              >
                {statuses.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Create Raffle
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default CreateRaffleModal
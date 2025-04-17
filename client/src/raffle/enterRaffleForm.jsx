import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert
} from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { useCreateEntry } from '../connectors/entries'
import { useQueryClient } from 'react-query'

const EnterRaffleForm = ({ raffle, onSubmit }) => {
  const { user } = useAuth0()
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      quantity: raffle.minTicketsPurchase || 1,
      mobile: ''
    }
  })

  const quantity = watch('quantity')
  const totalCost = quantity * Number(raffle.ticketPrice)

  const mutation = useCreateEntry({
    onSuccess: () => {
      console.log('Raffle created successfully')
      onSubmit()
      queryClient.invalidateQueries('raffles')
      queryClient.invalidateQueries('raffle')
      queryClient.invalidateQueries('userEntries')
      reset()
    }
  })

  const onFormSubmit = (data) => {
    mutation.mutate({
      auth0Id: user.sub,
      email: user.email,
      mobile: data.mobile,
      raffleId: raffle.raffleId,
      entryCount: data.quantity
    })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onFormSubmit)}
      sx={{
        mt: 3,
        p: 3,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        backgroundColor: '#f9f9f9'
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Enter this Raffle
      </Typography>

      <TextField
        label="Mobile Number"
        fullWidth
        variant="outlined"
        placeholder="07XXXXXXXXX"
        {...register('mobile', {
          required: 'Mobile number is required',
          pattern: {
            value: /^07\d{9}$/,
            message: 'Enter a valid UK mobile number'
          }
        })}
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Number of Tickets"
        type="number"
        fullWidth
        variant="outlined"
        inputProps={{
          min: raffle.minTicketsPurchase,
          max: raffle.maxTickets - raffle.ticketsSold
        }}
        {...register('quantity', {
          required: 'Ticket quantity is required',
          min: {
            value: raffle.minTicketsPurchase,
            message: `Minimum ${raffle.minTicketsPurchase} tickets`
          },
          max: {
            value: raffle.maxTickets - raffle.ticketsSold,
            message: `Maximum ${raffle.maxTickets} tickets`
          }
        })}
        error={!!errors.quantity}
        helperText={errors.quantity?.message}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mb: 2 }}>
        Total: <strong>£{totalCost.toFixed(2)}</strong>
      </Typography>

      <Alert severity="info" sx={{ mb: 2 }}>
        No refunds once tickets are entered.
      </Alert>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >
        Confirm Entry
      </Button>
    </Box>
  )
}

export default EnterRaffleForm

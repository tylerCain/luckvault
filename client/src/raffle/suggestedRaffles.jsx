import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useRaffles } from '../connectors/raffles'
import RaffleCard from './raffleCard'

const SuggestedRaffles = ({ currentRaffleId, limit = 3, title = 'Other raffles you might like' }) => {
  const rafflesResponse = useRaffles()

  if (rafflesResponse.isLoading || !rafflesResponse.data?.raffles) return null

  const otherRaffles = rafflesResponse.data.raffles
    .filter((r) => r.raffleId !== Number(currentRaffleId) && r.status === 'OPEN')
    .slice(0, limit)

  if (!otherRaffles.length) return null

  return (
    <Box mt={4} sx={{ px: { xs: 2, sm: 4 }, mx: { xs: 2, sm: 0 }}}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        {title}
      </Typography>

      <Grid container spacing={2}>
        {otherRaffles.map((raffle) => (
          <Grid item xs={6} sm={4} md={4} key={raffle.raffleId}>
            <RaffleCard raffle={raffle} forceMobileView hideAdmin />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SuggestedRaffles

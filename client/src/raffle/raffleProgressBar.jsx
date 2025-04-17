import React from 'react'
import { Box, Typography, LinearProgress, Chip } from '@mui/material'

const RaffleProgressBar = ({ ticketsSold = 0, maxTickets }) => {
  const progress = (ticketsSold / maxTickets) * 100
  const isNearlySoldOut = progress >= 80

  return (
    <Box sx={{ mt: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {ticketsSold} / {maxTickets} tickets sold
        </Typography>

        {isNearlySoldOut && (
          <Chip
            label="🔥 Tickets Selling Fast"
            size="small"
            sx={{ backgroundColor: '#b00020', color: 'white', fontWeight: 600 }}
          />
        )}
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#46ab49'
          }
        }}
      />
    </Box>
  )
}

export default RaffleProgressBar

import React from 'react'
import { Box, Typography } from '@mui/material'
import { useEntries } from '../connectors/entries'
import useIsAdmin from '../hooks/useIsAdmin'

const RaffleEntrants = ({ raffleId }) => {
  const isAdmin = useIsAdmin()
  const entriesResponse = useEntries(raffleId, { grouped: true })

  if (!isAdmin || !raffleId) return null
  if (entriesResponse.isLoading) return <Typography sx={{ mt: 4 }}>Loading entrants...</Typography>
  if (entriesResponse.isError) return <Typography color="error" sx={{ mt: 4 }}>Failed to load entrants</Typography>
  if (!entriesResponse.data?.entries?.length) return null

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        px: { xs: 2, sm: 4 }, // horizontal padding only
        mx: { xs: 2, sm: 0 }
      }}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom>
        Entrants
      </Typography>

      {entriesResponse.data.entries.map((entry) => (
        <Box
          key={entry.user_id}
          sx={{
            border: '1px solid #ccc',
            borderRadius: 2,
            p: 1,
            bgcolor: '#f8f8f8',
            width: 'fit-content',
            maxWidth: '100%',
            minWidth: '200px',
          }}
        >
          <Typography fontWeight={600}>{entry.email}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {entry.mobile || 'No mobile'} · {entry.tickets} ticket{entry.tickets > 1 ? 's' : ''}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            First entry: {new Date(entry.first_entry).toLocaleString('en-GB')}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            Last entry: {new Date(entry.last_entry).toLocaleString('en-GB')}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default RaffleEntrants

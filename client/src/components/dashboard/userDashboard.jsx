import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useAllUserEntries } from '../../connectors/entries'  // connector you'll need to set up
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Chip,
  Container
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import useIsAdmin from '../../hooks/useIsAdmin'
import UsersTable from './usersTable'

const UserDashboard = () => {
  const { user } = useAuth0()
  const userId = user?.sub
  const isAdmin = useIsAdmin()

  const { data, isLoading, isError } = useAllUserEntries(userId)

  console.log(data)

  if (!userId) return null
  if (isLoading) return <Box textAlign="center" mt={8}><CircularProgress /></Box>
  if (isError) return <Typography color="error" mt={8}>Failed to load entries</Typography>

  const entries = data?.entries || []

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          My Entries
        </Typography>

        {entries.length === 0 ? (
          <Typography>No raffles entered yet.</Typography>
        ) : (
          entries.map((entry) => (
            <Accordion key={entry.raffle_id} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={600}>{entry.title}</Typography>
                  <Chip 
                    label={entry.status === 'CLOSED' ? 'Finished' : 'Ongoing'}
                    color={entry.status === 'CLOSED' ? 'error' : 'success'}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                  {entry.status === 'CLOSED' && entry.winner_id === userId && (
                    <Chip 
                    label="WINNER"
                    color="primary"
                    size="small"
                    sx={{ bgcolor: '#015f44', color: 'white', ml: 2 }}
                    />
                  )}
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                {entry.winner_id === userId ? (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: '#e6f4ea',
                      color: '#015f44',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      🎟️ You WON this raffle!
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600}>
                      We will be in touch shortly for your prize.
                    </Typography>
                    <Typography variant="body2">
                      {entry.tickets} ticket{entry.tickets > 1 ? 's' : ''} entered between{' '}
                      {new Date(entry.first_entry).toLocaleString('en-GB')} and{' '}
                      {new Date(entry.last_entry).toLocaleString('en-GB')}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: '#FF6961',
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      🎟️ You entered this raffle!
                    </Typography>
                    <Typography variant="body2">
                      {entry.tickets} ticket{entry.tickets > 1 ? 's' : ''} entered between{' '}
                      {new Date(entry.first_entry).toLocaleString('en-GB')} and{' '}
                      {new Date(entry.last_entry).toLocaleString('en-GB')}
                    </Typography>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Container>

      {isAdmin && ( 
        <Container maxWidth="md" sx={{ mt: 6}}>
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            All Users
          </Typography>
          <UsersTable />
        </Container>
      )}
    </Box>
  )
}

export default UserDashboard

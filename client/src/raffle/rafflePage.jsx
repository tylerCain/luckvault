import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Avatar, Divider, Box, Typography, Grid, Button, Chip, CardMedia, CircularProgress, Collapse } from '@mui/material'
import { useRaffle } from '../connectors/raffles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import EnterRaffleForm from './enterRaffleForm'
import RaffleProgressBar from './raffleProgressBar'
import { useUserEntries } from '../connectors/entries'
import { useAuth0 } from '@auth0/auth0-react'
import RaffleEntrants from './raffleEntrants'
import SuggestedRaffles from './suggestedRaffles'
import WinnerDetails from './winnerDetails'
import useIsAdmin from '../hooks/useIsAdmin'

const RafflePage = () => {
  const { user } = useAuth0()
  const isAdmin = useIsAdmin()
  const { raffleId } = useParams()
  const raffleResponse = useRaffle(raffleId)
  const entriesResponse = useUserEntries(raffleId, user?.sub)
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef(null)

  console.log('user', user)

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [showForm])

  if (raffleResponse.isLoading) {
    return (
      <Box textAlign="center" mt={8}>
        <CircularProgress />
      </Box>
    )
  }

  if (raffleResponse.isError || !raffleResponse.data?.raffle) {
    return (
      <Box textAlign="center" mt={8}>
        <Typography variant="h6" color="error">
          Raffle not found.
        </Typography>
      </Box>
    )
  }

  const raffle = raffleResponse.data.raffle
  console.log(raffle)
  const hasEnded = raffle.status === 'CLOSED'
  const userEntries = entriesResponse?.data

  console.log('entries', entriesResponse)

  return (
    <>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/raffles')}
        sx={{
          mt: 4,
          color: '#015f44',
          fontWeight: 600,
          textTransform: 'none',
          mx: { xs: 2, md: 26 },
          fontSize: '20px'
        }}
      >
        Back to Raffles
      </Button>

      <Box sx={{ px: { xs: 2, md: 6 }, pt: 4, pb: 8, maxWidth: '1100px', mx: 'auto' }}>
        <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }}>
          {/* Left Side - Image with overlay */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={raffle.imageUrl}
                alt={raffle.title}
                sx={{ width: '100%', height: { xs: 260, md: 360 }, objectFit: 'cover' }}
              />
              <Chip
                label={new Date(raffle.endsAt).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
                sx={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  fontWeight: 600
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={700} color="text.primary">
              {raffle.title}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Typography variant="body2" color="text.secondary">
                {raffle.maxTickets.toLocaleString()} max entries
              </Typography>
              <Typography variant="body2" color="text.secondary">•</Typography>
              <Typography variant="body2" color="text.secondary">
                £{Number(raffle.ticketPrice).toFixed(2)} / ticket
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="h6" fontWeight={700} mb={1}>
                About
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {raffle.description}
              </Typography>
            </Box>

            <RaffleProgressBar
              ticketsSold={raffle.ticketsSold ?? 12}
              maxTickets={raffle.maxTickets}
            />

            {!hasEnded && (
              <>
                {userEntries ? (
                  <Box
                    sx={{
                      mt: 4,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: '#e6f4ea',
                      color: '#015f44',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      🎟️ You’ve entered this raffle!
                    </Typography>
                    <Typography variant="body2">
                      {userEntries.tickets} ticket{userEntries.tickets > 1 ? 's' : ''} entered between{' '}
                      {new Date(userEntries.first_entry).toLocaleString('en-GB')} and{' '}
                      {new Date(userEntries.last_entry).toLocaleString('en-GB')}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      mt: 4,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: '#1c1c1e',
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="subtitle1">
                      You haven’t participated yet
                    </Typography>
                  </Box>
                )}
              </>
            )}

            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 3, py: 1.2 }}
              disabled={hasEnded || !user}
              onClick={() => setShowForm((prev) => !prev)}
            >
              {hasEnded ? 'Raffle Ended' : 'Enter Raffle'}
            </Button>

            {!user && !hasEnded && ( 
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
                You must be signed in to enter the raffle.
              </Typography>
            )}

            <Box ref={formRef} mt={4}>
              <Collapse in={showForm} timeout="auto" unmountOnExit>
                <EnterRaffleForm
                  raffle={raffle}
                  onSubmit={(quantity) => {
                    //console.log(`User entered ${quantity} tickets for Raffle ${raffle.raffleId}`)
                    // You can close the form or show a success state here
                    setShowForm(false)
                  }}
                />
              </Collapse>
            </Box>

            {/* Winner (shown if closed) add conditional to ffirst box to see entries etc*/}
            {hasEnded &&  (
              <>
                {userEntries ? (
                  <Box
                    sx={{
                      mt: 4,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: '#e6f4ea',
                      color: '#015f44',
                      textAlign: 'center'
                    }}
                  >
                    {raffle.winnerId === user.sub ? (
                      <>
                        <Typography variant="subtitle1" fontWeight={600}>
                          🎟️ You WON this raffle!
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={600}>
                          We will be in touch shortly for your prize.
                        </Typography>
                        <Typography variant="body2">
                          {userEntries.tickets} ticket{userEntries.tickets > 1 ? 's' : ''} entered between{' '}
                          {new Date(userEntries.first_entry).toLocaleString('en-GB')} and{' '}
                          {new Date(userEntries.last_entry).toLocaleString('en-GB')}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography variant="subtitle1" fontWeight={600}>
                          🎟️ You entered this raffle!
                        </Typography>
                        <Typography variant="body2">
                          {userEntries.tickets} ticket{userEntries.tickets > 1 ? 's' : ''} entered between{' '}
                          {new Date(userEntries.first_entry).toLocaleString('en-GB')} and{' '}
                          {new Date(userEntries.last_entry).toLocaleString('en-GB')}
                        </Typography>
                      </>
                    )}
                    
                  </Box>
                ) : (
                  <>
                    <Box
                      sx={{
                        mt: 4,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: '#1c1c1e',
                        color: 'white',
                        textAlign: 'center'
                      }}
                    >
                      <Typography variant="subtitle1">
                        You didn’t participate
                      </Typography>
                    </Box>
                  </>
                )}
                <Box mt={4}>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="h6" fontWeight={700}>
                    Winner
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2} mt={1}>
                    <Avatar />
                    <Box>
                      <Typography fontWeight={600}>@{raffle.winnerNickname}</Typography>
                    </Box>
                  </Box>
                  {isAdmin && (
                    <WinnerDetails raffleId={raffle.raffleId} />
                  )}
                </Box>
              </>
            )}
          </Grid>
          
          <Box sx={{ width: '100%' }}>
            <RaffleEntrants raffleId={raffleId} />
          </Box>
          
          <Box sx={{ width: '100%' }}>
            <SuggestedRaffles currentRaffleId={raffleId} limit={6} />
          </Box>

        </Grid>
      </Box>
    </>
  )
}

export default RafflePage

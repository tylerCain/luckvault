import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import { useRaffles } from '../connectors/raffles'
import { useAuth0 } from '@auth0/auth0-react'


const Raffles = () => {
  const rafflesResponse = useRaffles()
  const { user } = useAuth0()

  if (rafflesResponse.isLoading) return <Typography>Loading raffles...</Typography>
  if (rafflesResponse.isError) return <Typography>Error loading raffles</Typography>
  if (!rafflesResponse.isSuccess) return null

  const raffles = rafflesResponse.data.raffles

  const rafflesWithStatus = raffles.map((raffle) => ({
    ...raffle,
    hasEnded: new Date(raffle.endsAt) < new Date()
  }))

  const roles = user?.['https://luckvault.uk/user/roles'] || []
  const isAdmin = roles.includes('admin')

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#015f44', justifySelf: 'center' }}>
        Our Raffles
      </Typography>

      {/*if user is admin, add raffle button*/}

      <Grid container spacing={3}>
        {raffles?.map((raffle) => (
          <Grid item key={raffle.raffleId} xs={12} md={8} mx="auto">
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: 3,
              boxShadow: 2,
              overflow: 'hidden',
              height: 360
            }}
          >
            {/* Text Section (left) */}
            <Box
              sx={{
                flex: 1,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  {raffle.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {raffle.description}
                </Typography>
                
              </Box>
              <Box mt={2}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 2 },
                    mt: 2
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    🎟️ £{Number(raffle.ticketPrice).toFixed(2)} / ticket
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      backgroundColor: raffle.hasEnded ? '#b00020' : '#46ab49',
                      color: 'white',
                      px: 1.2,
                      py: 0.4,
                      borderRadius: '12px',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      textAlign: 'center'
                    }}
                  >
                    {raffle.hasEnded
                      ? 'Raffle Ended'
                      : `Ends ${new Date(raffle.endsAt).toLocaleDateString('en-GB')}`}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 1, backgroundColor: '#46ab49', fontWeight: 600 }}
                >
                  Enter Now
                </Button>
              </Box>
            </Box>
        
            {/* Image Section (right) */}
            <Box sx={{ width: '50%', height: '100%', ml: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <CardMedia
                component="img"
                image={raffle.imageUrl}
                alt={raffle.title}
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Card>
        </Grid>        
        ))}
      </Grid>
    </Box>
  )
}

export default Raffles

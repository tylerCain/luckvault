import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { 
  ConfirmationNumberOutlined, 
  ShoppingCartOutlined, 
  HourglassEmptyOutlined, 
  EmojiEventsOutlined 
} from '@mui/icons-material'

const steps = [
  {
    icon: <ConfirmationNumberOutlined fontSize="inherit" sx={{ color: '#46ab49', fontSize: '4rem' }} />,  // Larger Ticket icon
    title: 'Choose a Raffle',
    description: 'Browse the latest prize draws and pick your favorite.',
  },
  {
    icon: <ShoppingCartOutlined fontSize="inherit" sx={{ color: '#46ab49', fontSize: '4rem' }} />,  // Larger Shopping cart icon
    title: 'Buy Your Ticket',
    description: 'Purchase entries securely for a chance to win.',
  },
  {
    icon: <HourglassEmptyOutlined fontSize="inherit" sx={{ color: '#46ab49', fontSize: '4rem' }} />,  // Larger Hourglass icon
    title: 'Wait for the Draw',
    description: 'Winners are picked at random once the raffle ends.',
  },
  {
    icon: <EmojiEventsOutlined fontSize="inherit" sx={{ color: '#46ab49', fontSize: '4rem' }} />,  // Larger Trophy icon
    title: 'Claim Your Prize',
    description: 'If you win, your prize is yours to enjoy!',
  },
]

const HowItWorks = () => (
  <Box width={0.9} sx={{ px: 4, textAlign: 'center', bgcolor: 'white', color: '#015f44', mx: 'auto', borderRadius: '8px', px: { xs: 4, sm: 4, md: 8, lg: 8} }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#015f44', pt: 4 }}>
      How It Works
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {steps.map((reason, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {reason.icon}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, color: '#015f44' }}>
              {reason.title}
            </Typography>
            <Box sx={{ borderBottom: 3, borderColor: '#46ab49', width: '120px', mx: 'auto', mb: 1 }} />
            <Typography variant="body2" sx={{ mt: 1, color: '#015f44' }}>
              {reason.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default HowItWorks

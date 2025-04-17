import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import {
  VerifiedOutlined,
  LockOutlined,
  BoltOutlined,
  LocalOfferOutlined
} from '@mui/icons-material'

const reasons = [
  {
    icon: <VerifiedOutlined sx={{ color: '#46ab49', fontSize: '4rem' }} />,
    title: 'Trusted & Transparent',
    description: 'Our raffles are fair, verified, and open to everyone. What you see is what you get.',
  },
  {
    icon: <LockOutlined sx={{ color: '#46ab49', fontSize: '4rem' }} />,
    title: 'Secure Payments',
    description: 'We use encrypted payment processing to keep your details safe and secure.',
  },
  {
    icon: <BoltOutlined sx={{ color: '#46ab49', fontSize: '4rem' }} />,
    title: 'Exciting Prizes',
    description: 'From dream holidays to top-tier tech, we offer life-enhancing rewards every week.',
  },
  {
    icon: <LocalOfferOutlined sx={{ color: '#46ab49', fontSize: '4rem' }} />,
    title: 'Affordable Entry',
    description: 'Tickets start low, so anyone has a shot at winning big — even with one entry.',
  },
]

const WhyChooseUs = () => (
  <Box width={0.9} sx={{ px: 4, textAlign: 'center', bgcolor: 'white', color: '#015f44', mx: 'auto', borderRadius: '8px', pt: 4, pb: 6 }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#015f44', mb: 3 }}>
      Why Choose Us?
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {reasons.map((reason, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {reason.icon}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              {reason.title}
            </Typography>
            <Box sx={{ borderBottom: 3, borderColor: '#46ab49', width: '120px', mx: 'auto', mb: 1 }} />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {reason.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default WhyChooseUs
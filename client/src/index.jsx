import React from 'react'
import HomepageCarousel from './components/carousel/homepageCarousel'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import './index.css'
import { useNavigate } from 'react-router-dom'
import HowItWorks from './components/howItWorks'
import RaffleCarousel from './components/carousel/raffleCarousel'
import { useAuth0 } from '@auth0/auth0-react'

const Homepage = () => {
  const navigate = useNavigate()
  const { user } = useAuth0()

  const roles = user?.['https://luckvault.uk/user/roles'] || []

  const navigateLink = (link) => {
    navigate(link)
    window.scrollTo(0, 0)
  }

  const isAdmin = roles.includes('admin')

  return (
      <Box width={1} sx={{ mx: 'auto'}} >
        <HomepageCarousel navigateLink={() => navigateLink('/raffles')}/>
        {/*<Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 3}}>
          <Typography  sx={{color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
            We specialise in transforming and maintaining your outdoor space. Get in touch for a free quote.
          </Typography>
        </Box>*/}
        <HowItWorks />
        <RaffleCarousel />
      </Box>
  )
}

export default Homepage

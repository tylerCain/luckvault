import React from 'react'
import HomepageCarousel from './components/carousel/homepageCarousel'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import './index.css'
import { ImageTextCard } from './components/cards/imageTextCard'
import bike from './bike.jpg'
import holiday from './holiday.jpg'
import ps5 from './ps5.jpg'
import { useNavigate } from 'react-router-dom'
import HowItWorks from './components/howItWorks'

const Homepage = () => {
  const navigate = useNavigate()

  const navigateLink = (link) => {
    navigate(link)
    window.scrollTo(0, 0)
  }

  return (
      <Box width={1} sx={{ mx: 'auto'}} >
        <HomepageCarousel navigateLink={() => navigateLink('/contact')}/>
        {/*<Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 3}}>
          <Typography  sx={{color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
            We specialise in transforming and maintaining your outdoor space. Get in touch for a free quote.
          </Typography>
        </Box>*/}
        <HowItWorks />
        <Box className="feature-cards">
          <Typography variant="h4" sx={{  fontWeight: '700', color: '#015f44', textAlign: 'center', mb: 2 }}>Raffles</Typography>
          <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }} 
            sx={{ mb: 2 }}
          >
            <Grid item xs={2} sm={4} md={3} key={0} className="grid-item">
              <ImageTextCard media={bike} header='Surron Light Bee' />
            </Grid>
            <Grid item xs={2} sm={4} md={3} key={1} className="grid-item">
              <ImageTextCard media={holiday} header='Holiday to Marrakech'/>
            </Grid>
            <Grid item xs={2} sm={4} md={3} key={2} className="grid-item">
              <ImageTextCard media={ps5} header='PS5' />
            </Grid>
            <Grid item xs={2} sm={4} md={3} key={3} className="grid-item">
              <ImageTextCard media={holiday} header='Holiday to Kavos'/>
            </Grid>
            <Button
              align="center"
              size="large"
              sx={{ backgroundColor: '#46ab49', color: 'white', p: 2, textTransform: 'none', mx: 'auto', my: 4, '&:hover': {
                backgroundColor: '#015f44', // Light green color on hover
              }}}
              onClick={() => navigateLink('/raffles')}
            >
              View All Raffles
            </Button>
          </Grid>
        </Box>
      </Box>
  )
}

export default Homepage

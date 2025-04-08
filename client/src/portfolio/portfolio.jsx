import React from 'react'
import ServicesHeader from '../services/servicesHeader'
import { Box, Divider, Typography } from '@mui/material'
import background from '../_content/IMG_3317.webp'
import Gallery from '../components/beforeAfterGallery'

const PortfolioPage = () => {
  return (
    <>
      <ServicesHeader background={background} text="Portfolio & Transformations" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
        Below you can see examples of our expertly crafted work and transformations, showcasing the quality and care we put into every project, and how we can transform YOUR outdoor space.
        </Typography>
      </Box>
      <Box
        width={{ xs: 0.95, md: 0.8 }}
        height={{ xs: 'auto', md: '500px' }}
        sx={{ mx: 'auto', mt: 4 }}
      >
        <Gallery height='500px' showTitle />
      </Box>
      <Divider sx={{ color: '#46ab49', border: '2px solid', mt: 10 }} />
    </>
  )
}

export default PortfolioPage
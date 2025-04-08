import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'
import astroTurfExample1 from '../_content/astro1.webp'
import astroTurfExample2 from '../_content/astro2.webp'

const AstroTurfServices = () => {
  return (
    <>
      <ServicesHeader background={astroTurfExample1} text="Astro Turf Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we offer top-notch Astro Turf installation services, bringing the beauty of a lush green lawn without the maintenance. Based in Doddinghurst, we proudly serve the surrounding areas, delivering exceptional services to Brentwood, Ingatestone, Shenfield, and beyond.
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          Whether you're looking to transform your garden, create a child-friendly play area, or install a low-maintenance lawn, our expert team is here to bring your vision to life.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your Astro Turf project, you’re choosing quality, durability, and a hassle-free solution for your outdoor space:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>High-Quality Turf:</strong> We use premium Astro Turf products that look and feel like real grass, providing a beautiful, natural appearance without the upkeep.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Professional Installation:</strong> Our experienced team ensures your Astro Turf is installed with precision, creating a flawless finish that lasts.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Low Maintenance:</strong> Enjoy a green, vibrant lawn all year round without the need for mowing, watering, or fertilising—perfect for busy homeowners and businesses.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      <Box width={{ xs: '90%', sm: '80%' }} sx={{ mx: 'auto', mt: 6 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 8 }}>
          <Grid item xs={6} sm={6} md={6}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={astroTurfExample1}
                alt="Astro Turf Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={6} sm={6} md={6}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={astroTurfExample2}
                alt="Astro Turf Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ color: '#46ab49', border: '2px solid', mt: 2 }} />
    </>
  )
}

export default AstroTurfServices

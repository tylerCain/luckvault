import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'

// Example image imports for the example section
import fencingHeader from '../_content/fencing2.webp'
import fencingExample1 from '../_content/IMG_3320.webp'
import fencingExample2 from '../_content/fencing1.webp'
import fencingExample3 from '../_content/fencing3.webp'
import fencingExample4 from '../_content/fencing4.webp'
import fencingExample5 from '../_content/gate.webp'
import fencingExample6 from '../_content/fencing6.webp'

const FencingServices = () => {
  return (
    <>
      <ServicesHeader background={fencingHeader} text="Fencing & Gate Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we offer top-notch fencing services to enhance the security, aesthetics, and functionality of your property. Based in Doddinghurst, we proudly serve the surrounding areas, including Brentwood, Ingatestone, Shenfield, and beyond.
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          Whether you need a new fence for privacy, security, or decorative purposes, our skilled team is ready to assist you in selecting and installing the perfect solution.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          We also specialise in the design and installation of high-quality gates to complement your fencing, adding both convenience and security to your property.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your fencing and gate project, you benefit from:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Expert Installation:</strong> Our team has years of experience installing various types of fencing and gates, ensuring high-quality workmanship and a perfect fit for your property.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Custom Solutions:</strong> We offer a range of fencing and gate options to suit your needs, whether it's for security, privacy, or aesthetic purposes. We work with you to choose the best materials and designs.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Comprehensive Service:</strong> From consultation to final installation, we manage every step of the project with care, ensuring a seamless experience and a beautiful result.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      <Box width={{ xs: '90%', sm: '80%' }} sx={{ mx: 'auto', mt: 6 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 8 }}>
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={fencingExample1}
                alt="Fencing Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={fencingExample2}
                alt="Fencing Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={fencingExample3}
                alt="Fencing Example 3"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={fencingExample4}
                alt="Fencing Example 4"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={fencingExample5}
                alt="Fencing Example 5"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={fencingExample6}
                alt="Fencing Example 6"
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

export default FencingServices

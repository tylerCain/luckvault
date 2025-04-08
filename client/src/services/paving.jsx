import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'

// Example image imports for the example section
import pavingHeader from '../_content/IMG_3317.webp'
import pavingExample1 from '../_content/paving1.webp'
import pavingExample2 from '../_content/paving2.webp'
import pavingExample3 from '../_content/paving4.webp'
import pavingExample4 from '../_content/paving3.webp'
import pavingExample5 from '../_content/paving5.webp'
import pavingExample6 from '../_content/paving6.webp'

const PavingServices = () => {
  return (
    <>
      <ServicesHeader background={pavingHeader} text="Paving Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we specialise in transforming outdoor spaces with high-quality paving services. Based in Doddinghurst, we proudly serve the surrounding areas, providing expert services to Brentwood, Ingatestone, Shenfield, and beyond. 
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
        Whether you're looking to enhance your driveway, create an inviting patio, or lay a durable pathway, our skilled team is here to bring your vision to life.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your paving project, you're opting for excellence and reliability:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Expert Craftsmanship:</strong> With years of experience in the industry, our team ensures every paving project is completed to the highest standards. We use only the finest materials, guaranteeing a flawless finish that stands the test of time.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Custom Designs:</strong> Every project is unique. We work closely with you to design a paving solution that complements your home and suits your lifestyle, whether you're seeking traditional elegance or modern flair.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Comprehensive Service:</strong> From initial consultation to final installation, we handle every aspect of your paving project with professionalism and care, ensuring a smooth and stress-free process.
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
                image={pavingExample1}
                alt="Paving Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={pavingExample2}
                alt="Paving Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={pavingExample3}
                alt="Paving Example 3"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={pavingExample4}
                alt="Paving Example 4"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={pavingExample5}
                alt="Paving Example 5"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={pavingExample6}
                alt="Paving Example 6"
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

export default PavingServices

import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'

// Example image imports for the example section
import turfingHeader from '../_content/turfing.webp'
import turfingExample1 from '../_content/turfing1.webp'
import turfingExample2 from '../_content/after1.webp'
import turfingExample3 from '../_content/turfing2.webp'
import turfingExample4 from '../_content/turfing3.webp'
import turfingExample5 from '../_content/turfing4.webp'
import turfingExample6 from '../_content/turfing5.webp'

const TurfingServices = () => {
  return (
    <>
      <ServicesHeader background={turfingHeader} text="Turfing & Lawn Care Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we offer comprehensive turfing and lawn care services to keep your garden lush and healthy. Based in Doddinghurst, we proudly serve the surrounding areas, including Brentwood, Ingatestone, Shenfield, and beyond.
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          Whether you're looking to lay new turf, rejuvenate an existing lawn, or maintain its health throughout the year, our expert team is here to provide exceptional care and results.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your turfing and lawn care needs, you're opting for top-quality services and reliable expertise:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Premium Turf:</strong> We use high-quality turf varieties to ensure a lush and durable lawn. Our turf is selected to thrive in your specific garden conditions, providing a vibrant green space.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Expert Installation:</strong> Our skilled team ensures precise installation of new turf and thorough ground preparation for optimal results and long-lasting beauty.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Ongoing Lawn Care:</strong> We offer comprehensive lawn care services including regular mowing, aeration, fertilisation, and weed control to maintain a healthy and attractive lawn throughout the year.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Personalised Service:</strong> We tailor our services to meet the unique needs of your lawn, ensuring it receives the right care to thrive and enhance the overall look of your garden.
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
                image={turfingExample1}
                alt="Turfing Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={turfingExample2}
                alt="Turfing Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={turfingExample3}
                alt="Turfing Example 3"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={turfingExample4}
                alt="Turfing Example 4"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={turfingExample5}
                alt="Turfing Example 5"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={turfingExample6}
                alt="Turfing Example 6"
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

export default TurfingServices

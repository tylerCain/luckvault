import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'

// Example image imports for the example section
import groundworkExample1 from '../_content/groundworks.webp'
import groundworkExample2 from '../_content/groundworks1.webp'
import groundworkExample3 from '../_content/groundworks2.webp'
import groundworkExample4 from '../_content/groundworks3.webp'

const GroundworksServices = () => {
  return (
    <>
      <ServicesHeader background={groundworkExample4} text="Groundwork Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we specialise in providing comprehensive and reliable groundwork services. Based in Doddinghurst, we proudly serve the surrounding areas, delivering expert solutions to Brentwood, Ingatestone, Shenfield, and beyond.
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          Whether you’re preparing for a new build or enhancing an existing landscape, our skilled team ensures your groundwork is solid and ready for the next phase.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your groundwork services, you benefit from:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Comprehensive Preparation:</strong> We ensure that every site is fully prepared, with accurate excavation, drainage, and foundation work tailored to your project’s specific needs.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Quality Materials and Equipment:</strong> We use only the best materials and modern equipment to guarantee the longevity and stability of your groundwork, setting the stage for a successful build.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Experienced Team:</strong> Our team brings years of experience in construction and landscaping, ensuring that your project is in safe and capable hands.
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
                image={groundworkExample1}
                alt="Groundworks Service Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={groundworkExample2}
                alt="Groundworks Service Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={groundworkExample3}
                alt="Groundworks Service Example 3"
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

export default GroundworksServices

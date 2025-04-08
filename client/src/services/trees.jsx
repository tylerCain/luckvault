import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'

// Example image imports for the example section
import treeExample1 from '../_content/tree2.webp'
import treeExample2 from '../_content/tree1.webp'
import treeExample3 from '../_content/tree3.webp'

const TreeServices = () => {
  return (
    <>
      <ServicesHeader background={treeExample1} text="Tree Shrubbing and Removal Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we provide professional tree care services, including tree shrubbing and removal. Based in Doddinghurst, we are proud to serve the surrounding areas, offering expert services to Brentwood, Ingatestone, Shenfield, and beyond.
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          Whether you need regular tree maintenance, safe removal of hazardous trees, or general shrub care, our experienced team is here to help.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your tree services, you can expect:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Safe and Efficient Removal:</strong> Our team ensures the safe removal of trees, especially those that pose a risk to your property or health, using the latest techniques and equipment.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Expert Pruning and Shrubbing:</strong> Proper pruning and shrubbing can enhance the health and appearance of your trees and shrubs. We provide skilled trimming to maintain their beauty and vitality.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Environmental Considerations:</strong> We take care to minimise the impact on your landscape and the environment, ensuring responsible tree care and removal.
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
                image={treeExample1}
                alt="Tree Service Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={treeExample2}
                alt="Tree Service Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={treeExample3}
                alt="Tree Service Example 3"
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

export default TreeServices

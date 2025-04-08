import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'

import turfing from '../_contentnew/agturfing.webp'
import paving from '../_contentnew/agpaving.webp'
import fencing from '../_contentnew/agfencing.webp'
import astro from '../_contentnew/agastro.webp'

const services = [
  {
    image: turfing,
    title: 'Turfing',
    description: 'Comprehensive care for all your boiler needs, including installation, repair, servicing, and emergency breakdown solutions. Whether installing a new system or maintaining your current one, we ensure your heating is both efficient and reliable.',
  },
  {
    image: paving,
    title: 'Paving',
    description: 'Keep your home warm year-round with our expert central heating services, from full system upgrades to routine maintenance and radiator installations. We also specialise in power flushing to optimize your heating system\'s performance.',
  },
  {
    image: fencing,
    title: 'Fencing',
    description: 'Expert diagnostics to quickly identify and resolve plumbing issues, including gas leaks and water leaks. We ensure your home is safe and all problems are fixed efficiently.',
  },
  {
    image: astro,
    title: 'Astro',
    description: 'No job is too big or small. From bathroom installation to installing hot water cylinders, we handle all aspects of plumbing with the highest level of expertise and care.',
  },
]

const ServicesOverview = () => (
  <Box width={0.9} sx={{ p: 2, textAlign: 'center', bgcolor: 'white', mx: 'auto' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
      Our Services
    </Typography>
    <Box sx={{ borderBottom: 3, borderColor: '#004994', width: '120px', mx: 'auto', mb: 3 }} />
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 1,
                boxShadow: 2,
                maxHeight: '240px', // Ensures images are consistently sized
                objectFit: 'cover',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              {service.title}
            </Typography>
            {/*<Box sx={{ borderBottom: 3, borderColor: 'primary.main', width: '80px', mx: 'auto', mb: 1 }} />
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              {service.description}
            </Typography>*/}
          </Box>
        </Grid>
      ))}
    </Grid>
    <Button
      align="center"
      size="large"
      sx={{ backgroundColor: '#004994', color: 'white', p: 1, textTransform: 'none', mx: 'auto', mt: 3, '&:hover': {
        backgroundColor: '#46ab49', // Light green color on hover
      }}}
    >
      View All Services
    </Button>
  </Box>
)

export default ServicesOverview
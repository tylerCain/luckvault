import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Gallery from './beforeAfterGallery'

const HomepageGallery = ({ navigateLink }) => (
  <>
    <Box width={1} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }}}>
      <Box width={{ xs: 1, md: 0.44 }}  height={{ xs: 'auto', md: '400px' }} sx={{ flexDirection: { xs: 'column', md: 'row' }}}>
        <Box width={{ md: 0.9}} sx={{ px: 3, py: 5, pt: { xs: 0} }}>
          <Typography variant="h3" sx={{ color: '#015f44', fontWeight: 700, fontSize: { xs: '2rem', md: '2rem', lg: '2.5rem' } }}>Our Transformations</Typography>
          <Typography variant="body1" sx={{ color: '#015f44', mt: 2, fontSize: '14px', textTransform: 'none' }}>
          At Read Landscaping, quality and customer satisfaction is at the center of every project we undergo. 
          </Typography>
          <Typography variant="body1" sx={{ color: '#015f44', my: 2, fontSize: '14px', textTransform: 'none' }}>
          Explore the remarkable transformations we've brought to life. Each project is a testament to our commitment to quality and attention to detail. From lush gardens to modern patios, see how we've turned visions into reality, one project at a time.
          </Typography>
          <Button
            align="center"
            size="large"
            sx={{ backgroundColor: '#015f44', color: 'white', p: 1, textTransform: 'none', mx: 'auto', mb: 1, '&:hover': {
              backgroundColor: '#46ab49', // Light green color on hover
            }}}
            onClick={() => navigateLink('/portfolio')}
          >
            View More Transformations
          </Button>
        </Box>
      </Box>
      <Box
        width={{ xs: 1, md: 0.56 }}
        height={{ xs: 'auto', md: '400px' }}
      >
        <Gallery height='400px' maxSlides={2} />
      </Box>
    </Box>

  </>
)

export default HomepageGallery
import React from 'react'
import { Box, Typography } from '@mui/material'

const ServicesHeader = ({ background, text }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '40%',
        height: '350px',
        width: '100%',
      }}
    > 
      <Box width={0.8} sx={{ pl: { xs: 4, sm: 5, md: 15 }, pt: 20 }}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default ServicesHeader

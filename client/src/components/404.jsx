import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        backgroundColor: '#46ab49',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        textAlign: 'center',
        padding: 3,
        color: 'white', // Grey color for text
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        size="large"
        sx={{ backgroundColor: '#015f44', color: 'white', '&:hover': {
                  backgroundColor: '#46ab49'
                }}}
        onClick={() => navigate('/')}
      >
        Go to Homepage
      </Button>
    </Box>
  )
}

export default NotFoundPage
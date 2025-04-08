import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const ImageTextCard = ({ media, header }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100%', // 1:1 aspect ratio
        borderRadius: '32px',
        border: '4px solid #46ab49'
      }}
    >
      <Box
        component="img"
        src={media}
        alt="Example"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem' } }}>
          {header}
        </Typography>
      </Box>
    </Box>
  )
}
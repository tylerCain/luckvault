import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const ClickableImageTextCard = ({ media, header, link='' }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    navigate(link)
    window.scrollTo(0, 0)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100%', // 1:1 aspect ratio
        borderRadius: '32px',
        border: '4px solid #46ab49',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8
        }
      }}
      onClick={handleClick}
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
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          {header}
        </Typography>
      </Box>
    </Box>
  )
}
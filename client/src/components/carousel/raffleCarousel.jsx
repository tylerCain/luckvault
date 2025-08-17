import React from 'react'
import Slider from 'react-slick'
import { Box, CircularProgress, Typography, Button, Card, CardContent, CardMedia } from '@mui/material'
import { NextArrow, PrevArrow } from './carouselArrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'  // Optional custom styling
import { useRaffles } from '../../connectors/raffles'
import { useNavigate } from 'react-router-dom'

const RaffleCarousel = () => {
  const rafflesResponse = useRaffles()
  const navigate = useNavigate()

if (rafflesResponse.isLoading) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <CircularProgress />
    </Box>
  )
}

if (rafflesResponse.isError) {
  // Optionally log the error somewhere
  return null // Don't show error to users for now
}

if (!rafflesResponse.isSuccess) return null


  const raffles = rafflesResponse.data.raffles

  const filtered = {
    Open: raffles.filter((r) => r.status === 'OPEN'),
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Box className="raffle-carousel" width={{ xs: 0.9, sm: 0.8, md: 0.4 }} sx={{ mx: 'auto', my: 4 }}>
      <Typography align="center" variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#015f44' }}>
        Featured Raffles
      </Typography>
      <Slider {...settings}>
        {filtered['Open']?.map((raffle) => (
          <Card
            key={raffle.raffleId}
            sx={{
              position: 'relative',
              height: { xs: 280, sm: 400 },
              backgroundImage: `url(${raffle.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                {raffle.title}
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600, mb: 3 }}>
                {raffle.description}
              </Typography>
              <Button variant="contained" size="large" sx={{ backgroundColor: '#46ab49' }} onClick={() => navigate(`/raffles/${raffle.raffleId}`)}>
                View More Info
              </Button>
              {/*raffle.open ? ( <Button variant="contained" size="large" sx={{ backgroundColor: '#46ab49' }}>
                Enter Now
              </Button> ) : ( <Button variant="contained" size="large" sx={{ backgroundColor: '#46ab49' }}>
                View Winner
              </Button>)*/}
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  )
}

export default RaffleCarousel

import React from 'react'
import Slider from 'react-slick'
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material'
import { NextArrow, PrevArrow } from './carouselArrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'  // Optional custom styling

import bike from '../../bike.jpg'
import holiday from '../../holiday.jpg'
import ps5 from '../../ps5.jpg'

const raffles = [
  {
    title: "Win a Dream Holiday",
    description: "Enter now for a chance to win a 5-star trip to Marrakech.",
    image: holiday, // replace with actual paths
    open: true,
  },
  {
    title: "Win a PS5",
    description: "Get your hands on the newest iPhone for just £1 a ticket.",
    image: ps5,
    open: true,
  },
  {
    title: "Surron Light Bee",
    description: "Life-changing cash up for grabs. Enter before it ends!",
    image: bike,
    open: false,
  },
]

const RaffleCarousel = () => {
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
        {raffles.map((raffle, index) => (
          <Card
            key={index}
            sx={{
              position: 'relative',
              height: 400,
              backgroundImage: `url(${raffle.image})`,
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
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {raffle.title}
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600, mb: 3 }}>
                {raffle.description}
              </Typography>
              {raffle.open ? ( <Button variant="contained" size="large" sx={{ backgroundColor: '#46ab49' }}>
                Enter Now
              </Button> ) : ( <Button variant="contained" size="large" sx={{ backgroundColor: '#46ab49' }}>
                View Winner
              </Button>)
              }
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  )
}

export default RaffleCarousel

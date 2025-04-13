import React from 'react'
import Slider from 'react-slick'
import { Box, Button, Typography } from '@mui/material'
import { NextArrow, PrevArrow } from './carouselArrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
import header from '../../cropped_luckvault.png'

const HomepageCarousel = ({ navigateLink }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }


  return (
    <Box className="carousel-container">
        <Box className="carousel-slide">
          <Box
            className="carousel-image"
            sx={{
              backgroundImage: `url(${header})`,
              height: { xs: '60vh', sm: '60vh', md: '60vh', lg: '60vh' },
            }}
          >
            <Box
              className="headerTypography"
              width={{ xs: '80%', sm: '80%', md: '60%', lg: '60%' }}
              sx={{
                mt: 6,
                mx: 'auto',  // Centers the box horizontally
                display: 'flex', // Ensures the content inside the box is flexed
                flexDirection: 'column', // Stacks the content vertically
                alignItems: 'center', // Centers the content horizontally
                justifyContent: 'center', // Centers the content vertically
                textAlign: 'center', // Centers the text inside the Box
                maxHeight: '100%'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                One Vault, Endless Possibilities
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mt: 6,
                }}
              >
                Your chance to win big, for low
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  mt: 6,
                }}
              >
                Enter raffles for dream holidays, top tier tech, vehicles, cash and more!
              </Typography>
              <Button
                align="center"
                size="large"
                sx={{
                  backgroundColor: '#46ab49',
                  color: 'white',
                  py: 2,
                  px: 4,
                  textTransform: 'none',
                  mx: 'auto',
                  fontSize: '20px',
                  borderRadius: '16px',
                  mt: 6,
                  '&:hover': {
                    backgroundColor: '#015f44', // Light green color on hover
                  },
                }}
                onClick={() => navigateLink('/raffles')}
              >
                ENTER NOW
              </Button>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default HomepageCarousel

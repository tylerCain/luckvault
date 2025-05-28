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
            width={{ xs: '90%', sm: '80%', md: '60%' }}
            sx={{
              mt: 6,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '1.8rem', md: '2.125rem' } // Preserve h4 default on md+
              }}
            >
              One Vault, Endless Possibilities
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 700,
                mt: { xs: 3, md: 6 },
                fontSize: { xs: '1.2rem', md: '1.5rem' }, // h5 default ~1.5rem
              }}
            >
              Your chance to win big, for low
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'white',
                mt: { xs: 3, md: 6 },
                fontSize: { xs: '1rem', md: '1.25rem' }, // h6 default ~1.25rem
              }}
            >
              Enter raffles for dream holidays, top tier tech, vehicles, cash and more!
            </Typography>

            <Button
              size="large"
              sx={{
                backgroundColor: '#46ab49',
                color: 'white',
                py: { xs: 1.25, md: 2 },
                px: { xs: 2.5, md: 4 },
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.25rem' },
                borderRadius: '16px',
                mt: { xs: 4, md: 6 },
                '&:hover': {
                  backgroundColor: '#015f44',
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

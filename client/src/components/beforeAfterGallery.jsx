import React from 'react'
import Slider from 'react-slick'
import { Box, Typography, useMediaQuery } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { NextArrow, PrevArrow } from './carousel/carouselArrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import before1 from '../_content/before1.webp'
import after1 from '../_content/after1.webp'
import before2 from '../_content/before2.webp'
import after2 from '../_content/after2.webp'
import before3 from '../_content/before3.webp'
import after3 from '../_content/turfing.webp'
import before4 from '../_content/before4.webp'
import after4 from '../_content/after4.webp'
import before5 from '../_content/before5.webp'
import after5 from '../_content/after5.webp'
import before6 from '../_content/before6.webp'
import after6 from '../_content/readheader1.webp'
import before7 from '../_content/before7.webp'
import after7 from '../_content/after7.webp'
import before8 from '../_content/before8.webp'
import after8 from '../_content/after8.webp'

const Gallery = ({ height = '50vh', showTitle, maxSlides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const images = [
    { before: before6, after: after6, title: 'Planters, Turfing and Bench' },
    { before: before1, after: after1, title: 'Fencing, Turfing and Patio' },
    { before: before2, after: after2, title: 'Front Patio' },
    { before: before3, after: after3, title: 'Turf & Full Garden' },
    { before: before4, after: after4, title: 'Shed Removal & Fencing' },
    { before: before5, after: after5, title: 'Driveway' },
    { before: before7, after: after7, title: 'Tree & Fencing' },
    { before: before8, after: after8, title: 'Patio' },
  ]

  const imagesToDisplay = maxSlides ? images.slice(0, maxSlides) : images
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider {...settings}>
        {imagesToDisplay.map((img, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile, horizontally on larger screens
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: '100%', // Ensure it takes full height of the slider
            }}
          >
            {showTitle && (
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ color: '#46ab49', mb: 2, fontWeight: 700, zIndex: 2 }}
              >
                {img.title} Transformation
              </Typography>
            )}
            <Box
              sx={{
                width: { xs: '100', sm: '50%' },
                height: isSmallScreen ? '50vh' : height, // Full width and responsive height
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${img.before})`,
                display: { sm: 'inline-block'}
              }}
            />
            <Box
              sx={{
                width: { xs: '100', sm: '50%' },
                height: isSmallScreen ? '50vh' : height, // Full width and responsive height
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${img.after})`,
                display: { sm: 'inline-block'}
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isSmallScreen ? (
                <ArrowDownwardIcon sx={{ fontSize: 100, color: 'white' }} />
              ) : (
                <ArrowForwardIcon sx={{ fontSize: 100, color: 'white' }} />
              )}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Gallery

import React from 'react'
import Slider from 'react-slick'
import { Box, Typography } from '@mui/material'
import { NextArrow, PrevArrow } from './carouselArrows'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'  // Import the CSS file

const predefinedComments = [
  { 
    name: "One client",
    text: "Charlie and the team did an excellent job. We are very happy with the new fence and with their professional and efficient approach. We would not hesitate to use them again and to recommend them.",
  },
  {
    name: "Another client",
    text: "Charlie and his team were so hardworking and punctual. They did an amazing job for me and I would highly recommend them. I was very happy with the work they did and they cleaned up efficiently afterwards. Thankyou Charlie !"
  },
  { 
    name: "Another client",
    text: "Read landscape were extremely professional, courteous, and finished the job without any hiccups along the way. 10/10 from me. Well done lads.",
  },
  {
    name: "Another client",
    text: "Charlie and his team were excellent. Very clean workers and polite and reliable. I would highly recommend Read Landscaping. I was impressed with the work and will be utilising his services in the future."
  },
]

const ReviewCarousel = () => {
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
    <Box className="review-container">
      <Typography align="center" variant="h3" sx={{ color: 'white', fontWeight: 700, mx: 'auto' }}>
        Client Testimonials
      </Typography>
      <Slider {...settings}>
        {predefinedComments.map((comment, index) => (
          <Box key={index} className="comment-slide">
            <Box className="comment-box">
              <Typography gutterBottom variant="h5" sx={{color: '#46ab49', textAlign: 'center', fontWeight: '700' }}>
                {comment.name} said:
              </Typography>
              <Typography variant="body2" sx={{color: '#46ab49', textAlign: 'center' }}>{comment.text}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default ReviewCarousel
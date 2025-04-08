import React from 'react'
import { Box, Grid, Typography, Card, CardMedia, Divider } from '@mui/material'
import ServicesHeader from './servicesHeader'

// Example image imports for the example section
import deckingExample1 from '../_content/decking.webp'
import deckingExample2 from '../_content/decking1.webp'
import deckingExample3 from '../_content/decking3.webp'

const DeckingServices = () => {
  return (
    <>
      <ServicesHeader background={deckingExample1} text="Decking Services by Read Landscaping" />
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 2 }}>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we specialise in creating beautiful and functional decking solutions that elevate your outdoor space. Based in Doddinghurst, we proudly serve the surrounding areas, offering expert services to Brentwood, Ingatestone, Shenfield, and beyond.
        </Typography>
      </Box>
      <Box width={{ xs: 1, md: 0.7 }} sx={{ mx: 'auto' }}>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          Whether you're looking to build a new deck, replace an old one, or enhance your existing outdoor living space, our skilled team is here to bring your vision to life.
        </Typography>
        <Typography sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.5rem', mt: 2 }}>
          When you choose Read Landscaping for your decking project, you're choosing quality, craftsmanship, and a dedication to customer satisfaction:
        </Typography>
        <Box sx={{ color: '#46ab49', textAlign: 'center', fontSize: '1.2rem', px: 4, mt: 2 }}>
          <ul>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Custom Deck Designs:</strong> We work closely with you to design a deck that suits your style and complements your home, whether you're looking for a traditional or contemporary look.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>High-Quality Materials:</strong> We use only the finest materials to ensure your deck is not only beautiful but also durable and long-lasting.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: '1rem' }}>
                <strong>Expert Installation:</strong> Our experienced team ensures that every deck is installed with precision and care, providing a safe and sturdy structure that you can enjoy for years to come.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      <Box width={{ xs: '90%', sm: '80%' }} sx={{ mx: 'auto', mt: 6 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mb: 8 }}>
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={deckingExample1}
                alt="Decking Example 1"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={deckingExample3}
                alt="Decking Example 2"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={deckingExample2}
                alt="Decking Example 3"
                sx={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ color: '#46ab49', border: '2px solid', mt: 2 }} />
    </>
  )
}

export default DeckingServices

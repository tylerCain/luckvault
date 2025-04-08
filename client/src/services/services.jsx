import React from 'react'
import ServicesHeader from './servicesHeader'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { ClickableImageTextCard } from '../components/cards/clickableImageTextCard'

import turfing from '../_content/turfing.webp'
import fencing from '../_content/IMG_3320.webp'
import paving from '../_content/IMG_3317.webp'
import driveway from '../_content/driveway2.webp' 
import decking from '../_content/decking.webp'
import astro from '../_content/astro1.webp'
import tree from '../_content/tree2.webp'
import groundworks from '../_content/groundworks3.webp'

//fencing & gates, paving & driveways, turfing & lawn care, astro, ffootings, tree stuff, decking

const Services = () => {
  return (
    <>
      <ServicesHeader background={paving} text="Our Services"/>
      <Box sx={{ backgroundColor: '#46ab49', mx: 'auto', padding: 3}}>
        <Typography sx={{color: 'white', textAlign: 'center', fontSize: '1.25rem', px: 4 }}>
          At Read Landscaping, we offer a range of services. Below you can see the full list. Click on a service to view more information and examples of work.
        </Typography>
      </Box>
      <Box width={0.8} sx={{ mx: 'auto', mt: 6 }}>
        <Grid
          container 
          spacing={{ xs: 2, md: 3 }} 
          columns={{ xs: 4, sm: 8, md: 12 }} 
          sx={{ mb: 8 }}
        >
          <Grid item xs={2} sm={4} md={3} key={0} className="grid-item">
            <ClickableImageTextCard media={paving} header='Paving' link={'/services/paving'} />
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={1} className="grid-item">
            <ClickableImageTextCard media={turfing} header='Turfing' link={'/services/turfing'}/>
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={2} className="grid-item">
            <ClickableImageTextCard media={fencing} header='Fencing & Gates' link={'/services/fencing'} />
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={3} className="grid-item">
            <ClickableImageTextCard media={driveway} header='Driveways'link={'/services/driveways'}/>
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={0} className="grid-item">
            <ClickableImageTextCard media={decking} header='Decking' link={'/services/decking'} />
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={1} className="grid-item">
            <ClickableImageTextCard media={tree} header='Tree Care' link={'/services/trees'}/>
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={2} className="grid-item">
            <ClickableImageTextCard media={astro} header='Astro Turf' link={'/services/astro'}/>
          </Grid>
          <Grid item xs={2} sm={4} md={3} key={3} className="grid-item">
            <ClickableImageTextCard media={groundworks} header='Groundworks' link={'/services/groundworks'}/>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ color: '#46ab49', border: '2px solid', mt: 2 }} />
    </>
  )
}

export default Services
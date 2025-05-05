import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import './footer.css'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Instagram'

const Footer = () => (
  <Box className="footer-container">
    <Box className="footer-content">
      <Box className="footer-left">
        <Box className="footer-contact-item">
          <EmailIcon className="footer-icon" />
          <Typography variant="body1" className="footer-text">info@theluckvault.co.uk</Typography>
        </Box>
        <Box className="footer-contact-item">
          <PhoneIcon className="footer-icon" />
          <Typography variant="body1" className="footer-text">theluckvaultuk</Typography>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box className="footer-right">
        <Typography variant="body1" className="footer-text">
          &copy; {new Date().getFullYear()} TheLuckVault. All rights reserved.
        </Typography>
        {/* Kaizen Development Link below the copyright text */}
        <Typography variant="body1" className="footer-text">
          Developed and maintained by{' '}
          <Link href="https://www.kaizen-web.dev" target="_blank" className="footer-link" sx={{ color: 'white' }}>
            Kaizen Development
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
)

export default Footer

import React from 'react'
import { Box, Typography, Link, useMediaQuery } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useTheme } from '@mui/material/styles'
import './footer.css'

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className="footer-container" sx={{ py: isMobile ? 2 : 3 }}>
      <Box
        className="footer-content"
        sx={{
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
          gap: isMobile ? 1 : 0
        }}
      >
        {/* Contact Section */}
        <Box className="footer-section">
          <Typography variant="h6" className="footer-text" gutterBottom sx={{ fontWeight: 700 }}>
            Contact
          </Typography>
          <Box className="footer-contact-item">
            <EmailIcon className="footer-icon" />
            <Typography className="footer-text">info@theluckvault.co.uk</Typography>
          </Box>
          <Box className="footer-contact-item">
            <InstagramIcon className="footer-icon" />
            <Typography className="footer-text">@theluckvaultuk</Typography>
          </Box>
        </Box>

        {/* Links Section */}
        <Box className="footer-section">
          <Typography variant="h6" className="footer-text" gutterBottom sx={{ fontWeight: 700 }}>
            Info
          </Typography>
          <Link href="/tos" className="footer-link">Terms of Service</Link>
          <Link href="/faq" className="footer-link">FAQs</Link>
        </Box>

         {/* Developer Section */}
        <Box className="footer-section">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1" className="footer-text" sx={{ mb: 0 }}>
              Built By
            </Typography>
            <Link
              href="https://www.kaizen-web.dev"
              target="_blank"
              className="footer-link"
              sx={{ fontSize: '1rem' }}
            >
              Kaizen Development
            </Link>
          </Box>
          <Typography className="footer-text" sx={{ fontSize: '0.85rem', fontWeight: 500, mt: '12%' }}>
            &copy; {new Date().getFullYear()} TheLuckVault
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer

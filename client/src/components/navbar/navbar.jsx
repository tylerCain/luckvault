import React, { useState } from 'react'
import { AppBar, Box, Button, Toolbar, Menu, MenuItem, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import './navbar.css'  // Import the CSS file
import logo from '../../luckvaultlogo.png'

const pages = [
    { name: 'Home', link: '/home' },
    { name: 'Raffles', link: '/rafffles' },
    { name: 'FAQs', link: '/faq' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = (link) => {
    if (link) navigate(link)
    window.scrollTo(0, 0)
    setAnchorEl(null)
  }

  const navigateLink = (link) => {
    navigate(link)
    window.scrollTo(0, 0)
  }

  return (
    <AppBar className="navbar" position="sticky">
      <Toolbar className="navbar">
        <Button className="navbar-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="The Luck Vault" style={{ height: '64px', maxWidth: '100%' }} />
        </Button>
        <Box className="navbar-links">
          {pages.map(({ name, link }) => (
            <Button
              key={name}
              onClick={() => navigateLink(link)}
              className="navbar-button"
            >
              {name}
            </Button>
          ))}
        </Box>
        <Box sx={{ ml: '70%' }}>
          <Button
            onClick={() => navigate('/login')}
            className="navbar-button"
            sx={{
              padding: { sm: '1px'},
              mx: { sm: '4px' },
              fontWeight: 700,
              color: '#46ab49',
            }}
          >
            Login
          </Button>
        </Box>
        <IconButton 
          edge="end" 
          className="navbar-menu-button"
          onClick={handleMenuOpen} 
        >
          <MenuIcon sx={{ color: '#1c6d19' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleMenuClose(null)}
          disableScrollLock={true}
          sx={{
            '& .MuiPaper-root': {
              position: 'absolute',
              top: '64px', // Adjust based on the height of your AppBar
              right: 0,
              left: 0,
              maxWidth: '25vw', // Ensure the menu does not exceed viewport width
              overflowX: 'hidden', // Hide any horizontal overflow
            }
          }}
        >
          {pages.map(({ name, link }) => (
            <MenuItem key={name} onClick={() => handleMenuClose(link)} sx={{ color: '#46ab49'}}>
              {name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

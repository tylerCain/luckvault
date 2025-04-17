import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Typography,
  Container
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserAvatar from './avatar'
import logo from '../../luckvaultlogo.png'

const pages = [
  { name: 'Home', link: '/' },
  { name: 'Raffles', link: '/raffles' },
  { name: 'FAQs', link: '/faq' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:800px)')

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const navigateLink = (link) => {
    navigate(link)
    window.scrollTo(0, 0)
    setDrawerOpen(false)
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
          {/* Logo */}
          <Button
            onClick={() => navigate('/')}
            sx={{ p: 0, minWidth: 'auto' }}
          >
            <img
              src={logo}
              alt="The Luck Vault"
              style={{ height: '80px', width: 'auto', maxWidth: '180px', objectFit: 'contain' }}
            />
          </Button>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4, alignItems: 'center' }}>
              {pages.map(({ name, link }) => (
                <Button
                  key={name}
                  onClick={() => navigateLink(link)}
                  sx={{ color: '#46ab49', fontWeight: 700, fontSize: '1.25rem', textTransform: 'capitalize' }}
                >
                  {name}
                </Button>
              ))}
            </Box>
          )}

          {/* Auth & Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!isAuthenticated ? (
              <Button
                onClick={() => loginWithRedirect()}
                sx={{ fontWeight: 700, color: '#46ab49', textTransform: 'capitalize', fontSize: '1.25rem' }}
              >
                Login
              </Button>
            ) : (
              <UserAvatar MenuProps={{ disableScrollLock: true }} />
            )}

            {/* Mobile menu */}
            {isMobile && (
              <IconButton edge="end" onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: '#1c6d19' }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for mobile nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        disableScrollLock
        PaperProps={{
          sx: {
            width: 250,
            height: 'auto',
            maxHeight: '90vh',
            mt: '64px',
            overflowY: 'auto',
            borderTop: '1px solid #ccc'
          }
        }}
      >
        <Box role="presentation">
          <List>
            {pages.map(({ name, link }) => (
              <ListItem button key={name} onClick={() => navigateLink(link)}>
                <ListItemText
                  primary={<Typography textAlign="center" sx={{ color: '#46ab49', fontWeight: 600 }}>{name}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar
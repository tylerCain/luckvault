import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#46ab49' // green
    },
    secondary: {
      main: '#015f44' // dark green/teal
    },
    error: {
      main: '#b00020'
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500
        },
        containedPrimary: {
          color: '#ffffff' // white text on contained buttons
        },
        outlinedPrimary: {
          color: '#46ab49',
          backgroundColor: '#ffffff',
          border: '2px solid #46ab49',
          '&:hover': {
            backgroundColor: '#46ab49',
            color: '#ffffff',
            border: '2px solid #46ab49'
          }
        }
      }
    }
  }
})

export default theme

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
          color: '#ffffff' // ✅ white text for primary buttons
        }
      }
    }
  }
})

export default theme
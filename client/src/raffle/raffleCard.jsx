import React from 'react'
import {
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Button
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import useIsAdmin from '../hooks/useIsAdmin'

const RaffleCard = ({ raffle, onEdit, onDelete }) => {
  const isAdmin = useIsAdmin()
  const hasEnded = new Date(raffle.endsAt) < new Date()

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        position: 'relative',
        height: { xs: 360, sm: 300 },
        overflow: 'hidden',
        borderRadius: 3,
        boxShadow: 2,
        backgroundImage: {
          xs: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url(${raffle.imageUrl})`,
          sm: 'none'
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: { xs: 'white', sm: 'inherit' }
      }}
    >
      {/* Admin icon buttons */}
      {isAdmin && (
        <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 10 }}>
          <IconButton onClick={() => onEdit(raffle)} sx={{ color: { xs: 'white', sm: '#015f44' } }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(raffle)} sx={{ color: '#f44336' }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      )}

      {/* Desktop Image Side */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CardMedia
          component="img"
          image={raffle.imageUrl}
          alt={raffle.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Text Content */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 2
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }} noWrap>
            {raffle.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              bgcolor: { xs: 'white', sm: 'transparent' },
              color: { xs: 'black', sm: 'text.secondary' },
              px: 1,
              py: 0.5,
              borderRadius: 1,
              mt: 1,
              display: 'inline-block'
            }}
          >
            {new Date(raffle.endsAt).toLocaleString('en-GB', {
              day: 'short',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, mt: 2 }}
          >
            🎟️ £{Number(raffle.ticketPrice).toFixed(2)} / ticket
          </Typography>

          <Button
            variant="contained"
            size="small"
            sx={{
              mt: 1.5,
              backgroundColor: '#fff',
              color: '#000',
              fontWeight: 700,
              '&:hover': { backgroundColor: '#f0f0f0' }
            }}
            disabled={hasEnded}
          >
            {hasEnded ? 'View Winner' : 'Enter Now'}
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default RaffleCard
import React from 'react'
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Tooltip,
  LinearProgress,
  Chip
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import useIsAdmin from '../hooks/useIsAdmin'
import { useNavigate } from 'react-router-dom'
import RaffleProgressBar from './raffleProgressBar'

const RaffleCard = ({ raffle, onEdit, onDelete }) => {
  const isAdmin = useIsAdmin()
  const navigate = useNavigate()
  const hasEnded = raffle.status === 'CLOSED'

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
              backgroundColor: raffle.hasEnded ? '#b00020' : '#46ab49',
              color: 'white',
              px: 1.2,
              py: 0.4,
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.75rem',
              textAlign: 'center'
            }}
          >
            {new Date(raffle.endsAt).toLocaleString('en-GB', {
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Typography>

          {isAdmin && (
            <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
              <Tooltip title="Edit">
                <IconButton onClick={() => onEdit(raffle)} sx={{ color: '#015f44', backgroundColor: { xs: 'white'} }}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => onDelete(raffle)} sx={{ color: '#b00020', backgroundColor: { xs: 'white'} }}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Box>

        <Box>
          <RaffleProgressBar
            ticketsSold={raffle.ticketsSold ?? 12}
            maxTickets={raffle.maxTickets}
          />
          
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
              fontWeight: 500,
              color: 'white',
            }}
            onClick={() => navigate(`/raffles/${raffle.raffleId}`)}
          >
            {hasEnded ? 'View Winner' : 'Enter Now'}
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default RaffleCard

import React from 'react'
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/WhereToVote'
import useIsAdmin from '../hooks/useIsAdmin'
import { useNavigate } from 'react-router-dom'
import RaffleProgressBar from './raffleProgressBar'

const RaffleCard = ({ raffle, onEdit, onDelete, onDraw, forceMobileView = false, hideAdmin = false }) => {
  const isAdmin = useIsAdmin()
  const navigate = useNavigate()
  const hasEnded = raffle.status === 'CLOSED'

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMobileLayout = forceMobileView || isSmallScreen

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isMobileLayout ? 'column' : 'row',
        position: 'relative',
        height: isMobileLayout ? 240 : 300,
        overflow: 'hidden',
        borderRadius: 3,
        boxShadow: 2,
        backgroundImage: isMobileLayout
          ? `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url(${raffle.imageUrl})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: isMobileLayout ? 'white' : 'inherit'
      }}
    >
      {/* Desktop Image Side */}
      <Box
        sx={{
          display: isMobileLayout ? 'none' : 'flex',
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
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '0.75rem',
                sm: forceMobileView ? '1rem' : '1.25rem'
              },
              overflowWrap: 'break-word', // ensures long words break nicely
              whiteSpace: 'normal' // allows wrapping
            }}
          >
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

          {isAdmin && !hideAdmin && (
            <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
              <Tooltip title="Edit">
                <IconButton onClick={() => onEdit(raffle)} sx={{ color: '#015f44', backgroundColor: isMobileLayout ? 'white' : 'transparent' }}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => onDelete(raffle)} sx={{ color: '#b00020', backgroundColor: isMobileLayout ? 'white' : 'transparent' }}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              {!hasEnded && (
                <Tooltip title="Draw">
                  <IconButton onClick={() => onDraw(raffle)} sx={{ color: '#015f44', backgroundColor: isMobileLayout ? 'white' : 'transparent' }}>
                    <DoneIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          )}
        </Box>

        <Box>
          <RaffleProgressBar
            ticketsSold={raffle.ticketsSold ?? 12}
            maxTickets={raffle.maxTickets}
          />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'row', sm: 'column' }, // Row on mobile, column on desktop
              mt: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mr: { xs: 2, sm: 0 }, // slight spacing on mobile
              }}
            >
              🎟️ £{Number(raffle.ticketPrice).toFixed(2)} / ticket
            </Typography>

            <Button
              variant="outlined"
              size="small"
              sx={{
                fontWeight: 500,
                mt: { xs: 0, sm: 1.5 }, // remove top margin on mobile to align height
                ml: { xs: 'auto', sm: 0 }, // push to right on mobile
              }}
              onClick={() => navigate(`/raffles/${raffle.raffleId}`)}
            >
              {hasEnded ? 'View Winner' : 'Enter Now'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default RaffleCard

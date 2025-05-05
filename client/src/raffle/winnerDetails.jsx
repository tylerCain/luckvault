import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
  Box
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useWinnerInfo } from '../connectors/raffles'
import useIsAdmin from '../hooks/useIsAdmin'

const WinnerDetails = ({ raffleId }) => {
  console.log('raffid', raffleId)
  const isAdmin = useIsAdmin()

  const { data, isLoading, isError } = useWinnerInfo(raffleId, { enabled: isAdmin && !!raffleId })

  if (!isAdmin) return null
  if (isLoading) return <CircularProgress sx={{ mt: 2 }} />
  if (isError || !data?.winner) return null

  const { email, mobile } = data.winner

  return (
    <Accordion sx={{ mt: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography fontWeight={600}>View Winner Contact Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="body2"><strong>Email:</strong> {email || 'N/A'}</Typography>
          <Typography variant="body2"><strong>Mobile:</strong> {mobile || 'N/A'}</Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default WinnerDetails

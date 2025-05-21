import React, { useState } from 'react'
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Grid,
  Button
} from '@mui/material'
import RaffleCard from './raffleCard'
import useIsAdmin from '../hooks/useIsAdmin'
import { useRaffles } from '../connectors/raffles'
import CreateRaffleModal from './createRaffle'
import EditRaffleModal from './updateRaffle'
import DeleteRaffleDialog from './deleteRaffle'
import DrawRaffleDialog from './drawRaffle'
import FreeEntryModal from './freeEntryModal'

const Raffles = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [selectedRaffle, setSelectedRaffle] = useState(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [raffleToDelete, setRaffleToDelete] = useState(null)
  const [drawDialogOpen, setDrawDialogOpen] = useState(null)
  const [raffleToDraw, setRaffleToDraw] = useState(null)
  const [freeEntryOpen, setFreeEntryOpen] = useState(false)
  const [raffleForFreeEntry, setRaffleForFreeEntry] = useState(null)
  const isAdmin = useIsAdmin()
  const rafflesResponse = useRaffles()

  if (rafflesResponse.isLoading) return <Typography>Loading raffles...</Typography>
  if (rafflesResponse.isError) return <Typography>Error loading raffles</Typography>
  if (!rafflesResponse.isSuccess) return null

  const raffles = rafflesResponse.data.raffles

  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  const handleEditClick = (raffle) => {
    setSelectedRaffle(raffle)
    setEditModalOpen(true)
  }

  const handleDeleteClick = (raffle) => {
    setRaffleToDelete(raffle)
    setDeleteDialogOpen(true)
  }

  const handleDrawClick = (raffle) => {
    setRaffleToDraw(raffle)
    setDrawDialogOpen(true)
  }

  const handleFreeEntryClick = (raffle) => {
    setRaffleForFreeEntry(raffle)
    setFreeEntryOpen(true)
  }

  const tabLabels = ['Open', 'Finished']
  if (isAdmin) tabLabels.push('Drafts')

  const filtered = {
    Open: raffles.filter((r) => r.status === 'OPEN'),
    Finished: raffles.filter((r) => r.status === 'CLOSED'),
    Drafts: raffles.filter((r) => r.status === 'DRAFT')
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#015f44', justifySelf: 'center' }}>
        Our Raffles
      </Typography>

      <Box
        width={{ xs: 0.9, sm: 0.6 }}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2,
          mb: 3,
          mx: 'auto'
        }}
      >
        <Tabs value={tabIndex} onChange={handleChange}>
          {tabLabels.map((label, i) => (
            <Tab label={label} key={i} />
          ))}
        </Tabs>

        {isAdmin && (
          <Button
            variant="outlined"
            onClick={(event) => {
              event.stopPropagation()
              setModalOpen(true)
            }}
            sx={{
              fontWeight: 500,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              alignSelf: { xs: 'flex-end', sm: 'center' }
            }}
          >
            Add Raffle
          </Button>
        )}
      </Box>

      <Grid container spacing={3}>
        {filtered[tabLabels[tabIndex]]?.map((raffle) => (
          <Grid item xs={12} md={8} mx="auto" key={raffle.raffleId}>
            <RaffleCard
              raffle={raffle}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onDraw={handleDrawClick}
              onFreeEntry={handleFreeEntryClick}
            />
          </Grid>
        ))}
      </Grid>

      <CreateRaffleModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <EditRaffleModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        raffle={selectedRaffle}
      />

      <DeleteRaffleDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        raffleId={raffleToDelete?.raffleId}
        raffleTitle={raffleToDelete?.title}
      />

      <DrawRaffleDialog 
        open={drawDialogOpen}
        onClose={() => setDrawDialogOpen(false)}
        raffle={raffleToDraw}
      />

      <FreeEntryModal
        open={freeEntryOpen}
        onClose={() => setFreeEntryOpen(false)}
        raffleId={raffleForFreeEntry?.raffleId}
      />

    </Box>
  )
}

export default Raffles

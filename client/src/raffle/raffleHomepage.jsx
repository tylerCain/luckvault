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

const Raffles = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [selectedRaffle, setSelectedRaffle] = useState(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [raffleToDelete, setRaffleToDelete] = useState(null)
  const isAdmin = useIsAdmin()
  const rafflesResponse = useRaffles()

  if (rafflesResponse.isLoading) return <Typography>Loading raffles...</Typography>
  if (rafflesResponse.isError) return <Typography>Error loading raffles</Typography>
  if (!rafflesResponse.isSuccess) return null

  const raffles = rafflesResponse.data.raffles

  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
  }

  const handleCreate = (formData) => {
    console.log('Send to API:', formData)
    // TODO: call your POST raffle endpoint
  }

  const handleEditClick = (raffle) => {
    setSelectedRaffle(raffle)
    setEditModalOpen(true)
  }
  
  const handleRaffleUpdate = (updatedRaffle) => {
    // Call PUT / PATCH request
    console.log('Update raffle:', updatedRaffle)
    setEditModalOpen(false)
  }

  const handleDeleteClick = (raffle) => {
    setRaffleToDelete(raffle)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // Call your delete mutation here
    console.log(`Deleting raffle ID ${raffleToDelete.raffleId}`)
    setDeleteDialogOpen(false)
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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
            variant="contained"
            onClick={(event) => {
              event.stopPropagation()
              setModalOpen(true)
            }}
            sx={{ fontWeight: 500, textTransform: 'none', color: 'white', whiteSpace: 'nowrap' }}
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
          />
        </Grid>
        
      ))}
      </Grid>

      <CreateRaffleModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCreate}
      />

      <EditRaffleModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleRaffleUpdate}
        raffle={selectedRaffle}
      />

      <DeleteRaffleDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        raffleTitle={raffleToDelete?.title}
      />
    </Box>
  )
}

export default Raffles

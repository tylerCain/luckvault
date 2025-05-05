import React, { useState } from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CircularProgress
} from '@mui/material'
import { useAllUsers } from '../../connectors/user'

const UsersTable = () => {
  const { data, isLoading, isError } = useAllUsers()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  if (isLoading) return <CircularProgress sx={{ mt: 4 }} />
  if (isError) return <Typography color="error">Failed to load users</Typography>

  const users = data?.users || []

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Nickname</TableCell>
              <TableCell>Auth0 ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobile || '-'}</TableCell>
                <TableCell>{user.nickname || '-'}</TableCell>
                <TableCell sx={{ fontSize: '12px', color: 'text.secondary' }}>{user.auth0_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={users.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
    </Box>
  )
}

export default UsersTable

import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const UserAvatar = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth0()
  const [anchor, setAnchor] = useState(null)

  const handleClick = (event) => {
    setAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setAnchor(null)
  }

  return (
    <div className="avatarDropdown">
      <Avatar
        id="avatar" 
        sx={{ marginRight: 12, cursor: 'pointer', marginY: 2 }}
        alt={user.nickname}
        src={user.picture}
        onClick={handleClick}
      />
      <Menu 
        id="avatarMenu"
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        disableScrollLock={true}
      >
        <MenuItem onClick={() => navigate('dashboard')} sx={{ paddingX: 4 }}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} sx={{ paddingX: 4 }}>
          Log Out
        </MenuItem>
      </Menu>
    </div>
  )
}

export default UserAvatar
import React from 'react'
//icons
import logo from '@Files/logo.png'
import down from '@Files/down.png'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import { Link } from 'react-router-dom'

export const HeaderMenu = React.memo(({ logOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        //startIcon={<img style={{ width: 26 }} src={logo} alt="" />}
        endIcon={<img style={{ width: 7 }} src={down} alt="" />}
        style={{ textTransform: 'none', color: '#DFE6F0', height: 40 }}
      >
        Мой профиль
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => {
            logOut()
            handleClose()
          }}
        >
          Выйти
        </MenuItem>
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
          <MenuItem onClick={handleClose}>Профиль</MenuItem>
        </Link>
      </Menu>
    </div>
  )
})

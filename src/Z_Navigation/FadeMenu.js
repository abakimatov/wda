import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  menuitem: {
    '&:hover': {
      background: '#5787D1',
    },
  },
  button: {
    width: 80,
    height: 80,
    '& img': {
      width: 32,
      height: 32,
    },
    '& div': {
      fontSize: 11,
    },
  },
  namebutton: { fontSize: 11 },
})
const FadeMenu = ({ style = {}, disabled, name, icon, items }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={style}>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disabled={disabled}
        className={classes.button}
      >
        <img src={icon} alt="" />
        <div>{name}</div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            width: 300,
            background: '#3E6DB6',
          },
        }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {items &&
          items.map((i, index) => {
            return (
              <Link key={index} to={`/${i.link}`} className={classes.link}>
                <MenuItem className={classes.menuitem} onClick={handleClose}>
                  {i.rusName}
                </MenuItem>
              </Link>
            )
          })}
      </Menu>
    </div>
  )
}

export default FadeMenu

const Button = styled.button`
  outline: none;
  border: none;
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  cursor: pointer;
  &:hover {
    background: #3e6db6;
  }
  &:focus {
    background: #3e6db6;
  }
  img {
    width: 36px;
  }
  div {
    margin: 5px 0px;
    font-weight: 600;
    font-size: 14px;
    color: #97adce;
  }
`

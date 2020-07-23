import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import PersonIcon from '@material-ui/icons/Person';

const MenuProfileToDefault = memo(({ logOut, user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let name = user && user.filter(obj => obj.key === 'name');
  let orgName = user && user.filter(obj => obj.key === 'orgName');
  let nameObj = {...name[0]};
  let nameOrg = {...orgName[0]}
    return (
        <>
                <div style={{width:'100%', textAlign:'end'}}>{nameObj && nameObj.value}{nameOrg && nameOrg.value && ` / ${nameOrg.value}`}</div>
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        <PersonIcon style={{color:"#FFF"}}/>
                </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => logOut()}>выйти</MenuItem>
            </Menu>
        </>
    )
});
export const MenuProfile = MenuProfileToDefault;


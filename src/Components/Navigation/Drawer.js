import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link_btn: {
    width: '100%',
    textAlign: 'left',
    textDecoration:'none',
  },
  link_btn_text_box: {
    width:'100%'
  },
  list_derictories: {
    flexDirection:'column'
  }
});

const  Drawer = React.memo(({userInterface, showRegSection}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {showRegSection &&
        <>
          <List>
            <ListItem>
                <Link to='/genregkey' className={classes.link_btn}><Button className={classes.link_btn}><div className={classes.link_btn_text_box}>Приглашение пользователей</div></Button></Link>
            </ListItem>
            {/* <ListItem>
                <Link to='/register_organization' className={classes.link_btn}><Button className={classes.link_btn}><div className={classes.link_btn_text_box}>Регистрация организации</div></Button></Link>
            </ListItem> */}
            <ListItem>
              <Link to ='/invitation' className={classes.link_btn}><Button className={classes.link_btn}><div className={classes.link_btn_text_box}>Пригласить по почте</div></Button></Link>
            </ListItem>
          </List>
          <Divider />
        </>}
      <ListItem>
            <Link to='/' className={classes.link_btn}><Button className={classes.link_btn}><div className={classes.link_btn_text_box}>Профиль</div></Button></Link>
        </ListItem>
      <Divider/>
      <ListItem>
      <Button disabled className={classes.link_btn}>Справочники:</Button>
      </ListItem>
      <ListItem className={classes.list_derictories}>
          {
            userInterface && userInterface.map(item => (
              <Link key={item.id} to={`/${item.link}`} className={classes.link_btn}><Button className={classes.link_btn}><div className={classes.link_btn_text_box}>{item.rusName}</div></Button></Link>
            ))
          }
        </ListItem>
    </div>
  );

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
});

export default Drawer;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//components
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
import { MenuProfile } from "./Menu";
import {
  StatusConnected,
  ActiveConnected,
  OffConnected,
  TitleDiv,
  TitleCenter
} from "./styledComponents";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "flex"
  },
  title_container: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  appbar: {
    background: "#283F78",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
  }
}));

export default function ButtonAppBar({
  isConnected,
  authenticated,
  logOut,
  title,
  userInterface,
  showRegSection,
  user
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          {authenticated && (
            <Drawer
              userInterface={userInterface}
              showRegSection={showRegSection}
            />
          )}
          <div className={classes.title_container}>
            <div variant="h6" className={classes.title}>
              <TitleDiv>WDA |</TitleDiv>
              <StatusConnected>
                {isConnected ? (
                  <div className="w_status_connected">
                    <div>Соединение</div>
                    <div className="indicator"><ActiveConnected /></div>
                  </div>
                ) : (
                  <div className="w_status_connected">
                    <div>Соединение</div>
                    <div className="indicator"><OffConnected /></div>
                  </div>
                )}
              </StatusConnected>
            </div>
          </div>
          <TitleCenter>
            {title}
          </TitleCenter>
          {authenticated ? (
            <MenuProfile logOut={logOut} user={user} />
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button style={{ color: "#fff" }}>ВХОД</Button>
              </Link>
              <Link
                to="/register_organization"
                style={{ textDecoration: "none" }}
              >
                <Button style={{ color: "#fff" }}>Регистрация</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

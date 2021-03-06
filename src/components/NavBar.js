import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LogOut from "./accountForm/logOutButton";
import logo from "../logo.png";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarColor: {
    backgroundColor: "#dfa658",
    background: "#dfa658",
  },
  loginButton: {
    padding: 5,
    textTransform: "uppercase",
    color: "#254a69",
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 50,
    borderRadius: 5,
    border:"white",
  },

  title: {
    flexGrow: 1,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: "50%",
  },
  marginElem: {
    marginRight: 30,
  },
  marginIcons: {
    marginRight: 15,
    color: "black",
  },
  menuIconColor: {
    color: "black",
  },
  welcometext: {
    margin: "5px",
    color: "white",
    fontWeight: 600,
    fontFamily: "Montserrat",
    fontStyle: "italic",
  },

  linkText: {
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "green",
    },
  },
  logOut: {
    fontFamily: "Montserrat",

    padding: 10,
    background: "rgb(2, 48, 32)",
    color: "white",
    borderRadius: "50%",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
let username =   localStorage.getItem("usernameStorage");
 
  const { isLoggedIn, userInfo } =
    useContext(AuthContext);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function twoFunction() {
    handleClose();
  }



  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBarColor}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: 5,
            }}
          >
            <img src={logo} alt="logo" className={classes.logo} />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon className={classes.menuIconColor} />
            </IconButton>
          </div>
        

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link className={classes.linkText} to="/">
              <MenuItem
                style={{ color: "black" }}
                className={classes.menuIt}
                onClick={twoFunction}
              >
                Home
              </MenuItem>
            </Link>
            <Link className={classes.linkText} to="/petsLost">
              {" "}
              <MenuItem
                style={{ color: "black" }}
                className={classes.menuIt}
                onClick={twoFunction}
              >
                Lost Pets
              </MenuItem>
            </Link>
            <Link className={classes.linkText} to="/petsFound">
              <MenuItem
                style={{ color: "black" }}
                className={classes.menuIt}
                onClick={twoFunction}
              >
                Save Lives
              </MenuItem>
            </Link>
            <Link className={classes.linkText} to="/inSave">
              <MenuItem
                style={{ color: "black" }}
                className={classes.menuIt}
                onClick={twoFunction}
              >
                Share Your Stories
              </MenuItem>
            </Link>
            {isLoggedIn && (
              <Link className={classes.linkText} to="/userProfile">
                <MenuItem
                  style={{ color: "orange" }}
                  className={classes.menuIt}
                  onClick={twoFunction}
                >
                  My Profile
                </MenuItem>
              </Link>
            )}
            {isLoggedIn && (
              <Link className={classes.linkText} to="/Form">
                <MenuItem
                  style={{ color: "orange" }}
                  className={classes.menuIt}
                  onClick={twoFunction}
                >
                  Pet registration
                </MenuItem>
              </Link>
            )}
          </Menu>

          {!isLoggedIn ? (
            <Link to="/signUpForm">
              <button className={classes.loginButton}>Sign in/up</button>
            </Link>
          ) : (
            <div style={{ display: "flex", flexDirection: "column",alignItems:"center" }}>
              { userInfo !==undefined && (
                <p className={classes.welcometext}>
                  Welcome <span>{username}</span>
                </p>
              )}  
              <LogOut />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

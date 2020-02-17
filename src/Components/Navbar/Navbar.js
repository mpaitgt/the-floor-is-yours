import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from '@material-ui/core/AppBar';
import { makeStyles, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    flexGrow: 1,
    boxShadow: 'none',
    marginBottom: theme.spacing(8),
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'inherit'
  },
  link: {
    color: "white",
    margin: "0px 20px",
    fontFamily: 'inherit'
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Appbar className={classes.root} position="relative">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button className={classes.link}>
            Home
          </Button>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button className={classes.link}>
              About
            </Button>
        </Link>
        <Link to="/schedule" style={{ textDecoration: 'none' }}>
            <Button className={classes.link}>
              Classes
            </Button>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button className={classes.link}>
              Contact
            </Button>
        </Link>
        <div style={{ float: 'right' }}>
        {/* <Link to="https://www.facebook.com"> */}
            <FacebookIcon className={classes.link} fontSize="large"/>
        {/* </Link> */}
        {/* <Link to="https://www.instgram.com"> */}
            <InstagramIcon className={classes.link} fontSize="large"/>
        {/* </Link> */}
        </div>
      </Toolbar>
    </Appbar>
  )
}

export default Navbar;
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Appbar from '@material-ui/core/AppBar';
import SocialIcons from '../SocialIcons/SocialIcons';
import MenuIcon from '@material-ui/icons/MenuRounded';
import {
  makeStyles, 
  Toolbar, 
  IconButton, 
  Button, 
  Drawer, 
  Container
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    flexGrow: 1,
    boxShadow: 'none',
    marginBottom: theme.spacing(8),
    width: '100%',
    // position: 'sticky'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'inherit'
  },
  link: {
    textDecoration: 'none',
    textAlign: 'center',
    padding: '10px 0px',
    background: "var(--maroon)"
  },
  btn: {
    fontSize: '20px',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    color: "var(--lightblue)",
    margin: theme.spacing(2)
  }
}));

function Navbar() {
  const [menu, setMenu] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (bool) => {
    !menu ? setMenu(bool) : setMenu(bool);
  }

  return (
    <Container>
      <Appbar className={classes.root} position="relative">
        <Toolbar style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton onClick={() => toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Drawer anchor="bottom" open={menu} onClick={() => toggleDrawer(false)}>
            <Link to="/" className={classes.link}>
              <Button className={classes.btn}>
              Home
              </Button>
            </Link>
            <Link to="/about" className={classes.link}>
                <Button className={classes.btn}>
                  About Us
                </Button>
            </Link>
            <Link to="/classes" className={classes.link}>
                <Button className={classes.btn}>
                  Classes
                </Button>
            </Link>
            <Link to="/schedule" className={classes.link} style={{ display: 'none' }}>
                <Button className={classes.btn}>
                  Schedule
                </Button>
            </Link>
            <Link to="/contact" className={classes.link}>
                <Button className={classes.btn}>
                  Contact
                </Button>
            </Link>
          </Drawer>
          <div>
            <SocialIcons flexDirection="row" />
          </div>
        </Toolbar>
      </Appbar>
    </Container>
  )
}

export default Navbar;
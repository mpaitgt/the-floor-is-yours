import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Appbar from '@material-ui/core/AppBar';
import SocialIcons from '../SocialIcons/SocialIcons';
import MenuIcon from '@material-ui/icons/MenuRounded';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Waiver from '../../Images/TFIY_client-waiver.pdf';
import {
  makeStyles, 
  Toolbar, 
  IconButton, 
  Button, 
  Drawer
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'inherit'
  },
  name: {
    display: 'flex',
    flexDirection: 'row'
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
  },
  letter: {
    border: '1px solid white',
    marginLeft: '20px',
    color: 'white',
    padding: '5px 20px'
  }
}));

function LetterButton() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Fragment>
    {
      matches
      ?
      <Fragment>
        <Link to="/covid-letter">
          <Button className={classes.letter}>
            A Letter About Covid-19
          </Button>
        </Link>
        <a href={Waiver}>
          <Button className={classes.letter} target="_blank">
            Client Waiver
          </Button>
        </a>
      </Fragment>
      :
      null
    }
    </Fragment>
  )
}

function LetterNav() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Fragment>
    {
      !matches
      ?
      <Fragment>
        <Link to="/covid-letter" className={classes.link}>
          <Button className={classes.btn}>
            A Letter About Covid-19
          </Button>
        </Link>
        <Link>
          <Button className={classes.btn}>
            Client Waiver
          </Button>
        </Link>
      </Fragment>
      :
      null
    }
    </Fragment>
  )
}



function Navbar() {
  const [menu, setMenu] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (bool) => {
    !menu ? setMenu(bool) : setMenu(bool);
  }

  return (
      <Appbar className={classes.root}>
        <Toolbar style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <IconButton onClick={() => toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <LetterButton />
          </div>

          <Drawer className={classes.name} anchor="bottom" open={menu} onClick={() => toggleDrawer(false)}>
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
            <Link to="/schedule" className={classes.link}>
                <Button className={classes.btn}>
                  Schedule
                </Button>
            </Link>
            <Link to="/contact" className={classes.link}>
                <Button className={classes.btn}>
                  Contact
                </Button>
            </Link>
            <LetterNav />
          </Drawer>
          <div>
            <SocialIcons flexDirection="row" />
          </div>
        </Toolbar>
      </Appbar>
  )
}

export default Navbar;
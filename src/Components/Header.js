import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

let useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Permanent Marker, cursive',
    borderBottom: '1px solid white',
    paddingBottom: '24px',
    marginTop: '0px',
    marginBottom: '1em',
    fontSize: '42px',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px'
    }
  }
}));

export default function Header({ children }) {
  const classes = useStyles();

  return (
    <Typography variant="h1" className={classes.header}>{children}</Typography>
  )
}
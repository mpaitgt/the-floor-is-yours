import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

let useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Permanent Marker, cursive',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: '0 auto',
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
    <Typography variant="h1" align="left" className={classes.header}>{children}</Typography>
  )
}
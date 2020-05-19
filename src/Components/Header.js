import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

let useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Permanent Marker, cursive',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: '0 auto'
  }
}));

export default function Header({ variant, children }) {
  const classes = useStyles();

  return (
    <Typography variant={variant} align="left" className={classes.header}>{children}</Typography>
  )
}
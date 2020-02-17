import React from 'react';
import Typography from '@material-ui/core/Typography';

let style = {
  fontSize: '42px',
  fontFamily: 'Permanent Marker, cursive',
  borderBottom: '1px solid white',
  paddingBottom: '24px',
  marginTop: '0px',
  marginBottom: '1em'

}

export default function Header({ children }) {
  return (
    <Typography variant="h1" style={style}>{children}</Typography>
  )
}
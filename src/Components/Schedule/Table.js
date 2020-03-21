import React from 'react';
import {TableContainer, Table, TableBody, TableHead, TableRow, TableCell, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    borderRadius: '5px',
    background: '#ffffff1f',
    overflow: 'none'
  },
  tablehead: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white'
  },
  tablecell: {
    fontSize: '18px',
    color: 'white',
  }
});


function ScheduleTable({ classItems }) {
  const classes = useStyles();

  const listOfClasses = classItems.map(item => {
    return (
      <TableRow>
        <TableCell className={classes.tablecell}>{item.class_type}</TableCell>
        <TableCell className={classes.tablecell}>{item.class_time}</TableCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablehead} align="left">Class</TableCell>
            <TableCell className={classes.tablehead} align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfClasses}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScheduleTable;
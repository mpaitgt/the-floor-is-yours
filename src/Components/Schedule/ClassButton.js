import React from 'react';
import {Button} from '@material-ui/core';

export default function ClassButton({ classItem }) {
  return (
    <div>
      <h1 style={{ color: 'red' }}>
        {classItem}
      </h1>
    </div>
  )
}
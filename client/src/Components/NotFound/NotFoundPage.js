import React from 'react';
import {Typography} from '@material-ui/core';

function NotFoundPage() {
  return (
    <div>
      <Typography variant="h2">
        Oops - something went wrong!
      </Typography>
      <Typography variant="body1">
        We couldn't find the page you're looking for.
      </Typography>
    </div>
  )
}

export default NotFoundPage;
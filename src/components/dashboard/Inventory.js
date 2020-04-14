import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Inventory() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total N95 Inventory</Title>
      <Typography component="p" variant="h4">
        3,024 Masks
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 4/5 10:00 AM EST
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View statistics
        </Link>
      </div>
    </React.Fragment>
  );
}
//COMPONENT FOR VIEWING INDIVIDUAL EMAILS

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';
import Container from '@material-ui/core/Container';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Inventory(props) {
  const classes = useStyles();
  const id = props.match.params.id
  return (
    <React.Fragment>

        {/* Hero unit */}
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Subject
            </Typography>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
            PPE Type: _____ | PPE Quantity: _____
            </Typography>
            <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom>
            Email {id}
            </Typography>
            <Typography color="textSecondary" variant="subtitle1" align='center'>
                From: Johhny Lee | as of 4/5 10:00 AM EST
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" component="p">
            BODY: Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" component="p">
            <Link color="primary" href="#" onClick={preventDefault}>
                Back to All
            </Link>
            </Typography>
        </Container>
        {/* <Container maxWidth="sm" component="main" className={classes.heroContent}> */}
            {/* <Title>Email {id}</Title>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                Quickly build an effective pricing table for your potential customers with this layout.
                It&apos;s built with default Material-UI components with little customization.
            </Typography>
            <Typography component="p" variant="h4">
                Want to Donate N95 PPE
            </Typography>
            <Typography color="textSecondary" variant="subtitle1" className={classes.depositContext}>
                From: Johhny Lee | as of 4/5 10:00 AM EST
            </Typography>
            <Typography component="p" variant="body1">
                Lorem Ipsum 995 masks
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                Back to All
                </Link>
            </div> */}
        {/* </Container> */}
    </React.Fragment>
  );
}
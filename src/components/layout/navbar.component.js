import React from 'react';
import { makeStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import SignedInLinks from './SignedInLinks.component'
import SignedOutLinks from './SignedOutLinks.component'

//Implement SignedInLinks and SignedOutLinks switch

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
}));


export default function Navbar() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        HoPE 😷😷
                    </Typography>
                    <SignedInLinks />
                    <SignedOutLinks />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
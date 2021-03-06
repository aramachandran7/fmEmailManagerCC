import React from 'react';
import { makeStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Link as RLink } from 'react-router-dom'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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

export default function SignedInLinks() {
    const classes = useStyles()
    return (
        <React.Fragment>
        <nav>
            <RLink to='/'>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                    Data Dashboard
                </Link>
            </RLink>
            <RLink to='/emails'>
                <Link variant="button" color="textPrimary" href="/emails" className={classes.link}>
                    Manage Emails
                </Link>
            </RLink>
            <RLink to='/emails_confirmed/'>
                <Link variant="button" color="textPrimary" href="/emails/confirmed" className={classes.link}>
                    Confirmed Donations
                </Link>
            </RLink>
        </nav>
        {/* TODO: THIS NEEDS TO ROUTE OUT OF AUTH W/ API CALL  */}
        <RLink to='/'>
            <Button color="primary" variant="outlined" className={classes.link}>
                <AccountBoxIcon />
                Logout 
            </Button>
        </RLink>
        
    </React.Fragment>
    )
}
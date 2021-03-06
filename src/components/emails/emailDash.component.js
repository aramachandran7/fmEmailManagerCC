import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

import { setStatus, getEmails } from "../../store/actions/emailActions"
import { setEmailListener, removeEmailListener } from "../../store/actions/listenerActions"
import { parseEmailsCall } from "../../store/actions/parseActions"
import { POTENTIAL, CONFIRMED, REJECTED } from "../../store/constants/constants"

import Title from './title';


import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';

const styles = (theme) =>({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
});

class EmailDashboard extends Component {
    constructor(props){
        super(props)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleReject = this.handleReject.bind(this)
    }

    handleAccept(e,email){
        e.preventDefault()
        this.props.setStatus(email, CONFIRMED);
    }

    handleReject(e,email){
        //FIREBASE API CALL 
        e.preventDefault()
        this.props.setStatus(email, REJECTED);
    }

    componentDidMount() {
        this.props.getEmails();
        this.props.setListener();
    }

    componentWillUnmount() {
        this.props.removeListener();
    }

    render(){
        const { classes } = this.props;
        let emails = this.props.emails;

        return (
            <React.Fragment>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Title>
                                Manage All Donation Request Emails Here {"   "}
                                <Button variant="contained" color="secondary" onClick={() => this.props.parseEmails()}>
                                    Parse New Emails 🔄
                                </Button>
                            </Title>

                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sender</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Subject</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell align="right">Accept</TableCell>
                                        <TableCell align="right">Reject</TableCell>
                                        <TableCell align="right">Expand</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {emails && emails.map((email) => (
                                        (typeof(email.Supplies) == "object" ? (
                                        <TableRow key={email.id}>
                                            <TableCell >{email.Name}</TableCell>
                                            <TableCell>{email.Email}</TableCell>
                                            <TableCell>{Object.keys(email.Supplies)[0]}</TableCell>
                                            <TableCell>{email.Subject}</TableCell>
                                            <TableCell>{Object.values(email.Supplies)[0]}</TableCell>
                                            <TableCell align="right">
                                                <IconButton color="inherit" onClick={(e) => this.handleAccept(e, email)}>
                                                    <CheckIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton color="inherit" onClick={(e) => this.handleReject(e, email)}>
                                                    <ClearIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton color="inherit" onClick={() => { window.location='/emails/'+ (email.id).toString(); }}>
                                                    <ZoomOutMapIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        ) : (null))
                                    ))}
                                </TableBody>
                            </Table>
                            <div className={classes.seeMore}>
                                <Link color="primary" href="/" >
                                    Back to Data Dashboard
                                </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}

EmailDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};  

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        emails:state.email[POTENTIAL]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStatus: (email, status) => dispatch(setStatus(email, status)),
        getEmails: () => dispatch(getEmails(POTENTIAL)),
        setListener: () => dispatch(setEmailListener(POTENTIAL)),
        removeListener: () => dispatch(removeEmailListener()),
        parseEmails: () => dispatch(parseEmailsCall())
    }
}

const enhance = compose(
    withStyles(styles), 
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)
export default enhance(EmailDashboard);

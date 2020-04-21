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
// import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { createDonation, getEmails } from '../../store/actions/emailActions'
import { CONFIRMED } from "../../store/constants/constants.js"

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

class ConfirmedEmailDashboard extends Component {
    constructor(props){
        super(props)
        // this.handleAccept = this.handleAccept.bind(this)
        this.handleReject = this.handleReject.bind(this)
    }

    //   handleAccept(e,email){
    //     // let { emails }= this.props;
    //     e.preventDefault()
    //     console.log('handleacceptrecieved', email)
    //     // call dispatch in order to make async. FIREBASE API CALL
    //     this.props.createDonation(email) // uses email id
    //   }

    handleReject(e,email){
        //FIREBASE API CALL 
        e.preventDefault()
        console.log('handlerejectrecieved',email)
    }

    componentDidMount() {
        this.props.getEmails();
    }

    render(){
        const { classes } = this.props;
        let emails = this.props.emails;

        return (
            <React.Fragment>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Title>View All Confirmed Donation Requests Here</Title>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sender</TableCell>
                                        <TableCell>Delivery Date</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Send Message</TableCell>
                                        <TableCell align="right">Expand</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {emails && emails.map((email) => (
                                        <TableRow key={email.id}>
                                            <TableCell >{email.Sender}</TableCell>
                                            <TableCell>{email.sendDate}</TableCell>
                                            <TableCell>{email.PPEType}</TableCell>
                                            <TableCell align="right">{email.PPEquantity}</TableCell>
                                            <TableCell align="right">
                                                <IconButton color="inherit" onClick={(e) => this.handleReject(e, email)}>
                                                    <MailOutlineIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton color="inherit" onClick={() => { window.location='/emails/'+ (email.id).toString(); }}>
                                                    <ZoomOutMapIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
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

ConfirmedEmailDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};  

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        emails:state.email[CONFIRMED]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDonation: (Donation) => dispatch(createDonation(Donation)),
        getEmails: () => dispatch(getEmails(CONFIRMED))
    }
}

const enhance = compose(
    withStyles(styles), 
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)
export default enhance(ConfirmedEmailDashboard);

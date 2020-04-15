import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';
import { Link as RLink } from 'react-router-dom'

import { firestoreConnect } from 'react-redux-firebase'

import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) =>({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});



class TopDonations extends Component {
  render(){
    const { classes } = this.props;
    const emails = this.props.emails;

    return (
      <React.Fragment>
        <Title>Recent Donations</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Body</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails && emails.map((email) => (
              <TableRow key={email.id}>
                <TableCell>{email.Sender}</TableCell>
                <TableCell>{email.sendDate}</TableCell>
                <TableCell>{email.PPEType}</TableCell>
                <TableCell>{email.subject}</TableCell>
                <TableCell>{(email.Body).slice(0,10)+"..."}</TableCell>
                <TableCell align="right">{email.PPEquantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <RLink to='/emails'>
            <Link color="primary" href="/emails">
              See All Donation Emails
            </Link>
          </RLink>  
        </div>
      </React.Fragment>
    );
}
}

TopDonations.propTypes = {
  classes: PropTypes.object.isRequired,
};  

const mapStateToProps = (state) =>{
  // console.log(state)
    return {
      emails:state.firestore.ordered.Emails
    }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps),
  firestoreConnect([{collection:'Emails'}])
)
export default enhance(TopDonations);

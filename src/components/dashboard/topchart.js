import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';
import { Link as RLink } from 'react-router-dom'


import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(0, '5 Apr, 2019', 'Red Cross', 'Boston, MA', '1000', 15000),
//   createData(1, '5 Apr, 2019', 'GetUsPPE.org', 'Boston, MA', '60', 1200),
//   createData(2, '4 Apr, 2019', 'Gates Foundation', 'Needham, MA', '2000', 30000),
//   createData(3, '4 Apr, 2019', 'The Bruce Family', 'Providence, RI', '600', 12000),
//   createData(4, '4 Apr, 2019', 'Jennifer Adams', 'Waltham, MA', '25', 15*25),
// ];

function preventDefault(event) {
  event.preventDefault();
}

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
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails && emails.map((email) => (
              <TableRow key={email.id}>
                <TableCell>{email.sender}</TableCell>
                <TableCell>{email.sendDate}</TableCell>
                <TableCell>{email.PPEType}</TableCell>
                <TableCell>{email.subject}</TableCell>
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
    return {
      emails:state.email.emails
    }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps)
)
export default enhance(TopDonations);

import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './title';

import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { firestoreConnect } from 'react-redux-firebase'


function preventDefault(event) {
  event.preventDefault();
}

const styles = (theme) =>({
  depositContext: {
    flex: 1,
  },
});

class Inventory extends Component{
  render(){
    const {classes} = this.props;
    let emails = this.props.emails
    console.log('allProps', this.props)
    console.log('emails', emails)
    let d = Date(Date.now()).toString().slice(0,21)
    let totalPPE = emails && emails.reduce((acc, email) => acc + email.PPEquantity, 0);
    const inventory = 2500 
    return (
      <React.Fragment>
        <Title>Total PPE Inventory</Title>
        <Typography component="p" variant="h4">
          {totalPPE} total PPE
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          as of {d}
        </Typography>
        <Typography className={classes.depositContext} variant="h6">
          {inventory} PPE total Capacity
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View statistics
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
  

Inventory.propTypes = {
  classes: PropTypes.object.isRequired,
};  

const mapStateToProps = (state) =>{
    console.log(state)
    return {
      emails:state.firestore.ordered.confirmedDonations
    }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps), 
  firestoreConnect([{collection:'confirmedDonations'}])
)
export default enhance(Inventory);


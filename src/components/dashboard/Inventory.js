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
    let { confirmedDonations, potentialDonations } = this.props
    // console.log('allProps', this.props)
    // console.log('emails', emails)
    let d = Date(Date.now()).toString().slice(0,21)
    let totalPotPPE = potentialDonations && potentialDonations.reduce((acc, email) => acc + email.PPEquantity, 0);
    let totalPPENow = confirmedDonations && confirmedDonations.reduce((acc, email) => acc + email.PPEquantity, 0);
    const inventory = 2500 
    return (
      <React.Fragment>
        <Title>PPE Stats</Title>
        <Typography component="p" variant="h5">
          {totalPPENow} Confirmed PPE
        </Typography>
        <Typography  className={classes.depositContext}>
          {totalPotPPE} Potential PPE
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
      confirmedDonations:state.firestore.ordered.confirmedDonations,
      potentialDonations:state.firestore.ordered.Emails
    }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps), 
  firestoreConnect([{collection:'confirmedDonations'}])
)
export default enhance(Inventory);


//COMPONENT FOR VIEWING INDIVIDUAL EMAILS

import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { firestoreConnect } from 'react-redux-firebase'

import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

function preventDefault(event) {
  event.preventDefault();
}

const styles = (theme) =>({
  depositContext: {
    flex: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
});

class EmailComponent extends Component{
  render(){
    const {classes} = this.props;
    const emails = this.props.emails;
    let id = (this.props.match.params.id).toString()
    // console.log('expectedid',id)
    // console.log('emailsInStore', emails)
    let ePoint = emails.find(email => email.id === id);    
    return (
      <React.Fragment>
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
              <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Subject: {ePoint.subject}
              </Typography>
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              PPE Type: {ePoint.PPEType}
              </Typography>
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              PPE Quantity: {ePoint.PPEquantity}
              </Typography>
              <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom>
              Email ID#{ePoint.id}
              </Typography>
              <Typography color="textSecondary" variant="subtitle1" align='center'>
                  From: {ePoint.sender} | as of {ePoint.sendDate}
              </Typography>
              <Typography variant="body1" align="center" component="p">
              BODY: {ePoint.body}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" component="p">
              <Link color="primary" href="#" onClick={preventDefault}>
                  Back to All
              </Link>
              </Typography>
          </Container>
      </React.Fragment>
    );
  }
}


EmailComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};  

const mapStateToProps = (state, ownProps) =>{
  // console.log(state)
  // const id = ownProps.match.params.id
  // const emails = state.firestore.data.Emails
  // console.log('emails', emails)
  
  console.log(state)
  return {
    emails:state.firestore.ordered.Emails
  }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps),
  firestoreConnect([{collection:'Emails'}])

)
export default enhance(EmailComponent);


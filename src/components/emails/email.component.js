//COMPONENT FOR VIEWING INDIVIDUAL EMAILS

import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
    let emails = this.props.emails
    const id = this.props.match.params.id
    let ePoint = emails[id-1]    
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
              Email #{ePoint.id}
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

const mapStateToProps = (state) =>{
    return {
      emails:state.email.emails
    }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps)
)
export default enhance(EmailComponent);


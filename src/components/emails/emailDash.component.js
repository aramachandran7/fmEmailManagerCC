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

import Title from './title';


import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';


function preventDefault(event) {
  event.preventDefault();
}

function handleClick(id){
  //redirect to table with correct id
  console.log('Expandclicked')
  // let id = 1
  window.location='/emails/'+ (id).toString()
}

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
    this.handelReject = this.handelReject.bind(this)
    
  }
  handleAccept(id){
    //FIREBASE API CALL
    console.log('accepted', id)
    // let id = 1
  }
  handelReject(id){
    //FIREBASE API CALL 
    console.log('rejected', id)
    // let id = 1
  }
  render(){
    const { classes } = this.props;
    let emails = this.props.emails;

    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Manage All Donation Request Emails Here</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
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
                    <TableRow key={email.id}>
                      <TableCell >{email.sender}</TableCell>
                      <TableCell>{email.sendDate}</TableCell>
                      <TableCell>{email.PPEType}</TableCell>
                      <TableCell>{email.subject}</TableCell>
                      <TableCell>{email.PPEquantity}</TableCell>
                      <TableCell align="right">
                        <IconButton color="inherit">
                            <CheckIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton color="inherit">
                            <ClearIcon />
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
                <Link color="primary" href="/" onClick={preventDefault}>
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
    return {
      emails:state.email.emails
    }
}

const enhance = compose(
  withStyles(styles), 
  connect(mapStateToProps)
)
export default enhance(EmailDashboard);

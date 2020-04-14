import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavComponent from './components/layout/navbar.component'
import FooterComponent from './components/layout/footer.component'
import DashBoardComponent from './components/dashboard/dashboard.component'
import EmailComponent from './components/emails/email.component'
import EmailDashBoard from './components/emails/emailDash.component'
import SignInComponent from './components/auth/SignIn.component';
import SignUpComponent from './components/auth/SignUp.component';


function App() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Switch>
        <Route exact path='/' component={DashBoardComponent} />
        <Route exact path='/emails/' component={EmailDashBoard}/>
        <Route path='/emails/:id' component={EmailComponent} />
        <Route path='/signin' component={SignInComponent} />
        <Route path='/signup' component={SignUpComponent} />
      </Switch>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

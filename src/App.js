import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavComponent from './components/layout/navbar.component'
import FooterComponent from './components/layout/footer.component'

function App() {
  return (
    < BrowserRouter>
      <NavComponent />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

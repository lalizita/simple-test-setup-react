import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset'

import CustomerForm from './components/CustomerForm/CustomerForm'

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <CustomerForm />
    </ThemeProvider>
  );
}

export default App;

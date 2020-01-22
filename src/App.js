import React from 'react';
import { Routes } from './Routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>LIQID TEST</h1>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

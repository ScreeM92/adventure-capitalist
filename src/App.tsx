import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from './components/Game';
import { GlobalStyles, theme } from './globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Game />
    </ThemeProvider>
  );
}

export default App;

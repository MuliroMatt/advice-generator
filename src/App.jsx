import React from 'react';
import { Main } from './components/styles/Main.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import AdviceCard from './components/AdviceCard';

const App = () => {
   const theme = {
      LightCyan: 'hsl(193, 38%, 86%)',
      NeonGreen: 'hsl(150, 100%, 66%)',
      GrayishBlue: 'hsl(217, 19%, 38%)',
      DarkGrayishBlue: 'hsl(217, 19%, 24%)',
      DarkBlue: 'hsl(218, 23%, 16%)',
   };
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Main>
            <AdviceCard/>
         </Main>
      </ThemeProvider>
   );
};

export default App;

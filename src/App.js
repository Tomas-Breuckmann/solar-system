import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetsCarousel from './components/PlanetsCarousel';
import Global from './Styles/GlobalStyles';
import Footer from './components/Footer';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';
import useStateWithLocal from './Hooks/useStateWithLocal';

function App() {
    const [theme, setTheme] = useStateWithLocal('theme', light);
    const changeTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    }
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Global />
          <Header changeTheme={changeTheme}/>
          <PlanetsCarousel />
          <Missions />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

export default App;

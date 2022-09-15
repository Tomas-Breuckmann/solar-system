import React, { useState } from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetsCarousel from './components/PlanetsCarousel';
import Global from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components'
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

function App() {
    const [theme, setTheme] = useState(light);
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
        </div>
      </ThemeProvider>
    );
  }

export default App;

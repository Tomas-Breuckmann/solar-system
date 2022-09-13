import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetsCarousel from './components/PlanetsCarousel';
import Global from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components'
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={dark}>
        <div>
          <Global />
          <Header />
          <PlanetsCarousel />
          <Missions />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

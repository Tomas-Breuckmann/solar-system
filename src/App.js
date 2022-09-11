import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetsCarousel from './components/PlanetsCarousel';
import Global from './GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Global />
        <Header />
        <PlanetsCarousel />
        <Missions />
      </div>
    );
  }
}

export default App;

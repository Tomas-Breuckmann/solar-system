import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetsCarousel from './components/PlanetsCarousel';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PlanetsCarousel />
        <Missions />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

// import Title from './components/Title';

// const headline = 'tomas';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bg-red-500">With tailwind</h1>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;

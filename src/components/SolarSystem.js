import React from 'react';
import Title from './Title';

const headline = 'Planetas';
class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system"> </div>
        <Title headline={ headline } />
      </>
    );
  }
}

export default SolarSystem;

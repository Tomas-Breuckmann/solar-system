import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const headline = 'Planetas';
// console.log(planets);
class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system"> </div>
        <Title headline={ headline } />
        {planets.map((planeta) => (
          <div key={ planeta.name }>
            <PlanetCard planetName={ planeta.name } planetImage={ planeta.image } />
          </div>
        ))}
      </>
    );
  }
}

export default SolarSystem;

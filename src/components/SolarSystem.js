import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import styled from 'styled-components'

const SolarMain=styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const headline = 'Planetas';
// console.log(planets);
class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline={ headline } />
        <SolarMain>
          {planets.map((planeta) => (
            <div key={ planeta.name }>
              <PlanetCard planetName={ planeta.name } planetImage={ planeta.image } />
            </div>
          ))}
        </SolarMain>
      </div>
    );
  }
}

export default SolarSystem;

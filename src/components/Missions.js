import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import styled from 'styled-components'

const Miss=styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

class Missions extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <Miss>
        {missions.map((mission) => (
          <div key={ mission.name }>
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              />
          </div>
        ))}
        </Miss>
      </div>
    );
  }
}

export default Missions;

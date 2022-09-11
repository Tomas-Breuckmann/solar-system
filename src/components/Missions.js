import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import styled from 'styled-components'
import { MissionMain, MissionContent } from './Missions.styles';

class Missions extends React.Component {
  render() {
    return (
      <MissionMain>
        <Title headline="Missões" />
        <MissionContent>
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
        </MissionContent>
      </MissionMain>
    );
  }
}

export default Missions;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const CardM=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  border-radius: 4px;
  width: 250px;

  p { margin: 4px}
  h4 {
    margin: 12px;
    padding: 4px 0;
    background-color: ${props => props.theme.colors.missionsTitleBack};
    color: ${props => props.theme.colors.textPlanets};
    width: 100%;
    text-align: center}
`

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <CardM >
        <h4> { name }</h4>
        <p>{ year }</p>
        <p>
          { country }
        </p>
        <p>
          {destination}
        </p>
      </CardM>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Card=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  p {
    font-size: 1.2em;
  }

  img {
    width: 150px;
    transition: all 0.5s ease-out;

    &:hover{
      width: 200px;
      transition: all 0.5s ease-in;
    }
  }
`

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <Card>
        <p> {planetName} </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </Card>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

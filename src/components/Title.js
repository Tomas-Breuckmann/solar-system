import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1=styled.h1`
  text-align: center;
`

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <H1>{headline}</H1>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;

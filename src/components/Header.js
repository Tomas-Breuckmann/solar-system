import React from 'react';
import Title from './Title';

import styled from 'styled-components';

const HeaderMain=styled.div`
    border-bottom: 5px double black;
    justify-content: center;
`

const headline = 'Sistema Solar'
class Header extends React.Component {
  render() {
    return (
      <HeaderMain>
        <Title headline={ headline }/>        
      </HeaderMain>
    );
  }
}

export default Header;

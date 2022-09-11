import React from 'react';
import Title from './Title';
import { HeaderMain, HeaderContent } from './Header.styles';

const headline = 'Sistema Solar'
class Header extends React.Component {
  render() {
    return (
      <HeaderMain>
        <HeaderContent>
          <Title headline={ headline }/>        
        </HeaderContent>
      </HeaderMain>
    );
  }
}

export default Header;

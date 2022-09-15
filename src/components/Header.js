import React, { useContext } from 'react';
import Title from './Title';
import { HeaderMain, HeaderContent, Button } from './Header.styles';
import { ThemeContext } from 'styled-components';

const headline = 'Sistema Solar'
function Header({ changeTheme }) {
    const { title } = useContext(ThemeContext);
    const buttonTitle = title === 'light' ? 'DARK' : 'LIGHT';
    return (
      <HeaderMain>
        <HeaderContent>
          <Title headline={ headline }/>
          <Button onClick={changeTheme}>{buttonTitle}</Button>
        </HeaderContent>
      </HeaderMain>
    );
  }

export default Header;

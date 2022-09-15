import React, { useContext } from 'react';
import Title from './Title';
import { HeaderMain, HeaderContent, Button, Link } from './Header.styles';
import { ThemeContext } from 'styled-components';

const headline = 'Sistema Solar'
function Header({ changeTheme }) {
    const { title } = useContext(ThemeContext);
    const buttonTitle = title === 'light' ? 'DARK' : 'LIGHT';
    return (
      <HeaderMain>
        <HeaderContent>
          <Title headline={ headline }/>
          <Link>
              <a href="#footer">CONTATOS</a>
              <Button onClick={changeTheme}>{buttonTitle}</Button>
          </Link>
        </HeaderContent>
      </HeaderMain>
    );
  }

export default Header;

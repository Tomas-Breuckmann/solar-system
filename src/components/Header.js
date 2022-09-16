import React, { useContext } from 'react';
import Title from './Title';
import { HeaderMain, HeaderContent, Button, Link } from './Header.styles';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

const headline = 'Sistema Solar'
function Header({ changeTheme }) {
    const { title, changeThemeButton } = useContext(ThemeContext);
    const buttonTitle = title === 'light' ? 'DARK' : 'LIGHT';
    return (
      <HeaderMain>
        <HeaderContent>
          <Title headline={ headline }/>
          <Link>
              <a href="#footer">CONTATOS</a>
              <Switch
                onChange={changeTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={12}
                width={32}
                offColor={changeThemeButton.background}
                onColor={changeThemeButton.background}
                onHandleColor={changeThemeButton.color}
                offHandleColor={changeThemeButton.color}
              />
          </Link>
        </HeaderContent>
      </HeaderMain>
    );
  }

export default Header;

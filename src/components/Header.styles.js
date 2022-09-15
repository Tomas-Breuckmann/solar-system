import styled from 'styled-components';
import { BasicMain, BasicContent  } from '../Styles/GeneralStyles';

export const HeaderMain = styled(BasicMain)`
    border-bottom: 2px solid var(--g12);
    `;

export const HeaderContent = styled(BasicContent)`
    font-family: 'Euphoria Script', cursive;
    font-size: 30px;
`;

export const Button=styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    color: ${props => props.theme.changeThemeButton.color};
    background-color: ${props => props.theme.changeThemeButton.background};
    font-size: 12px;
    padding: 0.5em 1em;
    border-radius: 50%;
    border: 1px solid var(--g4);
`;

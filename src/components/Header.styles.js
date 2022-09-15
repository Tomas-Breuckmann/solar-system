import styled from 'styled-components';
import { BasicMain, BasicContent  } from '../Styles/GeneralStyles';

export const HeaderMain = styled(BasicMain)`
    border-bottom: 2px solid var(--g12);
    padding: 20px;
    `;

export const HeaderContent = styled(BasicContent)`
    font-family: 'Euphoria Script', cursive;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    /* position: absolute; */
    /* top: 8px;
    right: 8px; */
    color: ${props => props.theme.changeThemeButton.color};
    background-color: ${props => props.theme.changeThemeButton.background};
    font-size: 12px;
    padding: 0.5em 1em;
    border-radius: 50%;
    border: 1px solid var(--g4);
`;

export const Link = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-family: sans-serif;
    font-size: 16px;
    a {
        color: ${props => props.theme.colors.text};
    }
`

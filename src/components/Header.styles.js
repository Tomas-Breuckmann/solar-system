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

export const Link = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-family: sans-serif;
    a {
        color: ${props => props.theme.colors.text};
        font-size: 16px;
    }
`

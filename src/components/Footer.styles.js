import styled from 'styled-components';
import { BasicMain, BasicContent  } from '../Styles/GeneralStyles';

export const FooterMain = styled(BasicMain)`
    background-image: url(${props => props.theme.images.footerBackground});
    `;

export const FooterContent = styled(BasicContent)`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text contact";
`;

export const Text=styled.div`
    grid-area: text;
    font-size: 1.2em;
`;

export const Contacts=styled.div`
    grid-area: contact;
    display: flex;
    font-size: 2em;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
        height: 30px;
    }
    /* a {
        color: ${props => props.theme.colors.footerIcons};
    } */
`;
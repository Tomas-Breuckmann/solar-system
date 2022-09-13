import styled from 'styled-components';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { BasicMain, BasicContent } from '../Styles/GeneralStyles';
// import backGround from '../images//backgrounds/light.jpg';

export const PlanetMain = styled(BasicMain)`
background-image: url(${props => props.theme.images.imgBackgroundPlanets});
color: ${props => props.theme.colors.textPlanets};
/* color: var(--g3); */
`;

export const PlanetContent = styled(BasicContent)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        text-transform: uppercase;
    }
    div {
        display: flex;
        align-items: center;
        }
`;

export const Img = styled.img`
    width: 300px;
    border-radius: 8px;
`
export const Avanca = styled(AiFillCaretRight)`
    width: 30px;
    height: 30px;
    /* background-color: red; */
    cursor: pointer;
`
export const Recua = styled(AiFillCaretLeft)`
    width: 30px;
    height: 30px;
    /* background-color: red; */
    cursor: pointer;
`
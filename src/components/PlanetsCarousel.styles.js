import styled, { keyframes } from 'styled-components';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { BasicMain, BasicContent } from '../Styles/GeneralStyles';

export const PlanetMain = styled(BasicMain)`
background-image: url(${props => props.theme.images.imgBackgroundPlanets});
color: ${props => props.theme.colors.textPlanets};
`;

// const fadeTransitionEffect = keyframes`
//     0% { opacity: 0; }
//     100% { opacity: 1; }
// ` 

export const PlanetContent = styled(BasicContent)`
    position: relative;
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        text-transform: uppercase;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 150px;
        }
`;

// export const Img = styled.img`
//     width: 300px;
//     border-radius: 8px;
//     animation: ${fadeTransitionEffect} 2s ease;
// `
export const Avanca = styled(AiFillCaretRight)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`
export const Recua = styled(AiFillCaretLeft)`
    width: 30px;
    height: 30px;
    cursor: pointer;
`
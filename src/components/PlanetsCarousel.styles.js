import styled from 'styled-components';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { BasicMain, BasicContent } from '../GeneralStyles';
import backGround from '../images/background.png';

export const PlanetMain = styled(BasicMain)`
background-image: url(${backGround});
color: var(--g3);
`;

export const PlanetContent = styled(BasicContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px;
    p {
        text-align: center;
        text-transform: uppercase;
    }
`;

/* export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px;
    
    p {
        text-align: center;
        text-transform: uppercase;
    }
` */

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
import styled from 'styled-components';
import { BasicMain, BasicContent  } from '../GeneralStyles';

export const MissionMain = styled(BasicMain)`
background-color: var(--g4)
`;

export const MissionContent = styled(BasicContent)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 12px;   
padding-top: 40px;
`;

import React, { useState, useEffect } from 'react';
// import Title from './Title';
// import missions from '../data/missions';
// import MissionCard from './MissionCard';
import styled, { keyframes } from 'styled-components';
// import { MissionMain, MissionContent } from './Missions.styles';

const fadeTransitionEffect = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
` 

const Img = styled.img`
    width: 300px;
    /* border-radius: 8px; */
    animation: ${fadeTransitionEffect} 1s ease-in-out;
`

const Box=styled.main`
    /* width: 100%; */
    height: 200px;
    /* background-color: red; */
`

function Image({ src }) {
    const [actualImage, setActualImage ] = useState('');
    useEffect(() => {
        setActualImage(src)
    }, [src])
    return (
        <Box>
        { 
            actualImage === src &&
            <Img src={src} alt="planet"/>
        }
        </Box>
    );
}

export default Image;
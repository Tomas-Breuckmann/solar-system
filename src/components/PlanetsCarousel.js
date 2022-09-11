import React, { Component, useState } from 'react';
import { PlanetMain, PlanetContent, Img, Avanca, Recua } from './PlanetsCarousel.styles.js';
import planets from '../data/planets';
import Title from './Title';

const planetsNumber = planets.length;

function PlanetsCarousel() {
    const [imageIndex, setIndex] = useState(0);

    const handleImageAvanca = (index) => {
        console.log(index);
        if (index > planetsNumber - 2 ) { setIndex(0) }
        else {
            setIndex(index + 1);
        }    }
    const handleImageRecua = (index) => {
        console.log(index);
        if (index < 1 ) { setIndex(planetsNumber - 1) }
        else {
            setIndex(index - 1);
        }
    }

    return (
        <PlanetMain>
        <Title headline="Planetas" />
        <PlanetContent>
            {/* <img src={img1Url} alt='imagem da url'/> */}
            <Recua onClick={() => handleImageRecua(imageIndex)}></Recua>
            <div>
                <Img src={planets[imageIndex].image} alt="planet"/>
                <p className="legend">{planets[imageIndex].name}</p>
            </div>
            <Avanca onClick={() => handleImageAvanca(imageIndex)}></Avanca>
        </PlanetContent>
        </PlanetMain>
    );
};

export default PlanetsCarousel;

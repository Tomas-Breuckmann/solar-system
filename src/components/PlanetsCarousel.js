import React, { useState } from 'react';
import { PlanetMain, PlanetContent, Avanca, Recua } from './PlanetsCarousel.styles.js';
import planets from '../data/planets';
import Title from './Title';
import Image from './Image.js';

const planetsNumber = planets.length;

function PlanetsCarousel() {
    const [imageIndex, setIndex] = useState(0);
    const src = planets[imageIndex].image;

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
            <Image src={src} />
            {/* <img src={img1Url} alt='imagem da url'/> */}
            <div>
                <Recua onClick={() => handleImageRecua(imageIndex)}></Recua>
                <p className="legend">{planets[imageIndex].name}</p>
                <Avanca onClick={() => handleImageAvanca(imageIndex)}></Avanca>
            </div>
        </PlanetContent>
        </PlanetMain>
    );
};

export default PlanetsCarousel;

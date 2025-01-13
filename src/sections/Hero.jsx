import React, { useState, useEffect, Suspense } from 'react';
import GamingSetup from '../components/GamingSetup';
import CanvasLoader from '../components/CanvasLoader';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';

const Hero = () => {
    
  const isSmall = useMediaQuery({ query: '(max-width: 768px)' })
  
  const sizes = calculateSizes(isSmall);
    
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const phrases = [
    'CSE-AiMl Student @SRMIST',
    'Artificial Intelligence and Machine Learning Enthusiast',
    'Full Stack and Software Developer',
  ];

  useEffect(() => {
    if (charIndex < phrases[index].length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prevText) => prevText + phrases[index].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1000);

      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, index, phrases]);

  return (
    <section className="relative flex flex-col w-full min-h-screen pb-0 mb-0 section" id='home'>
      <div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
        <p className="text-2xl font-medium text-center text-white sm:text-3xl font-generalsans">
          Hi, I am Neelansha Agarwal
          <span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">{typedText}</p>
      </div>
      <div className='absolute inset-0 w-full h-full'>
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader  />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={80}/>
            <HeroCamera isSmall={isSmall}>
              <GamingSetup
              position={sizes.deskPosition} 
              rotation = {[0,-Math.PI/2.0,0]}
              scale={sizes.deskScale}/>
            </HeroCamera>
            
            <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={3} />
            <directionalLight intensity={1} position={[10,10,10]} />
            </Suspense> 
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { HomeTemplate } from '../home/template/HomeTemplate.jsx';
import { Provider } from '../../context/context.jsx';
import { StarsGeometry } from '../stars/Stars.jsx';

export const CanvasApp = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5]
      }}
    >
      <Provider>
        <StarsGeometry/>
        <HomeTemplate/>
      </Provider>

    </Canvas>
  );
};


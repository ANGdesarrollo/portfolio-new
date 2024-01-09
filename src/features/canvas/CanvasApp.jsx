import React from 'react';
import { Canvas } from '@react-three/fiber';
import { HomeTemplate } from '../home/template/HomeTemplate.jsx';
import { Provider } from '../../context/context.jsx';
// import { StarsGeometry } from '../stars/Stars.jsx';

export const CanvasApp = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1]
      }}
    >
      <Provider>
        {/* <StarsGeometry/>*/}
        <HomeTemplate/>
      </Provider>

    </Canvas>
  );
};


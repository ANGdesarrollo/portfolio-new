import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../experience/Experience.jsx';

export const CanvasApp = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 30
      }}
    >
      <Experience/>
    </Canvas>
  );
};


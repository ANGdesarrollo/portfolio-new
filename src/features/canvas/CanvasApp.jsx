import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Provider } from '../../context/context.jsx';

const StarsGeometry = React.lazy(() => import('../stars/Stars.jsx').then(module => ({ default: module.StarsGeometry })));
const HomeTemplate = React.lazy(() => import('../home/template/HomeTemplate.jsx').then(module => ({ default: module.HomeTemplate })));

export const CanvasApp = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1]
      }}
    >
      <Provider>
        <StarsGeometry/>
        <HomeTemplate/>
      </Provider>

    </Canvas>
  );
};


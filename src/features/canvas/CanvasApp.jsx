import React from 'react';
const Canvas = React.lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const StarsGeometry = React.lazy(() => import('../stars/Stars.jsx').then(module => ({ default: module.StarsGeometry })));
const HomeTemplate = React.lazy(() => import('../home/template/HomeTemplate.jsx').then(module => ({ default: module.HomeTemplate })));
const Provider = React.lazy(() => import('../../context/context.jsx').then(module => ({ default: module.Provider })));

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


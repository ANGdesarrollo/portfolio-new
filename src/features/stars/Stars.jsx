import React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/context.jsx';
import { useIsMobile } from '../shared/hooks/useIsMobile.js';

const Stars = React.lazy(() => import('@react-three/drei').then(module => ({ default: module.Stars })));

export const StarsGeometry = () => {
  const { handleSetMeshRef } = useContext(MyContext);
  const ref = useRef(null);
  const { isMobile } = useIsMobile();
  const countStars = isMobile() ? 1000 : 20000;
  const radius = isMobile() ? 10 : 100;

  useEffect(() => {
    handleSetMeshRef('stars', ref);
  }, [ref]);

  return <Stars ref={ref} count={countStars} fade={true} radius={radius}  factor={4} />;
};

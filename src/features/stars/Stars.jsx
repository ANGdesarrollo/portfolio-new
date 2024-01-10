import React from 'react';
import { Stars } from '@react-three/drei';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/context.jsx';
import { useDetectDevice } from '../shared/hooks/useDetectDevice.js';

export const StarsGeometry = () => {
  const { handleSetMeshRef } = useContext(MyContext);
  const ref = useRef(null);
  const { isMobile } = useDetectDevice();
  const countStars = isMobile() ? 5000 : 20000;
  const radius = isMobile() ? 25 : 100;

  useEffect(() => {
    handleSetMeshRef('stars', ref);
  }, [ref]);

  return <Stars ref={ref} count={countStars} fade={true} radius={radius}  factor={4} />;
};

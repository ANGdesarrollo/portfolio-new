import React from 'react';
import { Stars } from '@react-three/drei';
import { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../context/context.jsx';

export const StarsGeometry = () => {
  const { handleSetMeshRef } = useContext(MyContext);
  const ref = useRef(null);

  useEffect(() => {
    handleSetMeshRef('stars', ref);
  }, [ref]);

  return <Stars ref={ref} count={20000} fade={true} radius={100}  factor={4} />;
};

import React, { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../../context/context.jsx';

export const Geometry = () => {
  const ref = useRef(null);
  const { handleSetMeshRef  } = useContext(MyContext);

  useEffect(() => {
    handleSetMeshRef('home', ref);
  }, [ref]);

  return (
    <mesh ref={ref} scale={[0.3, 0.3, 0.3]}>
      <octahedronGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

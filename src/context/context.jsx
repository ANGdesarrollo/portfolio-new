import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {useCamera} from "@react-three/drei";

export const MyContext = React.createContext(undefined);

export const Provider = ({ children }) => {
  const [meshGeometries, setMeshGeometries] = useState({
    stars: null,
    home: null,
    aboutMe: null
  });

  const handleSetMeshRef = (key, newValue) => {
    setMeshGeometries(prev => ({ ...prev, [key]: newValue }));
  };

  const handleRotationOfMeshs = (delta) => {
    Object.keys(meshGeometries).forEach((key) => {
      const geometry = meshGeometries[key];
      if (geometry?.current) {
        if (key === 'stars') {
          geometry.current.rotation.y += delta * 0.015;
        } else {
          geometry.current.rotation.y += delta * 0.15;
        }
      }
    });
  };


  useFrame((state, delta) => {
    handleRotationOfMeshs(delta);

  });

  return (
    <MyContext.Provider value={{
      handleSetMeshRef
    }}>
      {children}
    </MyContext.Provider>
  );
};


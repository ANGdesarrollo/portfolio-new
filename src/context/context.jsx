import React, {useCallback, useEffect, useState} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useCamera } from '@react-three/drei';
import { useMoveCamera } from '../features/shared/hooks/useMoveCamera.js';

export const MyContext = React.createContext(undefined);

export const Provider = ({ children }) => {
  const [meshGeometries, setMeshGeometries] = useState({
    stars: null,
    home: null,
    aboutMe: null
  });

  const { camera } = useThree();
  useMoveCamera(camera, meshGeometries);


  const handleSetMeshRef = (key, newValue) => {
    setMeshGeometries(prev => ({ ...prev, [key]: newValue }));
  };

  const handleRotationOfMeshes = useCallback((delta) => {
    Object.keys(meshGeometries).forEach((key) => {
      const geometry = meshGeometries[key];
      if (geometry?.current) {
        geometry.current.rotation.y += delta * (key === 'stars' ? 0.015 : 0.15);
      }
    });
  }, [meshGeometries]);

  useFrame((state, delta) => {
    handleRotationOfMeshes(delta);
  });

  return (
    <MyContext.Provider value={{
      handleSetMeshRef
    }}>
      {children}
    </MyContext.Provider>
  );
};


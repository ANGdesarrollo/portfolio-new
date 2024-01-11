import React, { useContext, useEffect, useRef } from 'react';
import { MyContext } from '../../../context/context.jsx';
import { sectionNames } from '../../shared/constants/sectionNames.js';
import {geometriesPositions} from "../../shared/constants/geometriesPositions.js";

export const Geometry = () => {
  const ref = useRef(null);
  const { handleSetMeshRef  } = useContext(MyContext);
  const { aboutMe } = geometriesPositions;

  useEffect(() => {
    handleSetMeshRef(sectionNames.aboutMe, ref);
  }, [ref]);

  return (
    <mesh ref={ref} scale={[0.25, 0.25, 0.25]} position={[aboutMe.x, aboutMe.y, 0]}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

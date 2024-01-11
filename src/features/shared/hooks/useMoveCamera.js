import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetPosition } from './useSetPosition.js';
import { sectionNames } from '../constants/sectionNames.js';
import { useGsap } from './useGsap.js';
import {geometriesPositions} from "../constants/geometriesPositions.js";
export const useMoveCamera = (camera, meshGeometries) => {
  const { search } = useLocation();
  const { gsapFromTo } = useGsap();
  const { setPosition } = useSetPosition();
  const { aboutMe, home, contact, experience, stack } = geometriesPositions;

  const params = new URLSearchParams(search);
  const page = params.get('page');

  const pagePositions = {
    [sectionNames.home]: home,
    [sectionNames.aboutMe]: aboutMe,
    [sectionNames.stack]: contact,
    [sectionNames.experience]: experience,
    [sectionNames.contact]: stack
  };

  const animatePageChange = () => {
    const currentPosition = setPosition(camera.position.x, camera.position.y, camera.position.z);
    const targetPosition = pagePositions[page];

    if (targetPosition) {
      gsapFromTo({
        target: camera.position,
        fromVars: currentPosition,
        toVars: targetPosition,
        durationInSeconds: 3
      });
    }
  };

  useEffect(() => {
    animatePageChange();
  }, [page]);
};



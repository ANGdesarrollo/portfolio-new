import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useSetPosition } from './useSetPosition.js';
import { sectionNames } from '../constants/sectionNames.js';
import { useGsap } from './useGsap.js';
export const useMoveCamera = (camera, meshGeometries) => {
  const { search } = useLocation();
  const { gsapFromTo } = useGsap();
  const { setPosition } = useSetPosition();

  const params = new URLSearchParams(search);
  const page = params.get('page');

  const pagePositions = {
    [sectionNames.home.toLowerCase()]: setPosition(0, 0, 1),
    [sectionNames.aboutMe.toLowerCase()]: setPosition(-4, 0, 1)
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



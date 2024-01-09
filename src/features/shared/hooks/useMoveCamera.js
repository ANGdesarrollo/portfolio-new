import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { sectionNames } from '../../navbar/constants/data.js';
import { gsap } from 'gsap';
import { useSetPosition } from './useSetPosition.js';
export const useMoveCamera = (camera, meshGeometries) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = params.get('page');

  const isHome = page === sectionNames.home.toLowerCase();
  const isAboutMe = page === sectionNames.aboutMe.toLowerCase();
  const isStack = page === sectionNames.stack.toLowerCase();
  const isProjects = page === sectionNames.projects.toLowerCase();
  const isContact = page === sectionNames.contact.toLowerCase();

  const { setPosition } = useSetPosition();

  const moveCamera = (camera, position) => {
    gsapFromTo(camera, position);
  };

  useEffect(() => {
    if (isHome) {
      moveCamera(camera, setPosition(0, 0, 1));
    } else if (isAboutMe) {
      moveCamera(camera, setPosition(-4, 0, 1));
    }
  }, [page]);
};

const gsapFromTo = (camera, position) => {
  gsap.fromTo(camera.position, { x: camera.position.x, y: camera.position.y, z: camera.position.z }, {
    x: position.x,
    y: position.y,
    z: position.z,
    duration: 3
  });
};

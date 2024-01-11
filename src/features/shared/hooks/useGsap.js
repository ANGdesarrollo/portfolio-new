import { gsap } from 'gsap';

export const useGsap = () => {
  const gsapFromTo = ({ target, fromVars, toVars, durationInSeconds }) => {
    gsap.fromTo(target, { x: fromVars.x, y: fromVars.y, z: fromVars.z }, {
      x: toVars.x,
      y: toVars.y,
      z: toVars.z,
      duration: durationInSeconds
    });
  };

  return {
    gsapFromTo
  };
};

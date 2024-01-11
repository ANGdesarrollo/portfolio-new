import { useSetPosition } from '../hooks/useSetPosition.js';

const { setPosition } = useSetPosition();
export const geometriesPositions = {
  home: setPosition(0, 0, 1),
  aboutMe: setPosition(-4, 0, 1),
  stack: setPosition(0, 3, 0),
  experience: setPosition(-4, 0, -4),
  contact: setPosition(-2, -2, -2)
};

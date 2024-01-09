export const useSetPosition = () => {
  const setPosition = (x, y, z) => {
    return {
      x,
      y,
      z
    };
  };

  return {
    setPosition
  };
};

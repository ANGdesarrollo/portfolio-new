import { useState } from 'react';
import { navItems, sectionNames } from '../constants/data';
export const useSelectItem = () => {
  const homeActive = navItems.find(({ item }) => item === sectionNames.home);
  const [pageActive, setPageActive] = useState(homeActive);

  const handlePageActive = (item) => {
    setPageActive(item);
  };

  return {
    pageActive,
    handlePageActive
  };
};

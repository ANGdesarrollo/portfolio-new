import { useEffect, useState } from 'react';
import { navItems, sectionNames } from '../constants/data';
import { useSearchParams } from 'react-router-dom';
export const useSelectItem = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const homeActive = navItems.find(({ item }) => item === sectionNames.home);
  const [pageActive, setPageActive] = useState(homeActive);

  useEffect(() => {
    setSearchParams({ page: pageActive.item.toLocaleLowerCase() });
  }, [pageActive]);

  const handlePageActive = (item) => {
    setPageActive(item);
  };


  return {
    pageActive,
    handlePageActive
  };
};

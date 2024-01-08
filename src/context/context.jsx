import React, { useState } from 'react';
import { navItems, sectionNames } from '../features/navbar/constants/data.js';

export const MyContext = React.createContext();

export const Provider = ({ children }) => {
  const homeActive = navItems.find(({ item }) => item === sectionNames.home);
  const [pageActive, setPageActive] = useState(homeActive);

  const handlePageActive = (item) => {
    console.log('entre');
    setPageActive(item);
  };

  return (
    <MyContext.Provider value={{ pageActive, handlePageActive }}>
      {children}
    </MyContext.Provider>
  );
};


import React, { useContext, useEffect, useState } from 'react';
import { navItems, sectionNames } from '../constants/data.js';
import style from './navbar.module.css';
import { MyContext } from '../../../context/context.jsx';

export const Navbar = () => {
  const { handlePageActive, pageActive } = useContext(MyContext);

  return (
    <header className={style.header}>
      <nav>
        <ul>
          {
            navItems.map(({ item }) =>
              <li
                className={item === pageActive ? style.liActive : ''}
                key={item}
                onClick={() => handlePageActive(item)}
              >
                {item}
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

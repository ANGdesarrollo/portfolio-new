import React from 'react';
import { navItems } from '../constants/data.js';
import style from './navbar.module.css';
import { useSelectItem } from '../hooks/useSelectItem.js';

export const Navbar = () => {
  const { handlePageActive, pageActive } = useSelectItem();

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

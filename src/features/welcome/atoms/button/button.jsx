import React from 'react';
import style from './button.module.css';

export const Button = ({ handleActiveCanvas }) => {
  return (
    <div className={style.container}>
      <button onClick={handleActiveCanvas} className={style.btn} type="button">
                GO
        <div className={style.containerStars}>
          <div className={style.stars}></div>
        </div>

        <div className={style.glow}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>
      </button>
    </div>
  );
};

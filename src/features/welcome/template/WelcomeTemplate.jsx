import React from 'react';
import style from './welcome-template.module.css';
import { Title } from '../atoms/title/Title.jsx';
import { Button } from '../atoms/button/button.jsx';

export const WelcomeTemplate = ({ handleActiveCanvas }) => {
  return (
    <div className={style.container}>
      <Title/>
      <Button handleActiveCanvas={handleActiveCanvas}/>
    </div>
  );
};

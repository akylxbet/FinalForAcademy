import React from 'react';
import s from './Paragraph.module.scss'

const Paragraph = ({children}) => {
    return (
        <span className={s.Paragraph}>
          <img src='./circle.png' alt="" />
         {children}
        </span>
    );
};

export default Paragraph;
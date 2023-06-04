import React from 'react';
import s from './Button.module.scss'

const Button = ({children}) => {
    return (
        <button className={s.button}>
            {children}
        </button>
    );
};

export default Button;
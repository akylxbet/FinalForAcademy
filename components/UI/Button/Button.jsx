import React from 'react';
import s from './Button.module.scss'

const Button = ({children , onClick ,...props}) => {
    return (
        <button onClick={onClick} {...props} className={s.button}>
            {children}
        </button>
    );
};

export default Button;
import React from 'react';
import s from './AnotherButton.module.scss'
const AnotherButton = ( {children} ) => {
    return (
        <button className={s.button}> 
            {children}
        </button>
    );
};

export default AnotherButton;
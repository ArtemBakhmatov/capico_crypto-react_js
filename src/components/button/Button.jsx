import React from 'react';

import { forwardArrowIcon } from '../../constants';

import './button.scss';

const Button = () => {
    return (
        <button className='btn'>
            <span>Войти</span>
            {/* <img src={ forwardArrowIcon.src } alt={ forwardArrowIcon.alt } /> */}
        </button>
    );
};

export default Button;
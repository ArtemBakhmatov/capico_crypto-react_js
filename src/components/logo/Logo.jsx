import React from 'react';

import { logoImg } from '../../constants';

const Logo = () => (
    <div className="header__logo">
        <img src={ logoImg.src } alt={ logoImg.alt } className='header__logo-img' />
    </div>
);

export default Logo;
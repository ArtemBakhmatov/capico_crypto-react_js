import React from 'react';

import { brandButtons } from '../../constants/mainScreen';

import './btnBrands.scss';

const BtnBrands = () => {
    return (
        <div className='btnBrands'>
            <div className="btnBrands__wrapper">
                { brandButtons.map((item, i) => 
                    <a href={ item.href } key={ i } className='btnBrands__link'>
                        <img src={ item.iconSrc} alt={ item.iconAlt } />
                    </a>
                )}
            </div>
        </div>
    );
};

export default BtnBrands;
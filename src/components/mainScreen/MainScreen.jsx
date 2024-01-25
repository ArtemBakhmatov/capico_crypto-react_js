import React from 'react';

import BtnBrands from '../btnBrands/BtnBrands';
import { titleH1, linkToExchange } from '../../constants/mainScreen';

import './mainScreen.scss';

const MainScreen = () => {
    return (
        <div className='mainScreen'>
            <div className="mainScreen__square"></div>
            <div className="mainScreen__visibleNone"></div>
            <div className="mainScreen__bg">
                <div className="container container__position">
                    <h1 className="mainScreen__title">
                        { titleH1.titleBig } <span>{ titleH1.titleSpan }</span>
                    </h1>

                    <a href='#' className="mainScreen__link">
                        <button className='mainScreen__btn'>{ linkToExchange.btn }</button>
                        <span>
                            { linkToExchange.span } 
                            <img 
                                src={ linkToExchange.imgSrc } 
                                alt={ linkToExchange.imgAlt } 
                                className='mainScreen__icon'
                            />
                        </span>
                    </a>

                    <BtnBrands />
                </div>
            </div>
            
        </div>
    );
};

export default MainScreen;
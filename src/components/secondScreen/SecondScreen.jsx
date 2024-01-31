import React from 'react';

import { tabletAndSmartphoneImg, playIcon } from '../../constants/secondScreen';

import './secondScreen.scss';

const SecondScreen = () => {
    return (
        <section className='secondScreen'>
            <div className="mainScreen__square"></div>
            <div className="mainScreen__visibleNone"></div>
            <div className="container">
                <div className="secondScreen__wrapper">
                    <div className="secondScreen__title">
                        Управляйте позициями
                    </div>
                    <div className="secondScreen__title">
                        на разных биржах из
                    </div>
                    <div className="secondScreen__title">
                        одного окна
                    </div>
                </div>

                <div className="secondScreen__blockImg">
                    <img src={ tabletAndSmartphoneImg.srcImg } alt={ tabletAndSmartphoneImg.altImg } />
                    <div className="secondScreen__blockIcon">
                        <img src={ playIcon.srcIcon } alt={ playIcon.altIcon } />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondScreen;
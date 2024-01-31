import React from 'react';

import { squareNumbersArr } from '../../constants/numberScreen';

import './numbersScreen.scss';

const NumbersScreen = () => {
    return (
        <section className='numbersScreen'>
            <div className="mainScreen__square"></div>
            <div className="mainScreen__visibleNone"></div>
            <div className="numbersScreen__bg">
                <div className="container container__positionAll">
                    <div className="numbersScreen__top">
                        <div className="numbersScreen__title">цифры</div>
                        <div className="numbersScreen__titleSmall">Торгуйте легко</div>
                    </div>
                    <div className="numbersScreen__numbersHolderBlock">
                        <div className="numbersScreen__numbersAnime">
                            $<span id='numbersAnime'>18.5</span> B+
                        </div>
                        <div className="numbersScreen__numbersHolderText">
                            Общий объем <br/> торгов
                        </div>
                    </div>
                    <div className="numbersScreen__titleSmall numbersScreen__titleSmall-mt">
                        Actual statistic <br/> on 19.07.2022
                        </div>
                    <div className="numbersScreen__wrapper">
                        {
                            squareNumbersArr.map((item, i) => 
                                <div className="numbersScreen__block" key={ i }>
                                    <img 
                                        src={ item.src } 
                                        alt={ item.alt } 
                                        className='numbersScreen__imgBg'
                                    />
                                    <div className="numbersScreen__square">
                                        <div className="numbersScreen__numbers">
                                            <span>{ item.numbers }</span> { item.numUnit }
                                        </div>
                                        <div className="numbersScreen__numbersInfo">
                                            { item.numbersInfo }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NumbersScreen;
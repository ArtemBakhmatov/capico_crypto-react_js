import React, { useEffect, useState } from 'react';

import './btnRusEn.scss';

const BtnRusEn = () => {

    const [menuRusEnActive, setMenuRusEnActive] = useState('btnRusEn__btn');

    useEffect(() => {
        if (menuRusEnActive === 'btnRusEn__btn-active') {
            document.querySelector('.btnRusEn__btn').classList.add('btnRusEn__btn-active');
            document.querySelector('.btnRusEn__popIpBlock').classList.add('btnRusEn__popIpBlock-active');
            document.querySelector('.btnRusEn__btn-icon').classList.add('btnRusEn__btn-icon-active');
        } else {
            document.querySelector('.btnRusEn__btn').classList.remove('btnRusEn__btn-active');
            document.querySelector('.btnRusEn__popIpBlock').classList.remove('btnRusEn__popIpBlock-active');
            document.querySelector('.btnRusEn__btn-icon').classList.remove('btnRusEn__btn-icon-active');
        }
    }, [menuRusEnActive]);

    const toggleBtnRusEn = () => {
        setMenuRusEnActive((currentValue) => {
            return currentValue === 'btnRusEn__btn' ? 'btnRusEn__btn-active' : 'btnRusEn__btn';
        })
    };


    return (
        <div className="btnRusEn">
            <button className='btnRusEn__btn' onClick={ () => toggleBtnRusEn() }>
                <span className='btnRusEn__btn-text'>ru</span>
                <svg 
                    width="16" 
                    height="9" 
                    viewBox="0 0 16 9" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className='btnRusEn__btn-icon'
                >
                    <path 
                        d="M15 1L8 8L1 1" 
                        stroke="white" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                </svg>
            </button>

            <div className="btnRusEn__popIpBlock">
                <button className="btnRusEn__popIpBlock-btn">
                    <span className='btnRusEn__popIpBlock-text'>en</span>
                </button>
            </div>
            
        </div>
    )
};

export default BtnRusEn;
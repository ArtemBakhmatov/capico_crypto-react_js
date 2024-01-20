import React from 'react';

import './header.scss';

import Logo from '../logo/Logo';
import BtnRusEn from '../btnRusEn/BtnRusEn';
import Navbar from '../navbar/Navbar';
import Button from '../button/Button';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__flex">
                    <Logo />
                    <BtnRusEn />
                    <Navbar />
                    <Button />
                </div>
            </div>
            
        </header>
    );
};

export default Header;
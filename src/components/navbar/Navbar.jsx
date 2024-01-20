import React from 'react';

import { navLinks } from '../../constants';

import './navbar.scss';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className="nav__list">
                { navLinks.map((item, i) => 
                    <li className="nav__item" key={ i }>
                        <a href={ item.href } className="nav__link">{ item.label }</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};


export default Navbar;
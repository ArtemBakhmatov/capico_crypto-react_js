import React from 'react';
import Logo from '../logo/Logo';

import { footerText, documentsLinks, platformLinks, socialsLinks } from '../../constants/footer';


import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__block">
                        <Logo />
                        <div className="footer__text footer__text-copyright">
                            { footerText.copyright }
                        </div>
                    </div>

                    <div className="footer__block">
                        <div className="footer__text">
                            { footerText.titleSocial }
                        </div>

                        <ul className="footer__socialList">
                            { 
                                socialsLinks.map((item, i) => 
                                    <li className="footer__socialItem" key={ i }>
                                        <a href={ item.href } className='footer__socialLink'>
                                            { item.label }
                                        </a>
                                    </li>
                                )
                            }
                        </ul>

                        <a href='#' className="footer__mail">
                            { footerText.mail }
                        </a>
                    </div>

                    <div className="footer__block">
                        <div className="footer__title">
                            { footerText.titleDocuments }
                        </div>
                        <ul className="footer__list">
                            {
                                documentsLinks.map((item, i) => 
                                    <li className="footer__item" key={ i }>
                                        <a href={ item.href } className='footer__link'>{ item.label }</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="footer__block">
                        <div className="footer__title">
                            { footerText.titlePlatform }
                        </div>
                        <ul className="footer__list">
                            {
                                platformLinks.map((item, i) => 
                                    <li className="footer__item" key={ i }>
                                        <a href={ item.href } className='footer__link'>{ item.label }</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="footer__block">
                        <a href='#' className="footer__title footer__title-link">
                            { footerText.titleLogin }
                        </a>
                        <a href='#' className="footer__title footer__title-link">
                            { footerText.titleRegistration }
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
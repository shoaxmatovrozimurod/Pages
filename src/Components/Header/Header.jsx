import React, { useState } from 'react';
import './Header.css';
import Logo from './images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header'>
            <div className="container">
                <div className="header__container">
                    <a href="#" className="header__logo-link">
                        <img className='header__logo' src={Logo} alt="logotip rasmi" />
                    </a>

                    <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul className='header__list'>
                            <li>
                                <a className='header__item-link' href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                            </li>
                            <li>
                                <a className='header__item-link' href="#" onClick={() => setIsMenuOpen(false)}>About Us</a>
                            </li>
                        </ul>
                        <button className='header__item-btn header__item-btn--mobile'>Create your plan</button>
                    </nav>

                    <button className='header__item-btn header__item-btn--desktop'>Create your plan</button>

                    <button className={`burger-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
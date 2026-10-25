import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/" className="header__logo-link">
                        <img className='header__logo' src={Logo} alt="logotip rasmi" />
                    </Link>

                    <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul className='header__list'>
                            <li>
                                <Link className='header__item-link' to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link className='header__item-link' to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            </li>
                        </ul>
                        <Link to="/about" className='header__item-btn header__item-btn--mobile' onClick={() => setIsMenuOpen(false)}>Create your plan</Link>
                    </nav>

                    <Link to="/about" className='header__item-btn header__item-btn--desktop'>Create your plan</Link>

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
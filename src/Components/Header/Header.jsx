import React from 'react'
import './Header.css'
import Logo from './images/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__container">
                    <a href="#"><img className='header__logo' src={Logo} alt="logotip rasmi" /></a>
                    <ul className='header__list'>
                        <li><a className='header__item-link' href="#">Home</a></li>
                        <li><a className='header__item-link' href="#">ABOUT US</a></li>
                    </ul>
                    <button className='header__item-btn'>Create your plan</button>
                </div>
            </div>
        </header>
    )
}

export default Header
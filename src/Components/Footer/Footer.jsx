import React from 'react'
import './Footer.css'
import Logo from './images/logo.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__container">
                    <a href="#"><img className='footer__logo' src={Logo} alt="logotip rasmi" /></a>
                    <ul className='footer__list'>
                        <li><a className='footer__item-link' href="#">Home</a></li>
                        <li><a className='footer__item-link' href="#">ABOUT US</a></li>
                        <button className='footer__item-btn'>Create your plan</button>
                    </ul>
                    <div className="footer__mediya">
                        bu yerga tg linkedin va youtobe ni ishlidigon icn larini qo'yish kerak

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
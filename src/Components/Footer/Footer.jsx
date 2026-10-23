import React from 'react'
import './Footer.css'
import Logo from './images/logo.png'
import { FaTelegramPlane, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__container">
                    <a href="#">
                        <img className='footer__logo' src={Logo} alt="logotip rasmi" />
                    </a>
                    
                    <ul className='footer__list'>
                        <li><a className='footer__item-link' href="#">Home</a></li>
                        <li><a className='footer__item-link' href="#">ABOUT US</a></li>
                        <li><button className='footer__item-btn'>Create your plan</button></li>
                    </ul>

                    <div className="footer__mediya">
                        <a 
                            href="https://t.me/factlens_unesco_bot" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__mediya-link"
                            aria-label="Telegram"
                        >
                            <FaTelegramPlane />
                        </a>

                        <a 
                            href="https://linkedin.com/in/ro-zimurod-shoaxmatov-95a43a401" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__mediya-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a 
                            href="https://youtu.be/3U4CARSJFIc" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__mediya-link"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
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

                    {/* Ijtimoiy tarmoqlar havolalari */}
                    <div className="footer__mediya">
                        {/* Telegram sahifangiz: t.me/ dan keyin username yoziladi */}
                        <a 
                            href="https://t.me/foydalanuvchi_nomingiz" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__mediya-link"
                            aria-label="Telegram"
                        >
                            <FaTelegramPlane />
                        </a>

                        {/* LinkedIn sahifangiz: /in/ dan keyin profilingiz manzili yoziladi */}
                        <a 
                            href="https://www.linkedin.com/in/profilingiz" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__mediya-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        {/* YouTube sahifangiz: @ dan keyin kanal nomi yoki to'liq kanal linki yoziladi */}
                        <a 
                            href="https://www.youtube.com/@kanalingiz" 
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
import React from 'react'
import './About.css'
import Coffee from './images/img2.png'

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about__container">
                    <div className="about__box" >
                        <h2 className='about__box-title'>About Us</h2>
                        <p className='about__box-text'> Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
                    </div>
                    <img src={Coffee} width={500} height={500} alt="coffee mashinasi rasmi" />
                </div>
            </div>
        </section>
    )
}

export default About
import React from 'react'
import './HeroPages.css'
import Chashka from './images/img.png'

const HeroPages = () => {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero__container">
                    <div className="hero__box">
                        <h2 className='hero__box-title'>Good coffee is made simply.</h2>
                        <p className='hero__box-title'> Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                        <button className='hero__box-btn'>Create your plan</button>
                    </div>
                    <img src={Chashka} alt="Chashkadagi koffe" />

                </div>
            </div>
        </section>
    )
}

export default HeroPages
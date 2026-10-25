import React from 'react'
import './Feature.css'
import Kapuchino from './images/green.png'

const Feature = () => {
    return (
        <section className='feature'>
            <div className="container">
                <div className="feature__container">
                    <img src={Kapuchino} width={250} height={250} alt="coffee mashinasi rasmi" />
                    <div className="feature__box" >
                        <h2 className='feature__box-title'>Our commitment</h2>
                        <p className='feature__box-text'> We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and  initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feature
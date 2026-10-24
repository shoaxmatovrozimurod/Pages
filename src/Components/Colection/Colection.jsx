import React from 'react'
import './Colection.css'
import Pacet from './images/img1.png'

const Colection = () => {
  return (
    <main className='colection'>
        <div className="container">
            <div className="colection__container">
                <h3 className='colection__title'></h3>
                <ul className='colection__list'>
                    <li className='colection__item'>
                        <img src= {Pacet} alt="qog'oz pacet rasmi" />
                        

                    </li>
                </ul>

            </div>
        </div>
    </main>
  )
}

export default Colection
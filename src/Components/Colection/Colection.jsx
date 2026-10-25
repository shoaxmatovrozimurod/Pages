import React from 'react';
import './Colection.css';
import Pacet from './images/img1.png';

const Colection = () => {
    return (
        <main className='colection'>
            <div className="container">
                <div className="colection__container">
                    <h3 className='colection__title'>our collection</h3>

                    <ul className='colection__list'>
                        <li className='colection__item'>
                            <img className='colection__img' src={Pacet} alt="qog'oz paket rasmi" />
                            <div className="colection__content">
                                <h4 className='colection__item-title'>Danche</h4>
                                <p className='colection__item-text'>
                                    Ethiopian hand-harvested blend densely packed with vibrant fruit notes.
                                </p>
                            </div>
                        </li>

                        <li className='colection__item'>
                            <div className="colection__content">
                                <h4 className='colection__item-title'>Gran Espresso</h4>
                                <p className='colection__item-text'>
                                    Light and flavorful blend with cocoa and black pepper for an intense experience.
                                </p>
                            </div>
                            <img className='colection__img' src={Pacet} alt="qog'oz paket rasmi" />
                        </li>

                        <li className='colection__item'>
                            <img className='colection__img' src={Pacet} alt="qog'oz paket rasmi" />
                            <div className="colection__content">
                                <h4 className='colection__item-title'>Piccollo</h4>
                                <p className='colection__item-text'>
                                    Mild and smooth blend featuring notes of toasted almond and dried cherry.
                                </p>
                            </div>
                        </li>

                        <li className='colection__item'>
                            <div className="colection__content">
                                <h4 className='colection__item-title'>Planalto</h4>
                                <p className='colection__item-text'>
                                    Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.
                                </p>
                            </div>
                            <img className='colection__img' src={Pacet} alt="qog'oz paket rasmi" />
                        </li>

                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Colection;
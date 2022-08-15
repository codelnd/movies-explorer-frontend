import React from 'react';
import cardImg from '../../images/card_pic.png'
import './MoviesCard.css'

const MoviesCard = () => {
    return (
        <li className="card__item">
            <div className="card__wrapper">
                <div className="card__info">
                    <h2 className="card__title">33 слова о дизайне</h2>
                    <p className="card__duration">1ч 47м</p>
                </div>
                <button className="card__save-button"></button>
            </div>
            <img className="card__img" src={cardImg} alt="кадр из фильма"/>
        </li>
    );
};

export default MoviesCard;

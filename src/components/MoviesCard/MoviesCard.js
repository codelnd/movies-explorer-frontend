import React, { useState } from 'react';
import cardImg from '../../images/card_pic.png';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = () => {
  const location = useLocation();
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <li className="card__item">
      <div className="card__wrapper">
        <div className="card__info">
          <h2 className="card__title">33 слова о дизайне</h2>
          <p className="card__duration">1ч 47м</p>
        </div>
        <button
          className={`card__button_${
            location.pathname === '/saved-movies'
              ? 'remove'
              : liked
              ? 'liked'
              : 'save'
          }`}
          onMouseDown={handleLike}
        ></button>
      </div>
      <img className="card__img" src={cardImg} alt="кадр из фильма" />
    </li>
  );
};

export default MoviesCard;

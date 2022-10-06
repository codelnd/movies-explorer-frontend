import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

const MoviesCardList = () => {
  const location = useLocation();

  return (
    <section className="movies-cardlist">
      <ul className="card__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button
        type="button"
        className={`preloader__button preloader__button_${
          location.pathname === '/saved-movies' ? 'invisible' : ''
        }`}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({
  matchedMovies,
  showedMovies,
  savedMovies,
  noResult,
  isSearched,
  onMore,
  onSave,
  onRemove,
}) => {
  const location = useLocation();

  return (
    <section
      className={`movies-cardlist movies-cardlist_${
        noResult ? 'invisible' : ''
      }`}
    >
      <ul className="card__list">
        {showedMovies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onSave={onSave}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
      <button
        type="button"
        className={`preloader__button preloader__button_${
          location.pathname === '/saved-movies' ||
          matchedMovies.length === showedMovies.length
            ? 'invisible'
            : ''
        }
          ${noResult || !isSearched ? 'invisible' : ''}`}
        onClick={onMore}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

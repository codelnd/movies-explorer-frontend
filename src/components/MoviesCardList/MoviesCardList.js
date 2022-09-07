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

  // console.log(matchedMovies);
  // console.log(showedMovies);

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
            ></MoviesCard>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={onMore}
        className={`preloader__button preloader__button_${
          location.pathname === '/saved-movies' ||
          matchedMovies.length === showedMovies.length
            ? 'invisible'
            : ''
        }
          ${noResult || !isSearched ? 'invisible' : ''}`}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

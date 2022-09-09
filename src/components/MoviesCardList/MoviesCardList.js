import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  matchedMovies,
  showedMovies,
  savedMovies,
  noResult,
  isSearched,
  onMore,
  onSave,
  onRemove,
  isMoreButtonExist,
}) => {
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
          isMoreButtonExist ? '' : 'invisible'
        }
          ${noResult || !isSearched ? 'invisible' : ''}`}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;

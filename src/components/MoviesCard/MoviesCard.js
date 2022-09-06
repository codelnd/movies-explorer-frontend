import { useState, useEffect } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, savedMovies, onSave, onRemove }) => {
  const location = useLocation();
  const [liked, setLiked] = useState(false);
  const [time, setTime] = useState({});
  const [film, setFilm] = useState(movie);

  useEffect(() => {
    setLiked(false);
    savedMovies.forEach((saved) => {
      if ((film.id = saved.movieId || film.movieId === saved.movieId)) {
        setLiked(true);
        setFilm(savedMovies);
      }
    });
  }, [savedMovies]);

  useEffect(() => {
    setTime({
      hours: Math.floor(film.duration / 60),
      minutes: film.duration % 60,
    });
  }, [film]);

  function handleLike() {
    liked
      ? onRemove({ id: film._id })
      : onSave({
          country: film.country,
          director: film.director,
          duration: film.duration,
          year: film.year,
          description: film.description,
          image: film._id
            ? film.image
            : `https://api.nomoreparties.co/${film.image.url}`,
          trailerLink: film.trailerLink,
          nameRU: film.nameRU,
          nameEN: film.nameEN,
          thumbnail: film._id
            ? film.thumbnail
            : `https://api.nomoreparties.co/${film.image.formats.thumbnail.url}`,
          movieId: film._id ? film.movieId : film.id,
        });
  }

  return (
    <li className="card__item">
      <div className="card__wrapper">
        <div className="card__info">
          <h2 className="card__title">{film.nameRU}</h2>
          <p className="card__duration">{`${
            time.hours !== 0 ? time.hours + 'ч' : ''
          }${time.minutes !== 0 ? time.minutes + 'м' : ''}`}</p>
        </div>
        <button
          type="button"
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
      <a
        href={film.trailerLink}
        className="card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__img"
          src={
            !film.image.url
              ? film.image
              : `https://api.nomoreparties.co/${film.image.url}`
          }
          alt="кадр из фильма"
        />
      </a>
    </li>
  );
};

export default MoviesCard;

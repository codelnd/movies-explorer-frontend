import { useState } from 'react';
import { addMovie, getMovies, removeMovie } from '../utils/MainApi';

function useSaveMovie() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [movieError, setMovieError] = useState('');
  const [moviePopupOpen, setMoviePopupOpen] = useState(false);

  function getSavedMovies() {
    getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        setMovieError(err.message);
        setMoviePopupOpen(true);
      });
  }

  function handleSaveMovie(data) {
    addMovie(data)
      .then((saved) => {
        if (saved) {
          getSavedMovies();
        }
      })
      .catch((err) => {
        setMovieError(err.message);
        setMoviePopupOpen(true);
      });
  }

  function handleRemoveMovie(movieId) {
    removeMovie(movieId)
      .then((res) => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== res._id;
          })
        );
      })
      .catch((err) => {
        setMovieError(err.message);
        setMoviePopupOpen(true);
      });
  }

  return {
    movieError,
    setMovieError,
    savedMovies,
    moviePopupOpen,
    setMoviePopupOpen,
    getSavedMovies,
    handleSaveMovie,
    handleRemoveMovie,
  };
}

export default useSaveMovie;

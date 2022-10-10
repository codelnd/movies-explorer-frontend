import { useEffect, useState } from 'react';
import useResize from './useResize';
import useLocalStorage from './useLocalStorage';
import movies from '../components/Movies/Movies';
import { SHORT_MOVIE, TABLET_RESOLUTION } from '../utils/constants';

const useSearch = () => {
  const { width, count, row } = useResize();
  const [storageMovies, setStorageMovies] = useLocalStorage([], 'movies');
  const [storageCheckbox, setStorageCheckbox] = useLocalStorage('', 'checkbox');
  const [storageWord, setStorageWord] = useLocalStorage('', 'word');
  const [isLoading, setIsLoading] = useState(false);
  const [matchedMovies, setMatchedMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [userMatchedMovies, setUserMatchedMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [noUserResult, setNoUserResult] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isUsersFilmsSearched, setIsUsersFilmsSearched] = useState(false);

  useEffect(() => {
    setMatchedMovies(storageMovies);
    setShortMovie(storageCheckbox);
  }, []);

  useEffect(() => {
    setShowedMovies(matchedMovies.slice(0, count * row));
  }, [row, count, matchedMovies]);

  useEffect(() => {
    if (isSearched && !matchedMovies[0]) {
      setNoResult(true);
      setIsLoading(false);
      return;
    } else {
      setNoResult(false);
    }
    if (isUsersFilmsSearched && !userMatchedMovies[0]) {
      setNoUserResult(true);
      setIsLoading(false);
      return;
    } else setNoUserResult(false);
    setIsLoading(false);
  }, [isSearched, isUsersFilmsSearched, matchedMovies, userMatchedMovies]);

  function filterMovies(word, moviesCollection) {
    setIsLoading(true);
    setTimeout(() => {
      const searchWord = word.replace(/\s\s+/g, ' ').replace(/^\s+|\s+$/g, '');
      setStorageWord(searchWord);
      const regex = new RegExp(`${searchWord}`, 'i');

      if (shortMovie) {
        const shortMoviesList = moviesCollection.filter((movie) => {
          if (Object.values(movie).every((film) => film !== null)) {
            return (
              (movie.nameRU.match(regex) || movie.nameEN.match(regex)) &&
              movie.duration <= SHORT_MOVIE
            );
          }
        });
        setMatchedMovies(shortMoviesList);
        setStorageMovies(shortMoviesList);
        setStorageCheckbox(shortMovie);
      } else {
        const moviesList = moviesCollection.filter((movie) => {
          if (Object.values(movie).every((film) => film !== null)) {
            return movie.nameRU.match(regex) || movie.nameEN.match(regex);
          }
        });
        setMatchedMovies(moviesList);
        setStorageMovies(moviesList);
        setStorageCheckbox('');
      }
      setIsSearched(true);
    }, 1000);
  }

  function filterSavedMovies(word, usersCollection) {
    const regex = new RegExp(`${word}`, 'i');

    if (shortMovie) {
      const shortMoviesList = usersCollection.filter((movie) => {
        if (movie.nameEN !== null) {
          return (
            (movie.nameRU.match(regex) || movie.nameEN.match(regex)) &&
            movie.duration <= SHORT_MOVIE
          );
        }
      });
      setUserMatchedMovies(shortMoviesList);
    } else {
      const moviesList = usersCollection.filter((movie) => {
        if (movie.nameEN !== null) {
          return movie.nameRU.match(regex) || movie.nameEN.match(regex);
        }
      });
      setUserMatchedMovies(moviesList);
    }
    setIsUsersFilmsSearched(true);
  }

  function handleMoreButton() {
    if (width < TABLET_RESOLUTION) {
      setShowedMovies(matchedMovies.slice(0, showedMovies.length + count * 5));
    } else {
      setShowedMovies(matchedMovies.slice(0, showedMovies.length + count));
    }
  }

  return {
    matchedMovies,
    setMatchedMovies,
    showedMovies,
    setShowedMovies,
    userMatchedMovies,
    setUserMatchedMovies,
    shortMovie,
    noResult,
    isSearched,
    isLoading,
    isUsersFilmsSearched,
    setIsUsersFilmsSearched,
    storageCheckbox,
    storageWord,
    setShortMovie,
    filterMovies,
    filterSavedMovies,
    handleMoreButton,
    noUserResult,
  };
};
export default useSearch;

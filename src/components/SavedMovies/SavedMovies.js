import React, { useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import NoResult from '../NoResult/NoResult';

function SavedMovies({
  loggedIn,
  savedMovies,
  userMatchedMovies,
  setUserMatchedMovies,
  shortMovie,
  noResult,
  isUsersFilmsSearched,
  setIsUsersFilmsSearched,
  setShortMovie,
  filterSavedMovies,
  getSavedMovies,
  onRemove,
}) {
  useEffect(() => {
    setIsUsersFilmsSearched(false);
    setShortMovie(false);
    getSavedMovies();
  }, []);

  useEffect(() => {
    let matchedList = [];
    userMatchedMovies.map((matchedMovie) => {
      return savedMovies.forEach((savedMovie) => {
        if (matchedMovie._id === savedMovie._id) {
          matchedList.push(matchedMovie);
        }
      });
    });
    setUserMatchedMovies(matchedList);
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <motion.section
        className="saved-movies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SearchForm
          filmsCollection={savedMovies}
          shortMovie={shortMovie}
          setShortMovie={setShortMovie}
          onSearch={filterSavedMovies}
        />
        {noResult && <NoResult />}
        <MoviesCardList
          savedMovies={savedMovies}
          noResult={noResult}
          showedMovies={!isUsersFilmsSearched ? savedMovies : userMatchedMovies}
          onRemove={onRemove}
        />
      </motion.section>
      <Footer />
    </>
  );
}

export default SavedMovies;

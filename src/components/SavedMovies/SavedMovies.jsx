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
    let userMatchedList = [];
    userMatchedMovies.map((matchedMovie) => {
      return savedMovies.forEach((savedMovie) => {
        if (matchedMovie._id === savedMovie._id) {
          userMatchedList.push(matchedMovie);
        }
      });
    });
    setUserMatchedMovies(userMatchedList);
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
          filmsList={savedMovies}
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
          isMoreButtonExist={false}
        />
      </motion.section>
      <Footer />
    </>
  );
}

export default SavedMovies;

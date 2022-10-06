import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

function Movies({
  loggedIn,
  filmsCollection,
  matchedMovies,
  showedMovies,
  shortMovie,
  setShortMovie,
  noResult,
  isSearched,
  isLoading,
  savedMovies,
  storageWord,
  storageCheckbox,
  setIsUsersFilmsSearched,
  getSavedMovies,
  onSave,
  onRemove,
  filterMovies,
  handleMoreButton,
}) {
  useEffect(() => {
    getSavedMovies();
    setIsUsersFilmsSearched(false);
    setShortMovie(storageCheckbox);
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <motion.section
        className="movies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SearchForm
          filmsList={filmsCollection}
          shortMovie={shortMovie}
          storageWord={storageWord}
          setShortMovie={setShortMovie}
          onSearch={filterMovies}
        />
        {isLoading && <Preloader />}
        {noResult && <NoResult />}
        <MoviesCardList
          matchedMovies={matchedMovies}
          showedMovies={showedMovies}
          savedMovies={savedMovies}
          noResult={noResult}
          isSearched={isSearched}
          onMore={handleMoreButton}
          onSave={onSave}
          onRemove={onRemove}
          isMoreButtonExist={matchedMovies.length !== showedMovies.length}
        />
      </motion.section>
      <Footer />
    </>
  );
}

export default Movies;

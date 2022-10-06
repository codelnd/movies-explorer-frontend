import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

function SavedMovies({ loggedIn, login }) {
  return (
    <>
      <Header loggedIn={loggedIn} login={login} />
      <motion.section
        className="saved-movies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SearchForm />
        <MoviesCardList />
      </motion.section>
      <Footer />
    </>
  );
}

export default SavedMovies;

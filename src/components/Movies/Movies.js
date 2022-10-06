import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import NoResult from '../NoResult/NoResult';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

function Movies({ loggedIn, login }) {
  return (
    <>
      <Header loggedIn={loggedIn} login={login} />
      <motion.section
        className="movies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SearchForm />
        {/*<Preloader/>*/}
        {/*<NoResult/>*/}
        <MoviesCardList />
      </motion.section>
      <Footer />
    </>
  );
}

export default Movies;

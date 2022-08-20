import React from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function SavedMovies({loggedIn, login}) {

    return (
        <>
            <Header loggedIn={loggedIn} login={login}/>
            <section className="saved-movies">
                <SearchForm/>
                <MoviesCardList/>
            </section>
            <Footer/>
        </>
    );
}

export default SavedMovies;




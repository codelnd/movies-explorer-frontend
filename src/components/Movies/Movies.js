import React from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <>
            <Header/>
            <section className="movies">
                <SearchForm/>
                <MoviesCardList/>
                <Preloader/>
            </section>
            <Footer/>
        </>
    );
}

export default Movies;




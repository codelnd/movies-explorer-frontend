import React from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NoResult from "../NoResult/NoResult";

function Movies() {
    return (
        <>
            <Header/>
            <section className="movies">
                <SearchForm/>
                {/*<Preloader/>*/}
                {/*<NoResult/>*/}
                <MoviesCardList/>
            </section>
            <Footer/>
        </>
    );
}

export default Movies;




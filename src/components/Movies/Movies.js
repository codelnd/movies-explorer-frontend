import React from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import NoResult from "../NoResult/NoResult";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({loggedIn, login}) {

    return (
        <>
            <Header loggedIn={loggedIn} login={login}/>
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




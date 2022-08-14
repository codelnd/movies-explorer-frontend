import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import {Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="page">
            <div className="page__container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/saved-movies" element={<SavedMovies/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/signin" element={<Login/>}/>
                    <Route path="/signup" element={<Register/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

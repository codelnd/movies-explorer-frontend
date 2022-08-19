import React from 'react';
import './App.css';
import Main from "../Main/Main";
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
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/saved-movies" element={<SavedMovies/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/signin" element={<Login title="Рады видеть!"/>}/>
                    <Route path="/signup" element={<Register title="Добро пожаловать!"/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

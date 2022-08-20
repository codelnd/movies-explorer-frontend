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
import useLogin from "../../hooks/useLogin";

// Плавная анимация страниц, infoPopup, валидация формы


function App() {

    const { loggedIn, login, logout } = useLogin();

    return (
        <div className="page">
            <div className="page__container">
                <Routes>
                    <Route path="/" element={<Main loggedIn={loggedIn} login={login}/>}/>
                    <Route path="/movies" element={<Movies loggedIn={loggedIn} login={login}/>}/>
                    <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} login={login}/>}/>
                    <Route path="/profile" element={<Profile loggedIn={loggedIn} logout={logout}/>}/>
                    <Route path="/signin" element={<Login title="Рады видеть!" loggedIn={loggedIn} login={login}/>}/>
                    <Route path="/signup" element={<Register title="Добро пожаловать!" loggedIn={loggedIn} login={login}/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

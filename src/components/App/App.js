import React, { useEffect, useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import useAuth from '../../hooks/useAuth';
import { CurrentUserContext } from '../CurrentUserContext/CurrentUserContext';
import Tooltip from '../Tooltip/Tooltip';
import useSearch from '../../hooks/useSearch';
import useSaveMovie from '../../hooks/useSaveMovie';

function App() {
  const location = useLocation();

  const {
    loggedIn,
    authError,
    currentUser,
    confirm,
    popupOpen,
    filmsCollection,
    inputDisabled,
    setInputDisabled,
    setPopupOpen,
    handleRegister,
    handleLogin,
    handleLogout,
    handleUpdateUser,
  } = useAuth();

  const {
    matchedMovies,
    showedMovies,
    userMatchedMovies,
    setUserMatchedMovies,
    shortMovie,
    noResult,
    isLoading,
    isSearched,
    isUsersFilmsSearched,
    setIsUsersFilmsSearched,
    storageCheckbox,
    storageWord,
    setShortMovie,
    filterMovies,
    filterSavedMovies,
    handleMoreButton,
    noUserResult,
  } = useSearch();

  const {
    savedMovies,
    moviePopupOpen,
    setMoviePopupOpen,
    movieError,
    getSavedMovies,
    handleSaveMovie,
    handleRemoveMovie,
  } = useSaveMovie();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main loggedIn={loggedIn} />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Movies
                      loggedIn={loggedIn}
                      filmsCollection={filmsCollection}
                      matchedMovies={matchedMovies}
                      showedMovies={showedMovies}
                      shortMovie={shortMovie}
                      noResult={noResult}
                      isSearched={isSearched}
                      isLoading={isLoading}
                      savedMovies={savedMovies}
                      storageWord={storageWord}
                      storageCheckbox={storageCheckbox}
                      setIsUsersFilmsSearched={setIsUsersFilmsSearched}
                      setShortMovie={setShortMovie}
                      filterMovies={filterMovies}
                      getSavedMovies={getSavedMovies}
                      handleMoreButton={handleMoreButton}
                      onSave={handleSaveMovie}
                      onRemove={handleRemoveMovie}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <SavedMovies
                      loggedIn={loggedIn}
                      savedMovies={savedMovies}
                      userMatchedMovies={userMatchedMovies}
                      setUserMatchedMovies={setUserMatchedMovies}
                      shortMovie={shortMovie}
                      noResult={noUserResult}
                      isUsersFilmsSearched={isUsersFilmsSearched}
                      setIsUsersFilmsSearched={setIsUsersFilmsSearched}
                      setShortMovie={setShortMovie}
                      filterSavedMovies={filterSavedMovies}
                      getSavedMovies={getSavedMovies}
                      onRemove={handleRemoveMovie}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Profile
                      loggedIn={loggedIn}
                      onLogout={handleLogout}
                      onUpdate={handleUpdateUser}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    onLogin={handleLogin}
                    inputDisabled={inputDisabled}
                    setInputDisabled={setInputDisabled}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Register
                    confirm={confirm}
                    onRegister={handleRegister}
                    inputDisabled={inputDisabled}
                    setInputDisabled={setInputDisabled}
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Tooltip
              isConfirm={confirm}
              isError={[authError, movieError]}
              isOpen={[popupOpen, moviePopupOpen]}
              onClose={[setPopupOpen, setMoviePopupOpen]}
            ></Tooltip>
          </AnimatePresence>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

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
import useTooltip from '../../hooks/useTooltip';
import { getUser, updateUser } from '../../utils/MainApi';
import CurrentUserContext from '../CurrentUserContext/CurrentUserContext';
import Tooltip from '../Tooltip/Tooltip';

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});

  const {
    isConfirm: profileConfirm,
    isPopupOpen: profilePopup,
    isError: profileError,
    changePopup: changeProfilePopup,
    changeConfirm: changeProfileConfirm,
    changeError: changeProfileError,
  } = useTooltip();

  const {
    loggedIn,
    authConfirm,
    authPopup,
    authError,
    checkAuth,
    checkPath,
    changeAuthPopup,
    handleRegister,
    handleLogin,
    handleLogout,
  } = useAuth();

  useEffect(() => {
    checkAuth();
    checkPath();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getUser()
        .then((user) => {
          setCurrentUser({
            _id: user._id,
            username: user.name,
            email: user.email,
          });
          checkPath();
        })
        .catch((err) => {
          changeProfileError(err.message);
          changeProfilePopup(true);
        });
    }
  }, [loggedIn]);

  function closePopup() {
    changeAuthPopup(false);
    changeProfilePopup(false);
  }

  function updateUserData({ name, email }) {
    updateUser(name, email)
      .then((newData) => {
        setCurrentUser({
          ...currentUser,
          username: newData.name,
          email: newData.email,
        });
        changeProfileConfirm(true);
        changeProfilePopup(true);
        setTimeout(() => changeProfilePopup(false), 3000);
      })
      .catch((err) => {
        changeProfileError(err.message);
        changeProfileConfirm(false);
        changeProfilePopup(true);
      });
  }

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
                    <Movies loggedIn={loggedIn} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <SavedMovies loggedIn={loggedIn} />
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
                      onUpdate={updateUserData}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/signin" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/signup"
                element={
                  <Register
                    authConfirm={authConfirm}
                    onRegister={handleRegister}
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Tooltip
              isConfirm={[authConfirm, profileConfirm]}
              isError={[authError, profileError]}
              isPopupOpen={[authPopup, profilePopup]}
              onClose={closePopup}
            ></Tooltip>
          </AnimatePresence>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

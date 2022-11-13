import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;

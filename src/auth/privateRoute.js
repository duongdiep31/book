import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticate } from '../ultis';
    
function PrivateRoute({ children }) {
    const auth = isAuthenticate();
    return auth ? children : <Navigate to="/signin" />;
  }

export default PrivateRoute;

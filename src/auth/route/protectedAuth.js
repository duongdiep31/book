import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticate } from '../../ultis';
    
function ProtectedAuth({ children }) {
    const user = isAuthenticate();
    return  user ? <Navigate to="/" /> : children
  }

export default ProtectedAuth;

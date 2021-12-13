import React from 'react';
import { Navigate } from 'react-router';
import store from '../../Store';
    
function ProtectedAuth({ children }) {
  const user = store.getState().auth.auth
    return  user ? <Navigate to="/" /> : children
  }

export default ProtectedAuth;

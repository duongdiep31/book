import React from 'react';
import { Navigate } from 'react-router';
import store from '../../Store';
    
function ProtectedAuth({ children }) {
  const users = store.getState().auth.auth
    return  users ? <Navigate to="/" /> : children
  }
export default ProtectedAuth;

import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticate } from '../../ultis';
    
function ProtectedUser({ children }) {
    const {user} = isAuthenticate();
    if (user) {
        return user.role === '0' || user.role === '2' ? children : <Navigate to="/404" />;
      }else{
        return <Navigate to='/signin' />
      }
  }

export default ProtectedUser;

import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticate } from '../../ultis';
    
function PrivateRoute({ children }) {
    const {user} = isAuthenticate();
      if (user) {
        return user.role !== '1' ? children : <Navigate to="/404" />;
      }else{
        return <Navigate to='/signin' />
      }
  }

export default PrivateRoute;

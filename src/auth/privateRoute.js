import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticate } from '../ultis';
    
function PrivateRoute({ children }) {
    const {user} = isAuthenticate();
    console.log('auth',user);
      if (user) {
        return user.role === '0' ? children : <Navigate to="/" />;
      }else{
        return <Navigate to='/signin' />
      }
  }

export default PrivateRoute;

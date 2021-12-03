import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import  store from '../../Store';
    
function PrivateRoute({ children }) {
      const auth = useSelector((state) => state.auth.auth)
      if (auth) {
        return auth.user.role !== '1' ? children : <Navigate to="/404" />;

      }else{
        return <Navigate to='/signin' />

      }
  }

export default PrivateRoute;

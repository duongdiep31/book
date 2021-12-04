import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
function PrivateRoute({ children }) {
      const auth = useSelector((state) => state.auth.auth)
      if (auth) {
        return auth.role !== '1' ? children : <Navigate to="/404" />;
      }else{
        return <Navigate to='/' />

      }
  }

export default PrivateRoute;
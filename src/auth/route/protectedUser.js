import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
function ProtectedUser({ children }) {
  const auth =useSelector((state) => state.auth.auth.users)
    if (auth) {
        return auth.role === '0' || auth.role === '2' ? children : <Navigate to="/404" />;
      }else{
        return <Navigate to='/signin' />
      }
  }
export default ProtectedUser;

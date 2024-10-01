import React from 'react'
// import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"


const ProtectedRoute = ({ flag, children }) => {
    if (!flag) {
      return <Navigate to="/" />;
    }
    return children;
  };

export default ProtectedRoute;                                       
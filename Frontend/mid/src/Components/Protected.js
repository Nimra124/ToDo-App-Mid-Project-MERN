import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  
    let auth=localStorage.getItem("user");

   return (auth)?( <Outlet/> ):( <Navigate to="/"/>)
}

export default Protected

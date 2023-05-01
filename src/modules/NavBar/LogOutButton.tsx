import React from 'react';

import { Route,Routes,Link, useNavigate } from "react-router-dom";

import Login from '../login/views/Login';
import ProviderView from '../providers/Views/ProviderView';
import User from '../user/views/User';

import ProductView from '../Product/views/ProductView';
import UserView from '../Users/views/UsersView';

const LogOut = () => {
 
  const navigate = useNavigate()
const logout = () => {
  localStorage.removeItem('user');
  navigate('/login');
}
  
  return (
    <>
    
    <button 
    onClick={() => {
      logout()
    }}
     type="button" className="btn btn-danger">LogOut</button>&nbsp;&nbsp;&nbsp;&nbsp;

  </>
  )
}

export default LogOut
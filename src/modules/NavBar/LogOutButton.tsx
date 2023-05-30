import React from 'react';

import { Route,Routes,Link, useNavigate } from "react-router-dom";

import Login from '../login/views/Login';
import ProviderView from '../providers/Views/ProviderView';
import User from '../user/views/User';

import ProductView from '../Product/views/ProductView';
import UserView from '../Users/views/UsersView';

interface LogOutProps {
  logout: () => void;
}

const LogOut: React.FC<LogOutProps> = ({ logout }) => {
 
  const navigate = useNavigate()
const handleLogout = () => {
  localStorage.removeItem('user');
  logout();
  navigate('/login');
}
  
  return (
    <>
    
    <button
        onClick={handleLogout}
        type="button"
        className="btn btn-danger"
      >
        Log Out
      </button>&nbsp;&nbsp;&nbsp;&nbsp;

  </>
  )
}

export default LogOut
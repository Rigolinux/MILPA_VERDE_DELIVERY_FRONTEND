import React from 'react';

import { Route,Routes,Link, useNavigate } from "react-router-dom";

import Login from '../../login/views/Login';
import ProviderView from '../../providers/Views/ProviderView';
import User from '../../user/views/User';




const Home = () => {
 
  const navigate = useNavigate()
const logout = () => {
  localStorage.removeItem('user');
  navigate('/login');
}
  
  return (
    <>
    <h1>Home</h1>
    <button 
    onClick={() => {
      logout()
    }}
     type="button" className="btn btn-danger">LogOut</button>
    <Link to="/users">Users</Link>
    <Link to="/providers">Providers</Link>
    <Routes>
      <Route path="/users/" element={<User />} />
      <Route path="/providers/" element={<ProviderView />} />
    </Routes>
  </>
  )
}

export default Home
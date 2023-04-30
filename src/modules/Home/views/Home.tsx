import React from 'react';

import { Route,Routes,Link, useNavigate } from "react-router-dom";

import Login from '../../login/views/Login';
import ProviderView from '../../providers/Views/ProviderView';
import User from '../../user/views/User';

import ProductView from '../../Product/views/ProductView';
import UserView from '../../Users/views/UsersView';

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
     type="button" className="btn btn-danger">LogOut</button>&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <Link to="/users">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp; */}
    <Link to="/providers">Providers</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/users">Users</Link>
    <Routes>
      <Route path="/users/" element={<User />} />
      <Route path="/providers/" element={<ProviderView />} />
      <Route path="/products" element={<ProductView />} />
      <Route path="/users" element={<UserView />} />
      <Route path="/orders" element={<Login />} />
    </Routes>
  </>
  )
}

export default Home
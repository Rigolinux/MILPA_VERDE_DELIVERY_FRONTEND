import React from 'react';

import { Route,Routes,Link } from "react-router-dom";

import Login from '../../login/views/Login';
import ProviderView from '../../providers/Views/ProviderView';
import User from '../../user/views/User';


const Home = () => {

  
  return (
    <>
    <h1>Home</h1>
    <Link to="/users">Users</Link>
    <Link to="/providers">Providers</Link>
    <Routes>
      <Route path="/users/*" element={<User />} />
      <Route path="/providers/*" element={<ProviderView />} />
    </Routes>
  </>
  )
}

export default Home
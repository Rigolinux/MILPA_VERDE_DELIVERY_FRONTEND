import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'

import { Route,Routes, useNavigate } from "react-router-dom";


import Login from './modules/login/views/Login';
import User from './modules/user/views/User';
import ProviderView from './modules/providers/Views/ProviderView';
import Home from './modules/Home/views/Home';

import ProtectedRoute from './Auth/useAuth';
import View from './modules/Home/views/View';
import NavBar from './modules/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    
}, [])


  return (
    <div className="App">
      
      {/* <h1 className='text-center'>Milpa Verde</h1> */}
      {/* // navbar anonimo

      // navbar logeado 
      
      */}
    <NavBar />

      <Routes>
          <Route path="/login" element={<Login />} />
          
        <Route element={<ProtectedRoute />} >

            <Route path="/" element={<Home />} />
            <Route path="/home/products" element={<View />} />
              <Route path="/users" element={<User />} />
              <Route path="/providers" element={<ProviderView />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App

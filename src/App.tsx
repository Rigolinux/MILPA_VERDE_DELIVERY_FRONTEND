import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'

import { Route,Routes } from "react-router-dom";


import Login from './modules/login/views/Login';
import User from './modules/user/views/User';
import ProviderView from './modules/providers/Views/ProviderView';
import Home from './modules/Home/views/Home';

import ProtectedRoute from './Auth/useAuth';


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const user = {
        name: 'test',
        email: ''
    }
    localStorage.setItem('user', JSON.stringify(user))
    
}, [])

  return (
    <div className="App">
      <div>
       
      </div>
      <h1 className='bg-slate-800'>Vite + React</h1>
      <Routes>
          <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />} >
        <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/providers" element={<ProviderView />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App

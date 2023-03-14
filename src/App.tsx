import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route,Routes } from "react-router-dom";

import Login from './modules/login/views/Login';
import User from './modules/user/views/User';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )
}

export default App

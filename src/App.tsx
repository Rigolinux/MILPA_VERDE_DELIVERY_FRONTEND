import { useState,useEffect } from 'react';
import reactLogo from './assets/react.svg'

import { Route,Routes, useNavigate } from "react-router-dom";


import Login from './modules/login/views/Login';
// import User from './modules/user/views/User';
import ProviderView from './modules/providers/Views/ProviderView';
import Home from './modules/Home/views/Home';

import ProtectedRoute from './Auth/useAuth';
import View from './modules/Home/views/View';
import NavBar from './modules/NavBar/NavBar';
import ProviderDetails from './modules/providers/Views/ProviderDetails';
import ProviderAdd from './modules/providers/Views/ProviderAdd';


import ProductView from './modules/Product/views/ProductView';
import ProductDetails from './modules/Product/views/ProductDetails';
import ProductAdd from './modules/Product/views/ProductAdd';

import UsersView from './modules/Users/views/UsersView';
import UsersDetails from './modules/Users/views/UsersDetails';
import UsersAdd from './modules/Users/views/UsersAdd';
import About from './modules/About/About';
import BOrderview from './modules/BOrders/views/BOrderview';

import { useLocation } from 'react-router-dom';
import Register from './modules/login/views/Register';

function App() {
  const location = useLocation();
  
  const [login, setlogin] = useState(false)
  useEffect(() => {
    // add path register when is ready
    if(location.pathname === '/login' || location.pathname === '/register'){
      setlogin(true)
    }else{
      setlogin(false)
    }
}, [location])


  return (
    <div className="App">
      
      {/* <h1 className='text-center'>Milpa Verde</h1> */}
      {/* // navbar anonimo

      // navbar logeado 
      
      */}
    {
      login ? null : <NavBar />
    }

      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        <Route element={<ProtectedRoute />} >

            <Route path="/" element={<Home />} />
            <Route path="/home/products" element={<View />} />
              {/* <Route path="/users" element={<User />} /> */}

              <Route path="/providers" element={<ProviderView />} />
              <Route path="/providers/add" element={<ProviderAdd />} />
              <Route path="/providers/:id" element={<ProviderDetails   />} />

              <Route path="/products"   element={<ProductView />} />
              <Route path="/products/add" element={<ProductAdd />} />
              <Route path="/products/:id" element={<ProductDetails />} />

              <Route path="/users" element={<UsersView />} />
              <Route path="/users/add" element={<UsersAdd />} />
              <Route path="/users/:id" element={<UsersDetails />} />

              <Route path="/orders" element={<BOrderview/>} />

              {/* <Route path="/products" element={<ProductDetails />} />
              <Route path="/products/add" element={<ProductDetails />} />
              <Route path="/products/:id" element={<ProductDetails />} /> */}


              <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App

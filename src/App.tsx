import { useState,useEffect } from 'react';
import reactLogo from './assets/react.svg'

import { Navigate, Route,Routes, useNavigate } from "react-router-dom";

import Login from './modules/login/views/Login';
// import User from './modules/user/views/User';
import ProviderView from './modules/providers/Views/ProviderView';

import Home from './modules/Home/views/Home';

import ProtectedRoute from './Auth/useAuth';
import View from './modules/Home/views/View';
import NavBar from './modules/NavBar/NavBar';
import ProviderDetails from './modules/providers/Views/ProviderDetails';
import ProviderAdd from './modules/providers/Views/ProviderAdd';

import ProductView    from './modules/Product/views/ProductView';
import ProductDetails from './modules/Product/views/ProductDetails';
import ProductAdd     from './modules/Product/views/ProductAdd';

// Imports de ventas
import SalesGraphicsView  from './modules/SalesGraphics/views/SalesGraphicsView';
import SalesView          from './modules/Sales/views/SalesView';

// Imports de articulos
import ProductCustomerHome from './modules/ProductsCustomer/views/ProductCustomerHome';
import ProductCustomerHomeDetails from './modules/ProductsCustomer/views/ProductCustomerDetails';

// Imports de cart
import CartView from './modules/Cart/views/CartView';
import Test from './modules/Cart/views/Test';

// Imports de Historial
import HistoryView from './modules/history/views/HistoryView';
import HistoryViewAdm from './modules/history/views/HistoryViewAdm';

import ArticlesView from './modules/ProductsCustomer/views/ArticlesView';
// import ArticlesDetails from './modules/ProductsCustomer/views/ArticlesDetails';


import UsersView from './modules/Users/views/UsersView';
import UsersDetails from './modules/Users/views/UsersDetails';
import UsersAdd from './modules/Users/views/UsersAdd';
import About from './modules/About/About';
import BOrderview from './modules/BOrders/views/BOrderview';
import Banner from './modules/Home/Banner';
import ProductsOwnerview from './modules/productsOwner/views/productsOwnerview';

import { useLocation } from 'react-router-dom';
import Register from './modules/login/views/Register';
import Footer from './modules/Footer/Footer';
import PaymentView from './modules/paymentMethod/views/PaymentView';
import { User } from './interfaces/User';
import Print from './modules/printModule/views/Print';
import Uploader from './modules/images/views/Uploader';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  /* 
  
  var x= {
    name: 'jose',
    role: 'admin'
  }
  localStorage.setItem('jose',JSON.stringify(x));

  const nombre = localStorage.getItem('jose');

  const user:User = nombre ? JSON.parse(nombre) : {name:'',role:''};
  
  console.log(user); 
  */
  const [login, setlogin] = useState(false)
  useEffect(() => {
    // add path register when is ready
   
    if(location.pathname === '/login' || location.pathname === '/register'){
      setlogin(true)
    }else{
      setlogin(false)
    }
}, [location])

  
  const [footer, setfooter] = useState(false)
  useEffect(() => {
    //Conditions to validate footer only below  view
    if(location.pathname === '/'){
      setfooter(false)
    }else{
      setfooter(true)
    }
}, [location])

const verifyAuthentication = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser).user : "";
  
  if(user.role == 'admin'){
    return true
  }
  return false
}

const verifyRole = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser).user : '';
  return user.role === 'admin';
};

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
          <Route path="/uploaderImg" element={<Uploader />} />
          {/* <Route path="/articles" element={<ProductCustomerHome />} /> */}
              <Route path="/about"  element={<About/>} />
              <Route path="/" element={<Banner/>} />
            
        <Route element={<ProtectedRoute />} >

            <Route path="/home/products" element={<View />} />
              {/* <Route path="/users" element={<User />} /> */}
              <Route path="/managearticles" element={ <ProductsOwnerview />} />
              <Route path="/providers"      element={ verifyAuthentication() ?  <ProviderView /> :    <Navigate to="/" replace /> } />
              <Route path="/providers/add"  element={ verifyAuthentication() ?  <ProviderAdd /> :     <Navigate to="/" replace /> } />
              <Route path="/providers/:id"  element={ verifyAuthentication() ?  <ProviderDetails/> :  <Navigate to="/" replace /> } />

              <Route path="/products"     element={ verifyAuthentication() ?  <ProductView /> :     <Navigate to="/" replace /> } />
              <Route path="/products/add" element={ verifyAuthentication() ?  <ProductAdd /> :      <Navigate to="/" replace /> } />
              <Route path="/products/:id" element={ verifyAuthentication() ?  <ProductDetails /> :  <Navigate to="/" replace /> } />

              {/* <Route path="/sales" element={<SalesGraphicsView />} /> */}
              <Route path="/salesgraphics" element={ verifyAuthentication() ?  <SalesGraphicsView /> : <Navigate to="/" replace /> } />

              <Route path="/sales" element={ verifyAuthentication() ?  <SalesView /> : <Navigate to="/" replace /> } />

              <Route path="/users"      element={ verifyAuthentication() ?  <UsersView /> :    <Navigate to="/" replace /> } />
              <Route path="/users/add"  element={ verifyAuthentication() ?  <UsersAdd /> :     <Navigate to="/" replace /> } />
              <Route path="/users/:id"  element={ verifyAuthentication() ?  <UsersDetails /> : <Navigate to="/" replace /> } />

              <Route path="/articles"     element={<ProductCustomerHome />} />
              <Route path="/articles/:id" element={<ProductCustomerHomeDetails  />} />
              {/* <Route path="/articlesview" element={<ArticlesView />} /> */}

              <Route path="/cart" element={<CartView />} />
              <Route path="/test" element={<Test />} />

              {/* <Route path="/history" element={<HistoryView />} />
              <Route path="/history" element={<HistoryViewAdm />} /> */}
              

              
              <Route path="/history" element={verifyAuthentication() ? (verifyRole() ? <HistoryViewAdm /> : <HistoryView />) : <Navigate to="/" replace /> } />



              <Route path="/orders" element={ verifyAuthentication() ?  <BOrderview/> : <Navigate to="/" replace /> } />

              <Route path="/payment" element={ verifyAuthentication() ?  <PaymentView /> : <Navigate to="/" replace /> } />

              

              {/* <Route path="/products" element={<ProductDetails />} />
              <Route path="/products/add" element={<ProductDetails />} />
              <Route path="/products/:id" element={<ProductDetails />} /> */}
              
        </Route>
      </Routes>

      {
      footer ? null : <Footer />
      }

    </div>
  )
}

export default App

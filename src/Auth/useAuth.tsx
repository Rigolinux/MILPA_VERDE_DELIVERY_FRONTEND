import React from 'react'
import { Navigate, Outlet } from 'react-router'
import Login from '../modules/login/views/Login'


const useAuth = () => {
  const user = localStorage.getItem('user')
  return user
}

const ProtectedRoute = () => {
    const user = useAuth()
    
    return user ?  <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
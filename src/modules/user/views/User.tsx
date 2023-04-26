import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }
  return (
    <div>
       <button 
    onClick={() => {
      logout()
    }}
     type="button" className="btn btn-danger">LogOut</button>
      <h1>User</h1>
    </div>
  )
}

export default User
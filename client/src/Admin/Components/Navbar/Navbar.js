import React from 'react';
import "./AdminNavbar.css";
import { useAuth } from '../../../context/authContext';
import { NavLink } from "react-router-dom";
import { FaCircleNotch, FaHome, FaPowerOff } from "react-icons/fa";

const AdminNavbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className='AdminNavbarContainer'>
      <h1>{currentUser?.firstName}</h1>
      <nav>
        <NavLink 
          to="/" 
          activeClassName="active" 
          className="navLink"
        >
          <FaHome className='icon' size="20px"/> 
          <p>General home</p>
        </NavLink>

        <NavLink 
          to={`/admin/dashboard`} 
          activeClassName="active" 
          className="navLink"
        >
          <FaCircleNotch className='icon' size="20px" /> 
          <p>Overview</p>
        </NavLink>
      </nav>
      <div className='logout' onClick={logout}>
        <p>Logout</p>
        <FaPowerOff className="icon" size="20px"/>
      </div>
    </div>
  );
}

export default AdminNavbar;

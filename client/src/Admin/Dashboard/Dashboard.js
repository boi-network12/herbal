import React from 'react'
import "./AdminDashboard.css"
import { useAuth } from '../../context/authContext'
import Overview from '../Components/Overview/Overview'
import AdminNavbar from '../Components/Navbar/Navbar'

const AdminDashboard = () => {
    const {currentUser} = useAuth()
  return (
    <div className='AdminDashboardContainer'>
        <div className='HeadingBox'>
            <h1>Admin dashboards</h1>
            <p>welcome {currentUser?.firstName}</p>
        </div>
        <div className='NavContainerOverview'>
          <AdminNavbar/>
          <Overview/>
        </div>
    </div>
  )
}

export default AdminDashboard
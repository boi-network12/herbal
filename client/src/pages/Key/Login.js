import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import Header from '../../components/KeyHeaders/Header';
import Footer from '../../components/Footer/Footer';
import Register from '../../components/Form/register';
import LoginPage from '../../components/Form/Login';
import "./style.css"

const Login = () => {
    const query = new URLSearchParams(useLocation().search);
    const email = query.get('email');

    const [isRegister, setIsRegister] = useState(true)

    const toggleForm = () => {
      setIsRegister(!isRegister)
    }

  return (
    <div className='LoginsContainer'>
        <Header/>
        {isRegister ? <Register toggleForm={toggleForm}/> : <LoginPage toggleForm={toggleForm}/>}
        <Footer/>
        {email && <p>login with {email}</p>}
    </div>
  )
}

export default Login
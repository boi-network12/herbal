import React from 'react'
import { useLocation } from "react-router-dom"
import Header from '../../components/KeyHeaders/Header';

const Login = () => {
    const query = new URLSearchParams(useLocation().search);
    const email = query.get('email');


  return (
    <div>
        <Header/>
        <h1>Login side</h1>
        {email && <p>login with {email}</p>}
    </div>
  )
}

export default Login
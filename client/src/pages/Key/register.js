import React from 'react';
import { useLocation } from "react-router-dom"
import Header from '../../components/KeyHeaders/Header';

const Register = () => {
    const query = new URLSearchParams(useLocation().search);
    const email = query.get('email');


  return (
    <div>
        <Header/>
        <h1>register</h1>
        {email && <p>Registering with email: {email}</p>}
    </div>
  )
}

export default Register
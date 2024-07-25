import React, { useState } from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext';

const Login = ({toggleForm}) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
        setLoading(true)
        await login(email, password)
        navigate('/')
        setLoading(false)
    } catch (error) {
        setLoading(false)
        setError(error.message)
    }
}
    return (
    <div className='formContainer'>
        <div className='imgSetDiv'>
            <img src={require("../../assets/greenLeaf.jpg")} alt="" />
        </div>
        <form>
            <h2>Welcome back </h2>
            {error && <p style={{color: "red"}}>{error}</p>}
            <div>
                <label>Email Address</label>
                <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p>
                <input type="checkbox" />
                <span>
                    By continuing, I agree to the 
                    <Link to="/">Terms of Service</Link> &
                    <Link to="/">Privacy Policy</Link>
                </span>
            </p>
            <button onClick={handleLogin}>
                {loading ? 'Loading...' : 'Login'}
            </button>

            <span>Don't have an account? <p onClick={toggleForm}>Sign up</p> </span>
        </form>
    </div>
    )
}

export default Login


import React, { useState } from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'


const Register = ({toggleForm}) => {
    const { register } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('')
        try {
            setLoading(true)
            await register(email, password, { firstName, lastName})
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
                <h2>Create Account </h2>
                {error && <p style={{color: "red"}}>{error}</p>}
                <div>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        required 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} required
                    />
                </div>
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
                <button onClick={handleRegister}>
                    {loading ? 'Loading...' : 'Create an account'}
                </button>

                <span>Already a member? <p onClick={toggleForm}>Login</p> </span>
            </form>
        </div>
    )
}

export default Register
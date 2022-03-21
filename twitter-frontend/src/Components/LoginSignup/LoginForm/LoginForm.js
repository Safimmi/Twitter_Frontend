import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"

import logo from '../../../Assets/Logo/twitter-logo-4.svg'
import { Link } from 'react-router-dom'

import'./LoginForm.css'

const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const userInfo = {username, password}
        axios({
            url: window.apiPath + "/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            data: userInfo
        })
        .then(response => {
            console.log(response)
            console.log(response.data)
            console.log(response.status)
            history.push('/')
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='login-form'>

            <form onSubmit={handleSubmit}>
                
            <img src={logo} alt="Twitter Logo" />

            <h2>Log in to Twitter</h2>

                <div>
                    <label>
                        <input 
                            placeholder='Username'
                            type='text' 
                            name='username'
                            value={username} 
                            onChange = {(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <input 
                            placeholder='Password'
                            type='password' 
                            name='password'
                            value={password} 
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <button className = "button login-button" type='submit'>Log In</button>
                </div>

                <div className='login-links'>
                    <a href="#"> Forgot password? </a>
                    <Link to="/signup"> Sign up to Twitter </Link>
                </div>

            </form>

        </div>
    )

}

export default LoginForm
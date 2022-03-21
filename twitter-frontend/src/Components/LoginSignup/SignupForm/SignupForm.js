import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"

import logo from '../../../Assets/Logo/twitter-logo-4.svg'
import { Link } from 'react-router-dom'

import './SignupForm.css'

const SignupForm = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const userInfo = {name, username, password}

        axios({
            url: window.apiPath + "/signup",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            data: userInfo
        })
        .then(response => {
            console.log(response)
            
            setName('')
            setUsername('')
            setPassword('')
            
            //history.push('/login')
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='signup-form'>

            <form id = "signup-form-id" onSubmit={handleSubmit}>
                
                <img src={logo} alt="Twitter Logo" />

                <h2>Create an account</h2>

                <div >
                    <label>
                        <input 
                            placeholder='Name'
                            type='text' 
                            name='name'
                            value={name} 
                            onChange = {(e) => setName(e.target.value)}
                        />
                    </label>
                </div>

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
                    <button className = "button signup-button" type='submit'>Next</button>
                </div>

                <div className='policy'>
                    <p>
                        By Signing up you agree to the 
                        <a href="#"> Terms of Service </a>
                        and
                        <a href="#"> Privacy Policy</a>
                        , including
                        <a href="#"> Cookie Use.</a>
                    </p>
                    <br />
                    <p>
                        Already have an account?
                        <Link to="/login"> Log in </Link>
                    </p>
                </div>
                

            </form>

        </div>
    )
}

export default SignupForm

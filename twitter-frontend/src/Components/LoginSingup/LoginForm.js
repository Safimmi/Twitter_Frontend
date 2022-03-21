import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

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
        <div>

            <form onSubmit={handleSubmit}>
                
                <div>
                    <label>
                        Username
                        <input 
                            type='text' 
                            name='username'
                            value={username} 
                            onChange = {(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Password
                        <input 
                            type='text' 
                            name='password'
                            value={password} 
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <button type='submit'>Log In</button>
                </div>

            </form>

        </div>
    )

}

export default LoginForm
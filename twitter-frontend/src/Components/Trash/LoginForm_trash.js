import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory
} from "react-router-dom";

class LoginForm extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        
        let history = useHistory();
        console.log(this.state)
        e.preventDefault()
        axios.post(
            'http://localhost:8881/login',
            this.state,
            { withCredentials: true }
        )
        .then(response => {
            console.log(response)
            console.log(response.headers)
            //history.go("/")
        }) 
    }

    
    render() {

        const {username, password} = this.state

        return (
        <div>
            
            <form onSubmit={this.handleSubmit}>
                
                <div>
                    <label>
                        Username
                        <input 
                            type='text' 
                            name='username'
                            value={username} 
                            onChange = {this.handleChange}
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
                            onChange = {this.handleChange}
                        />
                    </label>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>

        </div>
        )
    }

}

export default LoginForm

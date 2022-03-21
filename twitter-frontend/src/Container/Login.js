import React, { Component } from 'react'
import LogoutButton from '../Components/LogoutButton'

import LoginForm from '../Components/LoginSingup/LoginForm'


export default class Login extends Component {

    render() {
        return (
        <div>
            <h1>LOGIN PAGE</h1>
            <LoginForm></LoginForm>
            <LogoutButton></LogoutButton>
        </div>
        )
    }
}

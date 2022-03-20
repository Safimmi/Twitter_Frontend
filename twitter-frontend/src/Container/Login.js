import PropTypes from 'prop-types'
import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm'
import LogoutButton from '../Components/LogoutButton'

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

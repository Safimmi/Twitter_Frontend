import React, { Component } from 'react'

import Footer from '../Components/LoginSignup/Footer/Footer'
import LoginForm from '../Components/LoginSignup/LoginForm/LoginForm'


import "./Styles/Registry.css"

export default class Login extends Component {

    render() {
        return (
            <div className='registry-container'>
                
            <div className='registry-wrap'>

                <div className='side-image'>
                    <img src={require("../Assets/Images/back-twitter.png")} alt="back-twitter"></img> 
                </div>

                <div className='registry-form-wrap'>
                    <LoginForm></LoginForm>                    
                </div>

            </div>

            <Footer ></Footer>
            
        </div>
        )
    }
}

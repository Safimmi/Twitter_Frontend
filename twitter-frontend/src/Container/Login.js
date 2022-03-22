import React, { Component } from 'react'

import Footer from '../Components/LoginSignup/Footer/Footer'
import LoginForm from '../Components/LoginSignup/LoginForm/LoginForm'

import BgImage from '../Assets/Images/back-twitter.png'
import "./Styles/Registry.css"
import './Styles/Button.css'

export default class Login extends Component {

    render() {
        return (
            <div className='registry-container'>
                
            <div className='registry-wrap'>

                <div className='side-image'>
                    <img src={BgImage} alt="back-twitter"></img> 
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

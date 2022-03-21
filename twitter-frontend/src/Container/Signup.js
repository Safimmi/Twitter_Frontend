import React, { Component } from 'react'

import SignupForm from '../Components/LoginSignup/SignupForm/SignupForm'
import Footer from '../Components/LoginSignup/Footer/Footer'

import "./Styles/Registry.css"

export default class Signup extends Component {
    render() {
        return (
            <div className='registry-container'>
                
                <div className='registry-wrap'>

                    <div className='side-image'>
                        <img src={require("../Assets/Images/back-twitter.png")} alt="back-twitter"></img> 
                    </div>

                    <div className='registry-form-wrap'>
                        <SignupForm></SignupForm>                    
                    </div>

                </div>

                <Footer ></Footer>
                
            </div>
        )
    }
}

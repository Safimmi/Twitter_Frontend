import React, { Component } from 'react'

import SignupForm from '../Components/LoginSignup/SignupForm/SignupForm'
import Footer from '../Components/LoginSignup/Footer/Footer'

import BgImage from '../Assets/Images/back-twitter.png'
import "./Styles/Registry.css"
import './Styles/Button.css'

export default class Signup extends Component {
    render() {
        return (
            <div className='registry-container'>
                
                <div className='registry-wrap'>

                    <div className='side-image'>
                        <img src={BgImage} alt="back-twitter"></img> 
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

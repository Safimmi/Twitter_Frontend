import React, { Component } from 'react'

import SingupForm from '../Components/LoginSingup/SingupForm'
import Footer from '../Components/LoginSingup/Footer'

import "../Components/LoginSingup/Singup.css"

export default class Singup extends Component {
    render() {
        return (
            <div className='singup-container'>
                
                <div className='singup-wrap'>

                    <div className='side-image'>
                        <img src={require("../Assets/Images/back-twitter.png")} alt="back-twitter"></img> 
                    </div>

                    <div className='singup-form-wrap'>
                        <SingupForm></SingupForm>                    
                    </div>

                </div>

                <Footer ></Footer>
                
            </div>
        )
    }
}

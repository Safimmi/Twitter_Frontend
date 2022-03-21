import React, { Component } from 'react'

import SingupForm from '../Components/LoginSingup/SingupForm/SingupForm'
import Footer from '../Components/LoginSingup/Footer/Footer'

import "./Styles/Registry.css"

export default class Singup extends Component {
    render() {
        return (
            <div className='registry-container'>
                
                <div className='registry-wrap'>

                    <div className='side-image'>
                        <img src={require("../Assets/Images/back-twitter.png")} alt="back-twitter"></img> 
                    </div>

                    <div className='registry-form-wrap'>
                        <SingupForm></SingupForm>                    
                    </div>

                </div>

                <Footer ></Footer>
                
            </div>
        )
    }
}

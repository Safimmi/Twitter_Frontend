import React, { Component } from 'react'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"

import '../../../Container/Styles/Dropdown.css'
import './LogoutButton.css'

const LogoutButton = () => {

    const history = useHistory();

    const handleClick = (e) =>{
        e.preventDefault()
        
        axios({
            url: window.apiPath + "/logout",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then(response => {
            console.log(response)
            history.push('/login')
            //console.log(document.cookie)
            //document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            //document.cookie = "USERID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        })
        .catch(err => {
            console.log(err.message)
        })

        
    }

    return (
        <div className='option-logout'>
            <a onClick={handleClick}>Logout</a>
        </div>
    )
}

export default LogoutButton

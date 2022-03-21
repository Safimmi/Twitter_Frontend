import React, { Component } from 'react'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"

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
            history.push('/')
            //console.log(document.cookie)
            //document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            //document.cookie = "USERID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
        })
        .catch(err => {
            console.log(err.message)
        })

        
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
}

export default LogoutButton

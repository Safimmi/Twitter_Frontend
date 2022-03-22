import React from 'react'
import { useState, useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'


import ProfilePic from '../../../Assets/Images/default_profile_pic.png'
import './UserTag.css'

const UserTag = () => {
    
    const [id, setActiveUserId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    function findCookieValue(key){
        return document.cookie
        .split('; ')
        .find(row => row.startsWith(key + '='))
        .split('=')[1]
    }

    useEffect(() => {
        setActiveUserId(findCookieValue("USERID"))
        console.log(id);

        axios({
            url: window.apiPath + "/user",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            params: {id}
        })
        .then(response => {
            console.log(response) 
            setName(response.data.name)
            setUsername(response.data.username)      
        })
        .catch(err => {
            console.log(err.message)
        })
    });

    return (
        <div className='usertag-wrap'>

            <div className='profile-picture'>
                <img src={ProfilePic} alt="Profile Picture" />
            </div>

            <div className='usertag-info'>
                <h3>{name}</h3>
                <h4>@{username}</h4>
            </div>
        </div>
    )
}

export default UserTag
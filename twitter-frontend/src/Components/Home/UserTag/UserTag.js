import React from 'react'
import { useState, useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'

import {ReactComponent as OptionsIcon} from '../../../Assets/Icons/options_icon.svg'
import LogoutButton from '../../LoginSignup/Logout/LogoutButton'

import ProfilePic from '../../../Assets/Images/default_profile_pic.png'
import './UserTag.css'
import '../../../Container/Styles/Dropdown.css'


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

    const handleLogOut = (e) => {}
    
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

            <div className='options'>
                <div className='options-dropdown'>
                    <button className="options-btn">
                        <OptionsIcon className='tweet-action-icon'/>
                    </button>
                    <div className="options-content">
                        <LogoutButton></LogoutButton>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserTag
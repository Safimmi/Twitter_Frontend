import React, { Component } from 'react'

import NewTweetForm from '../Components/Home/NewTweet/NewTweetForm'
import UpdateTweetFrom from '../Components/Home/UpdateTweet/UpdateTweetForm'
import GetTweetIdForm from '../Components/Home/Feed/GetTweetIdForm'

import Timeline from '../Components/Home/Feed/Timeline'
import LogoutButton from '../Components/LoginSignup/Logout/LogoutButton'

import './Styles/Home.css'

export default class Home extends Component {
    render() {
        return (
        <div className='home-container'>

            {/* <LogoutButton></LogoutButton> */}
            {/* <h1>HOME PAGE</h1> */}
            
            <div className='user-sidepanel'>
                USER SIDE PANEL
            </div>

            <div className='timeline-mainpanel'>
                <Timeline></Timeline>
                <br />
                <NewTweetForm></NewTweetForm>
                <br />
                <UpdateTweetFrom></UpdateTweetFrom>
                <br />
                <GetTweetIdForm></GetTweetIdForm>
            </div>
            
            <div className='search-sidepanel'>
                SEARCH PANEL
            </div>

            
            
        </div>
        
        )
    }
}

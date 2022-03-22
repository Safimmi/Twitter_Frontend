import React, { Component } from 'react'

import NewTweetForm from '../Components/Home/NewTweet/NewTweetForm'
import UpdateTweetFrom from '../Components/Home/UpdateTweet/UpdateTweetForm'

import Timeline from '../Components/Home/Feed/Timeline'
import LogoutButton from '../Components/LoginSignup/Logout/LogoutButton'
import UserSidePanel from '../Components/Home/UserSidePanel/UserSidePanel'

import './Styles/Home.css'
import './Styles/Button.css'

export default class Home extends Component {

    render() {
        return (
        <div className='home-container'>
            
            <div className='user-sidepanel'>
                <UserSidePanel activeUserId={this.activeUserId}></UserSidePanel>
            </div>

            <div className='timeline-mainpanel'>
                <Timeline></Timeline>
                <br />
                <NewTweetForm></NewTweetForm>
                <br />
                <UpdateTweetFrom></UpdateTweetFrom>
            </div>
            
            <div className='search-sidepanel'>
                SEARCH PANEL
            </div>

            
        </div>
        
        )
    }
}

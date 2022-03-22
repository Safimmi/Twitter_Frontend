import React, { Component } from 'react'

import NewTweetForm from '../Components/Home/NewTweetForm/NewTweetForm'
import UpdateTweetFrom from '../Components/Home/UpdateTweetForm/UpdateTweetForm'

import Timeline from '../Components/Home/Feed/Timeline'
import LogoutButton from '../Components/LoginSignup/Logout/LogoutButton'
import UserSidePanel from '../Components/Home/UserSidePanel/UserSidePanel'
import Header from '../Components/Home/Header/Header'

import './Styles/Home.css'
import './Styles/Button.css'

export default class Home extends Component {

    render() {
        return (
        <div className='home-container'>
            
            <div className='user-sidepanel'>
                <UserSidePanel></UserSidePanel>
            </div>

            <div className='timeline-mainpanel'>
                <Header></Header>
                <NewTweetForm></NewTweetForm>
                {/* <UpdateTweetFrom></UpdateTweetFrom> */}
                <Timeline></Timeline>         
            </div>
            
            <div className='search-sidepanel'>
                SEARCH PANEL
            </div>

            
        </div>
        
        )
    }
}

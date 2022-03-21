import React, { Component } from 'react'

import NewTweetForm from '../Components/NewTweetForm'
import UpdateTweetFrom from '../Components/UpdateTweetForm'
import GetTweetIdForm from '../Components/GetTweetIdForm'

import Timeline from '../Components/Feed/Timeline'

export default class Home extends Component {
    render() {
        return (
        <div>
            <h1>HOME PAGE</h1>

            <Timeline></Timeline>
            <br />

            <NewTweetForm></NewTweetForm>
            <br />
            <UpdateTweetFrom></UpdateTweetFrom>
            <br />
            <GetTweetIdForm></GetTweetIdForm>
        </div>
        
        )
    }
}

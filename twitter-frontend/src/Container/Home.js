import React, { Component } from 'react'
import GetTweets from '../Components/GetTweets'
import NewTweetForm from '../Components/NewTweetForm'
import UpdateTweetFrom from '../Components/UpdateTweetForm'
import GetTweetIdForm from '../Components/GetTweetIdForm'

export default class Home extends Component {
    render() {
        return (
        <div>
            <h1>HOME PAGE</h1>
            <GetTweets></GetTweets>
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

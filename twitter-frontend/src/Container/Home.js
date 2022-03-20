import React, { Component } from 'react'
import GetTweets from '../Components/GetTweets'

export default class Home extends Component {
    render() {
        return (
        <div>
            <h1>HOME PAGE</h1>
            <GetTweets></GetTweets>
        </div>
        
        )
    }
}

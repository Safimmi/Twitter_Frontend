import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

import Tweet from '../Tweet/Tweet'


class Timeline extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            tweets: [],
            reload: false
        }
    }

    findCookieValue(key){
        return document.cookie
        .split('; ')
        .find(row => row.startsWith(key + '='))
        .split('=')[1]
    }

    findCookieValue(key){
        return document.cookie
        .split('; ')
        .find(row => row.startsWith(key + '='))
        .split('=')[1]
    }

    componentDidMount(){

        axios({
            url: window.apiPath + "/timeline",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then(response => {
            console.log(response.data)
            this.setState({
                tweets: response.data.content
            })
        })
        .catch(err => {
            console.log(err.message)
            this.props.history.push("/login")
        })

    }
    
    render() {

        const {tweets} = this.state

        return (
            <div>
                {tweets.map((tweet) => 
                    <div key = {tweet.id}>
                        <Tweet 
                            tweet={tweet} 
                            activeUserId= {this.findCookieValue("USERID")}
                        />
                    </div>
                )}
            </div>
        )
    }

}

export default withRouter(Timeline)

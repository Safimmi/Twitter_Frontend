import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

import Tweet from '../Tweet/Tweet'


class Timeline extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            tweets: []
        }
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
                <h2>New user component : List of twets</h2>
                {tweets.map((tweet) => 
                    <div key = {tweet.id}>
                        <Tweet tweet={tweet}/>
                    </div>
                )}
            </div>
        )
    }

}

export default withRouter(Timeline)

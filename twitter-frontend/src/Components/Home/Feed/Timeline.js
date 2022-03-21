import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'


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
                {tweets.map(tweet => 
                    <div>
                        <p>{tweet.id}</p>
                        <p>{tweet.user.name}</p>
                        <p>{tweet.user.username}</p>
                        <p>{tweet.text}</p>
                        <p>{tweet.image}</p>
                        {/* <img src={tweet.image} alt="Image not found"></img> */}
                        <br />
                    </div>
                )}
            </div>
        )
    }

}

export default withRouter(Timeline)

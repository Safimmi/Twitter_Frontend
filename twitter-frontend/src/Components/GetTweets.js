import React, { PureComponent } from 'react'
import axios from 'axios'

export default class SingupForm extends PureComponent {
    

    constructor(props) {
        super(props)
        
        this.state = {
            tweets: []
        }
    }

    componentDidMount(){
        axios.get(
            'http://localhost:8881/timeline',
            { withCredentials: true }
        )
        .then(response => {
            this.setState({
                tweets: response.data.content
            })
            console.log(response.data)
            console.log(response.data.content)
            console.log(response.headers)
        }) 
    }
    
    render() {

        const {tweets} = this.state

        return (
            <div>
                <h2>New user component : List of twets</h2>
                {
                    tweets.map(tweets => <div key={tweets.id}>{tweets.text}</div>)
                }
            </div>
        )
    }

}

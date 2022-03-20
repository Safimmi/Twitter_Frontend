import React, { Component } from 'react'
import axios from 'axios'

export default class LogoutButton extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(
            'http://localhost:8881/logout',
            { withCredentials: true }
        )
        .then(response => {
            console.log(response)
            console.log(response.headers)
        }) 
    }

    
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
    
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
        )
    }

}

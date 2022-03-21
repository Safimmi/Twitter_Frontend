import React, { Component } from 'react'
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie'


export default class LogoutButton extends Component {
    
    handleSubmit = (e) => {
        const { cookies } = this.props;
        e.preventDefault()
        axios.post(
            'http://localhost:8881/logout'
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
                    <button type='submit'>Logout</button>
                </div>

            </form>
        </div>
        )
    }

}

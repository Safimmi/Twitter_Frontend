import React, { Component } from 'react'
import axios from 'axios'
import fetch from 'cross-fetch'


class NewTweetForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            text: '',
            image: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault()
        // fetch(
        //     'http://localhost:8881/testexpose',
        //     { 
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         credentials: 'include'
        //     }
        // )
        axios({
            url: 'http://localhost:8881/tweets',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            data: this.state
            
        })
        .then(response => {
            console.log(response)
            console.log(response.data)
        }) 
    }

    render() {

        const {text, image} = this.state

        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                
                <div>
                    <label>
                        Text
                        <input 
                            type='text' 
                            name='text'
                            value={text} 
                            onChange = {this.handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Image
                        <input 
                            type='text' 
                            name='image'
                            value={image} 
                            onChange = {this.handleChange}
                        />
                    </label>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>

        </div>
        )
    }
}

export default NewTweetForm
import React, { Component } from 'react'
import axios from 'axios'

class UpdateTweetFrom extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            text: '',
            image: '',
            id: ''
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
        axios.put(
            'http://localhost:8881/tweets', 
            this.state,
            { withCredentials: true }
        )
        .then(response => {
            console.log(response)
        }) 
    }

    render() {

        const {text, image, id} = this.state

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
                    <label>
                        Id
                        <input 
                            type='text' 
                            name='id'
                            value={id} 
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

export default UpdateTweetFrom
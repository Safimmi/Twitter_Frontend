import React, { PureComponent } from 'react'
import axios from 'axios'

export default class GetTweetIdForm extends PureComponent {
    

    constructor(props) {
        super(props)
        
        this.state = {
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
        axios.get(
            'http://localhost:8881/tweet/{tweetId}', 
            this.state,
            { withCredentials: true }
        )
        .then(response => {
            console.log(response)
        }) 
    }
    
    render() {

        const {id} = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                <div>
                    <label>
                        ID
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

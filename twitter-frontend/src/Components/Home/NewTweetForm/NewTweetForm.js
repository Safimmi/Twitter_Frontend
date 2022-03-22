import React, { Component } from 'react'
import { useState } from 'react'
import axios from 'axios'

import {ReactComponent as ImageIcon} from '../../../Assets/Icons/image_icon.svg'
import {ReactComponent as GifIcon} from '../../../Assets/Icons/gif_icon.svg'
import {ReactComponent as GraphIcon} from '../../../Assets/Icons/graph_icon.svg'
import {ReactComponent as EmojiIcon} from '../../../Assets/Icons/emoji_icon.svg'
import {ReactComponent as ScheduleIcon} from '../../../Assets/Icons/schedule_icon.svg'

import ProfilePic from '../../../Assets/Images/default_profile_pic.png'
import './NewTweetForm.css'

const NewTweetForm = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const tweet = {text, image}
        axios({
            url: window.apiPath + '/tweets',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            data: tweet
            
        })
        .then(response => {
            console.log(response)
            setText('')
            setImage('')
            window.location.reload()
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='newtweet-wrap'>

            <div className='profile-picture'>
                <img src={ProfilePic} alt="Profile Picture" />
            </div>
            
            <form  onSubmit={handleSubmit}>

                <div className='form-input'>
                    <div>
                        <label>
                            <input 
                                placeholder="What's happening"
                                type='text' 
                                name='text'
                                value={text} 
                                onChange = {(e) => setText(e.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            <input 
                                placeholder="Image URL"
                                type='text' 
                                name='image'
                                value={image} 
                                onChange = {(e) => setImage(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                
            
                <div className='newtweet-bottom'>

                    <div className='newtweet-options'>
                        <ImageIcon className='newtweet-option-icon'></ImageIcon>
                        <GifIcon className='newtweet-option-icon'></GifIcon>
                        <GraphIcon className='newtweet-option-icon'></GraphIcon>
                        <EmojiIcon className='newtweet-option-icon'></EmojiIcon>
                        <ScheduleIcon className='newtweet-option-icon'></ScheduleIcon>
                    </div>
                    
                    <div className = "form-bottom">
                        <button className = "button newtweet-button" type='submit'>Tweet</button>
                    </div>
                    
                </div>

            </form>

        </div>
    )
}

export default NewTweetForm
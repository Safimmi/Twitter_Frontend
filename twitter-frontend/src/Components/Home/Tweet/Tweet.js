import React from 'react'
import { useState, useEffect } from 'react'

import {ReactComponent as CommentIcon} from '../../../Assets/Icons/comment_icon.svg'
import {ReactComponent as LikeIcon} from '../../../Assets/Icons/like_icon.svg'
import {ReactComponent as RetweetIcon} from '../../../Assets/Icons/retweet_icon.svg'
import {ReactComponent as ShareIcon} from '../../../Assets/Icons/share_icon.svg'
import {ReactComponent as StatisticsIcon} from '../../../Assets/Icons/statistics_icon.svg'
import {ReactComponent as OptionsIcon} from '../../../Assets/Icons/options_icon.svg'

import ProfilePic from '../../../Assets/Images/default_profile_pic.png'

import './Tweet.css'

const Tweet = ({tweet}) => {

    //console.log(tweet)
    const now = Date.now();
    const tweetDate = tweet.lastModifiedAt;
    const [imageState, setImageState] = useState(true);

    useEffect(() => {
        if(tweet.image == null){setImageState(false)}
    });

    return (
        <div className='tweet-container'>

            <div className='profile-picture'>
                <img src={ProfilePic} alt="Profile Picture" />
            </div>

            <div className='tweet-content'>

                <div className='tweet-info'>

                    <div className='tweet-user'>
                        <h3>{tweet.user.name}</h3>
                        <h4>@{tweet.user.username}</h4>
                        <h4>&bull; {tweet.lastModifiedAt}</h4>
                    </div>

                    <div>
                        <p>{tweet.text}</p>
                    </div>

                    <div className='tweet-img' style={{display: imageState ? 'block' : 'none' }}>
                        <img src={tweet.image}></img>
                    </div>
                    
                </div>

                <div className='tweet-actions'>
                    <CommentIcon className='tweet-action-icon comment-icon'/>  
                    
                    <button className='tweet-actions-btn'>  
                        <LikeIcon className='tweet-action-icon like-icon'/> 
                        <p>{tweet.favoriteCount}</p>
                    </button>
                    
                    <RetweetIcon className='tweet-action-icon retweet-icon'/> 
                    <ShareIcon className='tweet-action-icon share-icon'/> 
                    <StatisticsIcon className='tweet-action-icon statistics-icon'/> 
                </div>

            </div>

            <div className='options'>
                <div className='options-dropdown'>
                    <button className="options-btn">
                        <OptionsIcon className='tweet-action-icon'/>
                    </button>
                    <div className="options-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Tweet
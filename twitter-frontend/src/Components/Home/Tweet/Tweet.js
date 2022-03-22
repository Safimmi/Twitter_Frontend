import React from 'react'
import { useState, useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'

import {ReactComponent as CommentIcon} from '../../../Assets/Icons/comment_icon.svg'
import {ReactComponent as LikeIcon} from '../../../Assets/Icons/like_icon.svg'
import {ReactComponent as RetweetIcon} from '../../../Assets/Icons/retweet_icon.svg'
import {ReactComponent as ShareIcon} from '../../../Assets/Icons/share_icon.svg'
import {ReactComponent as StatisticsIcon} from '../../../Assets/Icons/statistics_icon.svg'
import {ReactComponent as OptionsIcon} from '../../../Assets/Icons/options_icon.svg'

import ProfilePic from '../../../Assets/Images/default_profile_pic.png'

import './Tweet.css'

const Tweet = ({tweet, activeUserId}) => {

    //console.log(tweet)
    const now = Date.now();
    const tweetDate = tweet.lastModifiedAt;
    
    const [tweetId, setTweetId] = useState(tweet.id);
    const [imageState, setImageState] = useState(true);
    const [likeCount, setLikeCount] = useState(tweet.favoriteCount);

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if(tweet.image == null){setImageState(false)}
        if(tweet.favoriteCount != 0 && (tweet.favorites != null && tweet.favorites.includes(activeUserId))){setIsLiked(true)}
    });

    console.log("BODY",isLiked)

    const handleClickLike = (e) =>{
        e.preventDefault()
        console.log("INTO", isLiked)
        if(isLiked === false){
            axios({
                url: window.apiPath + "/favorites/create",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                params: {tweetId}
            })
            .then(response => {
                //console.log(response)    
                setLikeCount(response.data.tweetDto.favoriteCount) 
                setIsLiked(true)      
            })
            .catch(err => {
                console.log(err.message)
            })
        }
        else{
            console.log("HELLO")
            axios({
                url: window.apiPath + "/favorites/destroy",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                params: {tweetId}
            })
            .then(response => {
                //console.log(response)
                setLikeCount(response.data.tweetDto.favoriteCount)             
                setIsLiked(false)    
            })
            .catch(err => {
                console.log(err.message)
            })
        }
        
        console.log("OUT",isLiked)
        
    }

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
                    
                    <button className='tweet-actions-btn' onClick={handleClickLike}>  
                        <LikeIcon className='tweet-action-icon like-icon' style={{fill: isLiked ? '#EF1C5C' : '#536471' }} /> 
                        <p style={{color: isLiked ? '#EF1C5C' : '#536471' }} >{likeCount}</p>
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
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'


const TimelineFunction = () => {
    
    const [tweets, setTweets] = useState([{
        createdAt: "",
        favoriteCount: null,
        favorites: [],
        id: "",
        image: "",
        lastModifiedAt: "",
        text: "",
        user: {
            id: "",
            name: "",
            username: ""
        }
    }])

    useEffect(()=>{

        axios({
            url: window.apiPath + "/timeline",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then(response => {
            console.log("RESPONSE")
            console.log(response.data)
            console.log(response.data.content)
            console.log(response.headers)  
            
            console.log("VARIABLE AFTER FILL")
            setTweets(response.data.content)
            setTweets(response.data.content)
            console.log(tweets)
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [])
    
    
    return (
        <div>
            <h2>Timeline</h2>
            {/* {tweets.map((tweet)=>{
                <div key={tweet.id}>
                    <p>{tweet.name}</p>
                    <p>{tweet.text}</p>
                </div>
            })} */}
        </div>
    )
}

export default TimelineFunction
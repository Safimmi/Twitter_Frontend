import React from 'react'

import {ReactComponent as HomeIcon} from '../../../Assets/Icons/home_icon.svg'
import {ReactComponent as FavoritesIcon} from '../../../Assets/Icons/favorites_icon.svg'
import {ReactComponent as MoreIcon} from '../../../Assets/Icons/more_icon.svg'

import { Link } from 'react-router-dom'

import UserTag from '../UserTag/UserTag'

import './UserSidePanel.css'
import logo from '../../../Assets/Logo/twitter-logo.svg'

const UserSidePanel = (props) => {
    return (
        <div className='user-side-panel'>

            <div className='side-logo'>
                <img src={logo} alt="Twitter Logo" />
            </div>

            <div className='user-menu'>
                <HomeIcon className='user-menu-icon'></HomeIcon>
                <Link to="/"> Home </Link>
            </div>

            <div className='user-menu'>
                <FavoritesIcon className='user-menu-icon'></FavoritesIcon>
                <a href="#">Favorites</a>
            </div>

            <div className='user-menu'>
                <MoreIcon className='user-menu-icon'></MoreIcon>
                <a href="#">More</a>
            </div>

            <div className = "side-panel-button">
                <button className = "button tweet-button">Tweet</button>
            </div>

            <dir className = "user-tag-container">
                <UserTag></UserTag>
            </dir>

        </div>
    )
}

export default UserSidePanel
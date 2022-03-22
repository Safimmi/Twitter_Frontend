import React from 'react'

import {ReactComponent as TopIcon} from '../../../Assets/Icons/top_icon.svg'

import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>

            <div className='header-wrap'>

                <h2>Home</h2>
                <button className='top-btn'>
                    <TopIcon className='top-btn-icon'></TopIcon>
                </button>

            </div>

        </div>
    )
}

export default Header
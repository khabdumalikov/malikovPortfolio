// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const NavbarE = () => {
    

    return (
        <div className='navbar'>
            <ul>
                <li >
                    <Link to = '/'>
                    <i className='fa fa-home'></i>
                    <h2>Home</h2>
                    </Link>
                </li>
                <li >
                    <Link to='/about'>
                    <i className='fa fa-user'></i>
                    <h2>About</h2>
                    </Link>
                </li>
                <li >
                    <Link to='/portfolio'>
                    <i className='fa fa-briefcase'></i>
                    <h2>Portfolio</h2>
                    </Link>
                </li>
                <li >
                    <Link to='contact'>
                    <i className="fa fa-envelope-open"></i>
                    <h2>Contact</h2>
                    </Link>
                </li>
                <li >
                    <Link to='/blog'>
                    <i className='fa fa-comments'></i>
                    <h2>Blog</h2>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarE
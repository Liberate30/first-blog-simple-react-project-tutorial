import React, { useState } from 'react'
import siteLogo from '../../assets/images/logo.jpg'
import './navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = ()=> {
        setNavOpen(!navOpen)
    }
  return (
    <div className='navbar'>
        <div className='navbar-logo__title__con'>
            <img className='site-logo' src={siteLogo} alt="" />
            <p>First-blog</p>
        </div>
        <div className='navbar-links_icon_con'>
            <p onClick={toggleNav}>{
                navOpen ? <FaTimes /> : <FaBars />
                }</p>
            <div className={`${navOpen && 'show'}`}>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li><Link to={'/posts'}>Posts</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li className='navbar-login_btn'><Link to={'/login'}>Login</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
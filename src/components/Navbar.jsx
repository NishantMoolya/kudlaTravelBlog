import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>Logo</div>
      <ul className='nav_links'>
        <li><NavLink className='link' to='/'>Home</NavLink></li>
        <li><NavLink className='link' to='/about'>About</NavLink></li>
        <li><NavLink className='link' to='/places'>Places</NavLink></li>
        <li><NavLink className='link' to='/blogs'  id='blogs'>Blogs</NavLink></li>
      </ul>
  </nav>
    )
}

export default Navbar
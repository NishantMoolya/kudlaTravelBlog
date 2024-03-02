import React from 'react'
//import  { AppBar,Grid, Stack, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>Logo</div>
      <ul className='nav_links'>
        <li><NavLink className={'li'} to='/'>Home</NavLink></li>
        <li><NavLink className={'li'} to='/about'>About</NavLink></li>
        <li><NavLink className={'li'} to='/places'>Places</NavLink></li>
        <li><NavLink className={'li'} to='/blogs'  id='blogs'>Blogs</NavLink></li>
      </ul>
  </nav>
    )
}

export default Navbar
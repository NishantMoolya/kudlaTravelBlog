import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Navbar = () => {
  const auth = useSelector(state => state.user.auth);

  const [dark,setDark] = useState(false);
  const theme = localStorage.getItem("kudlablogs-theme");
  if(theme === "dark") document.querySelector("body").setAttribute('theme-mode',"dark");
  
  const changeTheme = () => {
    setDark(p => !p); 
    document.querySelector("body").setAttribute('theme-mode',dark?"light":"dark");
    localStorage.setItem("kudlablogs-theme",dark?"light":"dark");
  }

  return (
    <nav className='navbar'>
    <div className='logo'>Logo</div>
      <ul className='nav_links'>
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/'>Home</NavLink></motion.li>
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/about'>About</NavLink></motion.li>
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/places'>Places</NavLink></motion.li>
        {!auth?<>
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/login'>login</NavLink></motion.li>
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/signup'>signup</NavLink></motion.li>
        </>
        :<>
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/user/profile'>profile</NavLink></motion.li>
        </>
        }
        <motion.li whileHover={{y:"4px"}}><NavLink className='link' to='/blogs'  id='blogs'>Blogs</NavLink></motion.li>
      <motion.button whileHover={{y:"4px"}} className='dark_mode_btn' onClick={changeTheme}><i class="fa-solid fa-moon"></i></motion.button>
      </ul>
  </nav>
    )
}

export default Navbar
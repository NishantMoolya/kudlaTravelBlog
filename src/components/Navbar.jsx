import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Navbar = () => {
  const auth = useSelector(state => state.user.auth);
  const navbar = {
    start:{
      y:'-100%'
    },
    end:{
      y:0
    }
  }
  return (
    <motion.nav className='navbar' variants={navbar} initial="start" animate="end">
    <div className='logo'>Logo</div>
      <ul className='nav_links'>
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/'>Home</NavLink></motion.li>
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/about'>About</NavLink></motion.li>
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/places'>Places</NavLink></motion.li>
        {!auth?<>
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/login'>login</NavLink></motion.li>
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/signup'>signup</NavLink></motion.li>
        </>
        :<>
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/user/profile'>profile</NavLink></motion.li>
        </>
        }
        <motion.li whileHover={{y:"-5px"}}><NavLink className='link' to='/blogs'  id='blogs'>Blogs</NavLink></motion.li>
      </ul>
  </motion.nav>
    )
}

export default Navbar
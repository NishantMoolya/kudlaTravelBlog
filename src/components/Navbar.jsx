import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { link, menu } from '../animations/navbarAnim';

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

  const [showMenu,setShowMenu] = useState(false);
  const childLinks = <>
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.1}}><NavLink className='link' to='/'>Home</NavLink></motion.li>
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.2}}><NavLink className='link' to='/about'>About</NavLink></motion.li>
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.3}}><NavLink className='link' to='/places'>Places</NavLink></motion.li>
        {!auth?<>
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.4}}><NavLink className='link' to='/login'>login</NavLink></motion.li>
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.5}}><NavLink className='link' to='/signup'>signup</NavLink></motion.li>
        </>
        :<>
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.6}}><NavLink className='link' to='/user/profile'>profile</NavLink></motion.li>
        </>
        }
        <motion.li whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.7}}><NavLink className='link' to='/blogs'  id='blogs'>Blogs</NavLink></motion.li>
      <motion.button whileHover={{y:"4px"}} variants={link} initial="start" animate="end" exit="exit" transition={{delay:0.8}} className='dark_mode_btn' onClick={changeTheme}><i className="fa-solid fa-moon"></i></motion.button>
  </>

  return (
    <nav className='navbar'>
    <div className='logo_holder'>
      <div className='logo'>Logo</div>
      <motion.button whileTap={{ rotateZ:"360deg"}} className='hamburger_menu'onClick={() => setShowMenu(p => !p)}>{!showMenu?<i className="fa-solid fa-bars"></i>:<i className="fa-solid fa-square-xmark"></i>}</motion.button>
    </div>
      <AnimatePresence>

      <motion.ul className='nav_links' variants={menu} initial="start" animate="end" exit="exit">
        {childLinks}
      </motion.ul>

      {showMenu && <motion.ul className='nav_links_mobile' key={showMenu} variants={menu} initial="start" animate="end" exit="exit">  
      {childLinks}
      </motion.ul>}
      </AnimatePresence>
  </nav>
    )
}

export default Navbar
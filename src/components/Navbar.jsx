import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/api/userApi';

const Navbar = () => {
  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();
  return (
    <nav className='navbar'>
    <div className='logo'>Logo</div>
      <ul className='nav_links'>
        <li><NavLink className='link' to='/'>Home</NavLink></li>
        <li><NavLink className='link' to='/about'>About</NavLink></li>
        <li><NavLink className='link' to='/places'>Places</NavLink></li>
        {!auth?<>
        <li><NavLink className='link' to='/login'>login</NavLink></li>
        <li><NavLink className='link' to='/signup'>signup</NavLink></li>
        </>
        :<li><button onClick={() => dispatch(userLogout())}>logout</button></li>
        }
        <li><NavLink className='link' to='/blogs'  id='blogs'>Blogs</NavLink></li>
      </ul>
  </nav>
    )
}

export default Navbar
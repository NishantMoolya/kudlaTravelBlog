import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, userLogout } from '../redux/api/userApi';
import "../styles/profile.css";
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'

const Profile = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userDispatch = useDispatch();
  useEffect(() => {
    userDispatch(getUserProfile());
  },[]);
  document.title = `Profile-${user.name}`;

  return (
    <motion.div variants={route} initial="start" animate="end" exit="exit" className='profile_frame'>
      <div className='profile_banner'></div>
      <div className='profile_content'>
        <div className='div_1'>
        <img className='profile_avatar' src={user.avatar} alt="" srcset="" />
        <p>{user.name}</p>
        <p>{user.email}</p>
        </div>
      <div className='div_2'>
        <div className='profile_blogs_section'>
        <p className='blog_text'>Blogs</p>
        <p className='blog_icon'><i class="fa-regular fa-newspaper"></i></p>
        <p className='blog_count'>{user.blogs.length}</p>
        </div>
        <div className='profile_blogs_section'>
        <p className='blog_text'>Blogs liked</p>
        <p className='blog_icon'><i class="fa-solid fa-thumbs-up"></i></p>
        <p className='blog_count'>{user.blogs_voted.length}</p>
        </div>
      </div>
      </div>
        <button className='profile_logout_btn' onClick={() => dispatch(userLogout())}><span><i className="fa-solid fa-right-from-bracket"></i></span>logout</button>
    </motion.div>
  )
}

export default Profile
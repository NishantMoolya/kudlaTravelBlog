import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../redux/api/userApi';
import "../styles/profile.css";

const Profile = () => {
  const user = useSelector(state => state.user);
  const userDispatch = useDispatch();
  useEffect(() => {
    userDispatch(getUserProfile());
},[]);
  return (
    <div className='profile_frame'>
        <img className='profile_avatar' src={user.avatar} alt="" srcset="" />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.auth}</p>
        <p>{user.avatar}</p>
    </div>
  )
}

export default Profile
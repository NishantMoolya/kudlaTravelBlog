import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, userLogout } from '../redux/api/userApi';
import "../styles/profile.css";

const Profile = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userDispatch = useDispatch();
  useEffect(() => {
    userDispatch(getUserProfile());
  },[]);
  document.title = `Profile-${user.name}`;
  return (
    <div className='profile_frame'>
        <img className='profile_avatar' src={user.avatar} alt="" srcset="" />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.auth}</p>
        <p>{user.avatar}</p>
        <button onClick={() => dispatch(userLogout())}>logout</button>
    </div>
  )
}

export default Profile
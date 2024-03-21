import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import Spinner from './Spinner';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);
  const [release,setRelease] = useState(false);
  useEffect(() => {
    const timeid = setTimeout(() => {
        if(!auth) navigate('/login');
        setRelease(true);
    },500);
    return () => clearTimeout(timeid);
  },[auth]);
  return (
    <div>
        {release?auth && <Outlet />:<Spinner />}
    </div>
  )
}

export default PrivateRoute
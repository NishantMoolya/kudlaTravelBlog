import React, { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { authenticate } from '../redux/api/userApi'

const Layout = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(authenticate());
  }, []);
  
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
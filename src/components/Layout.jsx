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
    <div style={{ minHeight:"100vh",display:"flex",flexDirection:"column"}}>
    <Navbar />
    <Outlet />
    <div style={{flex:1,display:"flex",flexDirection:"column-reverse"}}>
    <Footer />
    </div>
    </div>
  )
}

export default Layout
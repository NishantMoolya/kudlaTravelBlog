import React from 'react'
import HeroSection from './HeroSection'
import '../styles/homepage.css'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'

const HomePage = () => {
  document.title = "Welcome to Kudla Blogs";
  return (
    <motion.div variants={route} initial="start" animate="end" exit="exit">
      <HeroSection />
      <div className='home_page_frame' id='explore'>
      </div>
    </motion.div>
  )
}

export default HomePage
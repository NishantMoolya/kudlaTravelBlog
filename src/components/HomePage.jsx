import React from 'react'
import HeroSection from './HeroSection'
import '../styles/homepage.css'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'
import InfoSection from './InfoSection'
import Carousel from './Carousel'
import { infoView, reveal } from '../animations/view'

const HomePage = () => {
  document.title = "Welcome to Kudla Blogs";
  return (
    <motion.div variants={route} initial="start" animate="end" exit="exit">
      <HeroSection />
      <div className='home_page_frame' id='explore'>
        <InfoSection />
        <motion.div className='homepage_places' initial={infoView.initial} whileInView={infoView.view} transition={infoView.trans}>
          <motion.h2 initial={reveal.initial} whileInView={reveal.view} transition={reveal.trans}>Top popular places</motion.h2>
        <Carousel />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomePage
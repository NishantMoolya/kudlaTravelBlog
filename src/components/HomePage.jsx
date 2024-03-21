import React from 'react'
import HeroSection from './HeroSection'
import '../styles/homepage.css'
import Carousel from './Carousel'
import BlogCarousel from './BlogCarousel'
import temple from '../assets/j4.jpeg'

const HomePage = () => {
  document.title = "Welcome to Kudla Blogs";
  return (
    <>
      <HeroSection />
      <div className='home_page_frame' id='explore'>
      </div>
    </>
  )
}

export default HomePage
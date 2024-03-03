import React from 'react'
import HeroSection from './HeroSection'
import SearchPlace from './SearchPlace'
import Carousel from './Carousel'
import BlogCarousel from './BlogCarousel'
import '../styles/homepage.css'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <div className='home_page_frame'>
        <SearchPlace />
        <div>
          <h4>Popular places</h4>
          <Carousel />
        </div>
        <div>
          <BlogCarousel />
        </div>
        </div>
    </div>
  )
}

export default HomePage
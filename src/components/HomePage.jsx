import React from 'react'
import HeroSection from './HeroSection'
import SearchPlace from './SearchPlace'
import Carousel from './Carousel'
import BlogCarousel from './BlogCarousel'
import '../styles/homepage.css'
import temple from '../assets/j4.jpeg'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className='home_page_frame' id='explore'>
        {/* <div className='home_page_sec1'>
          <h4>About Mangalore</h4>
          <div className='home_page_sec_part'>
            <div>
              <img className='home_page_image' src={temple} alt="" />
            </div>
            <div>
              <h4>culture</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum quia distinctio cum ducimus. Officia.</p>
            </div>
          </div>
        </div> */}
        {/* <div>
          <h4>Popular places</h4>
          <Carousel />
        </div>
        <div>
          <BlogCarousel />
        </div> */}
      </div>
    </>
  )
}

export default HomePage
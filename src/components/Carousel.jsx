import React, { useRef } from 'react'
import PlaceCard from './PlaceCard'
import placesInfo from '../data/placeInfo'
import '../styles/carousel.css'
import { motion } from 'framer-motion'

const Carousel = () => {
  const containerRef = useRef();
  return (
    <div className='carousel_frame' ref={containerRef}>
      <motion.div className='carousel_slides'  drag="x" dragConstraints={containerRef}>
        {
          placesInfo.map((place,ind) => (<PlaceCard key={ind} place={place} />))
        }
      </motion.div>
    </div>
  )
}

export default Carousel
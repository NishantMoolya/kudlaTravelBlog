import React, { useEffect, useRef, useState } from 'react'
import PlaceCard from './PlaceCard'
import placesInfo from '../data/placeInfo'
import '../styles/carousel.css'

const Carousel = () => {
  const containerRef = useRef();
  const arr = Array(15).fill(0);
  const widths = {
    desktop:340,
    mobile:270
  }
  const [cardWidth,setCardWidth] = useState(widths.desktop);
  const slide = (sign) => {
    //let width = containerRef.current.clientWidth;
    containerRef.current.scrollLeft = containerRef.current.scrollLeft + (sign*cardWidth);
  }
  useEffect(() => {
    if(window.innerWidth < 360) setCardWidth(widths.mobile);
    let interval = setInterval(() => slide(1),3000);
    console.log(containerRef.current.scrollWidth);
    return () => clearInterval(interval);
  });
  return (
    <div className='carousel_frame'>
      <div className='carousel_slides' ref={containerRef}>
        {
          placesInfo.map((place,ind) => (<PlaceCard key={ind} place={place} />))
        }
      </div>
    </div>
  )
}

export default Carousel
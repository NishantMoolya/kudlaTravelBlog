import React, { useEffect, useRef, useState } from 'react'
import '../styles/blogcarousel.css'
import Blog from './Blog'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const BlogCarousel = () => {
  const containerRef = useRef();
  const arr = Array(15).fill(0);
  const widths = {
    desktop:320,
    mobile:280
  }
  const [trigger,setTrigger] = useState({ num:0,trig:0,cardWidth:widths.desktop});
  useEffect(() => {
    if(window.innerWidth < 360) setTrigger(prev => ({...prev,cardWidth:widths.mobile}));
    
    let width = containerRef.current.clientWidth;
    let count = Math.round(width/trigger.cardWidth);
    setTrigger(prev => ({...prev,num:(arr.length-count)}));
    console.log(trigger.num,trigger.cardWidth);
  },[]);


  const slide = (sign) => {
    if(sign === 1) setTrigger(prev => ({...prev,trig:prev.trig+1}));
    else setTrigger(prev => ({...prev,trig:prev.trig-1}));
    containerRef.current.scrollLeft = containerRef.current.scrollLeft + (sign*trigger.cardWidth);
  }

  return (
    <div className='blog_carousel_frame'>
      <div className='blog_carousel_slides' ref={containerRef}>
      {trigger.trig === 0?null:<button className='blog_carousel_btn' id='prev_btn' onClick={() => slide(-1)}>
      <i className="fa-solid fa-angle-left"></i>
      </button>}
        {
          arr.map((place,ind) => (<Blog key={ind} />))
        }
      {trigger.trig === trigger.num?null:<button className='blog_carousel_btn' id='next_btn' onClick={() => slide(1)}>
      <i className="fa-solid fa-angle-right"></i>
      </button>}
      </div>
    </div>
  )
}

export default BlogCarousel
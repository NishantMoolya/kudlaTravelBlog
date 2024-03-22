import React, { useEffect, useRef, useState } from 'react'
import '../styles/placeinfocard.css'
import { Fab, Tooltip } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import beach from '../assets/Panambur-Beach.jpg'
import { motion } from 'framer-motion'
import { card, cardText } from '../animations/cardAnim'

const PlaceInfoCard = ({ place }) => {
    const [readMore, setReadMore] = useState({
        showBtn: false,
        expand: false
      });
      const [upvote,setUpvote] = useState(false);
      const height = {
        height: '19rem',
        overflowY: 'scroll'
      }
      const contentRef = useRef();
      const viewFullBlog = () => {
        contentRef.current.scrollTop = 0;
        setReadMore(prev => ({ ...prev, expand: !prev.expand }));
      }
      useEffect(() => {
        setReadMore(prev => ({ ...prev, showBtn: contentRef.current.scrollHeight > contentRef.current.clientHeight }))
      }, []);
  return (
    <motion.div className='place_info_card_frame' variants={card} initial="start" animate="end">
        <motion.h2 variants={cardText} initial="start" animate="end">{place.name}</motion.h2>
        <div className='place_info_card_content'>
        <div className='place_info_card_div_1'>
            <div className='place_info_card_img_frame'>
            <div className='place_info_card_map_btn'>
                <Tooltip title='view in maps'>
                    <Fab size='small'>
                        <LocationOn />
                    </Fab>
                </Tooltip>
            </div>
            <motion.img src={place.image} alt={`${place.name}`} loading='lazy' variants={cardText} initial="start" animate="end" />
            </div>
        </div>
        <div className='place_info_card_div_2'>
        <div className='place_info_card_div_2_content'>
            <motion.p style={readMore.expand ? height : null} ref={contentRef} variants={cardText} initial="start" animate="end">{place.content}</motion.p>
            {readMore.showBtn && <motion.span id='blog_info_card_readmore' onClick={() => viewFullBlog()} variants={cardText} initial="start" animate="end" >{readMore.expand ? 'read less' : 'read more'}</motion.span>}
        </div>
            <ul>
                {
                  Object.entries(place.metadata).map((meta,ind) =>  (<motion.li key={ind} variants={cardText} initial="start" animate="end" ><b>{meta[0]}</b> : {meta[1]}</motion.li>))
                }
            </ul>
        </div>
        </div>
    </motion.div>
  )
}

export default PlaceInfoCard
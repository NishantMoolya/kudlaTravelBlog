import React, { useEffect, useRef, useState } from 'react'
import '../styles/placeinfocard.css'
import { Fab, Tooltip } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import beach from '../assets/Panambur-Beach.jpg'

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
    <div className='place_info_card_frame'>
        <h2>{place.name}</h2>
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
            <img src={beach} alt={`${place.name}`} loading='lazy' />
            </div>
        </div>
        <div className='place_info_card_div_2'>
        <div className='place_info_card_div_2_content'>
            <p style={readMore.expand ? height : null} ref={contentRef}>{place.content}</p>
            {readMore.showBtn && <span id='blog_info_card_readmore' onClick={() => viewFullBlog()}>{readMore.expand ? 'read less' : 'read more'}</span>}
        </div>
            <ul>
                {
                  Object.entries(place.metadata).map((meta,ind) =>  (<li key={ind}><b>{meta[0]}</b> : {meta[1]}</li>))
                }
            </ul>
        </div>
        </div>
    </div>
  )
}

export default PlaceInfoCard
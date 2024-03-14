import React, { useEffect, useRef, useState } from 'react'
import '../styles/placeinfocard.css'
import { Fab, Tooltip } from '@mui/material'
import { LocationOn } from '@mui/icons-material'

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
        <h2>{place.placeName}</h2>
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
            <img src={place.img} alt={`${place.placeName}'s image`} />
            </div>
        </div>
        <div className='place_info_card_div_2'>
        <div className='place_info_card_div_2_content'>
            <p style={readMore.expand ? height : null} ref={contentRef}>{place.placeContent}</p>
            {readMore.showBtn && <span id='blog_info_card_readmore' onClick={() => viewFullBlog()}>{readMore.expand ? 'read less' : 'read more'}</span>}
        </div>
            <ul>
                <li><b>Category</b> : {place.metadata.type}</li>
                <li><b>Food</b> : {place.metadata.food}</li>
                <li><b>Climate</b> : {place.metadata.climate}</li>
                <li><b>Address</b> : {place.metadata.add}</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default PlaceInfoCard
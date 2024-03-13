import React, { useEffect, useRef, useState } from 'react'
import person from '../assets/person1.png'
import beach from '../assets/beach1.jpg'
import '../styles/bloginfocard.css'
import TagChip from './TagChip'

const BlogInfoCard = ({ blog }) => {
  const [readMore, setReadMore] = useState({
    showBtn: false,
    expand: false
  });
  const [upvote,setUpvote] = useState(false);
  const height = {
    height: '18.75rem',
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
    <div className='blog_info_card_frame'>
      <div className='blog_info_card_header'>
        <h4>{blog.blog_title}</h4>
      </div>
      <div className='blog_info_card_midsection'>
        <img className='blog_info_card_img' src={blog.blog_img} alt={blog.place_tag} />
        <div className='blog_info_card_content'>
          <div className='blog_info_card_header'>
            <img src={blog.author_avatar} alt={`${blog.author}'s image`} />
            <div className='blog_info_card_details'>
              <h6>{blog.author}</h6>
              <p>{blog.date}</p>
            </div>
            {
            !upvote?<i className="fa-regular fa-thumbs-up" id='blog_vote_up' style={{marginLeft:'auto',alignSelf:'auto',marginRight:'0.2rem',fontSize:'1.2rem'}} onClick={() => setUpvote(prev => !prev)}></i>
            :<i className="fa-solid fa-thumbs-up" id='blog_vote_up' style={{marginLeft:'auto',alignSelf:'auto',marginRight:'0.2rem',fontSize:'1.2rem',color:'orange'}} onClick={() => setUpvote(prev => !prev)}></i>}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <TagChip name={blog.place_tag} />
          </div>
          <p style={readMore.expand ? height : null} ref={contentRef}>{blog.blog_content}</p>
          {readMore.showBtn && <span id='blog_info_card_readmore' onClick={() => viewFullBlog()}>{readMore.expand ? 'read less' : 'read more'}</span>}
        </div>
      </div>
    </div>
  )
}

export default BlogInfoCard
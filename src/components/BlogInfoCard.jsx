import React, { useEffect, useRef, useState } from 'react'
import person from '../assets/person1.png'
import beach from '../assets/beach1.jpg'
import '../styles/bloginfocard.css'
import TagChip from './TagChip'
import Badge from '@mui/material/Badge';
import { upVoter } from '../api/upVoter'
import { voteChecker } from '../helpers/voteChecker'

const BlogInfoCard = ({ blog }) => {
  const [readMore, setReadMore] = useState({
    showBtn: false,
    expand: false
  });
  const [upvote,setUpvote] = useState({
    voted:voteChecker(blog._id),
    voteCount:blog.metadata.upvotes
  });
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
  
  const handleVoting = () => {
    if(!upvote.voted){
      setUpvote(prev => ({...prev,voted:!prev.voted,voteCount:prev.voteCount+1}));
    }else{
      setUpvote(prev => ({...prev,voted:!prev.voted,voteCount:prev.voteCount-1}));
    }
    upVoter(blog._id,!upvote.voted);
  }

  return (
    <div className='blog_info_card_frame'>
      <div className='blog_info_card_header'>
        <h4>{blog.title}</h4>
      </div>
      <div className='blog_info_card_midsection'>
        <img className='blog_info_card_img' src={beach} alt={blog.placetag} />
        <div className='blog_info_card_content'>
          <div className='blog_info_card_header'>
            <img src={person} alt={`${blog.author}`} />
            <div className='blog_info_card_details'>
              <h6>{blog.author}</h6>
              <p>{blog.date}</p>
            </div>
            <Badge badgeContent={upvote.voteCount} sx={{ marginLeft:'auto',marginRight:'1.2rem'}} color='warning'>
            {
              !upvote.voted?<i className="fa-regular fa-thumbs-up" id='blog_vote_up' style={{alignSelf:'auto',fontSize:'1.5rem'}} onClick={() => handleVoting()}></i>
              :<i className="fa-solid fa-thumbs-up" id='blog_vote_up' style={{alignSelf:'auto',fontSize:'1.5rem',color:'orange'}} onClick={() => handleVoting()}></i>}
              </Badge>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <TagChip name={blog.placetag} />
          </div>
          <p style={readMore.expand ? height : null} ref={contentRef}>{blog.content}</p>
          {readMore.showBtn && <span id='blog_info_card_readmore' onClick={() => viewFullBlog()}>{readMore.expand ? 'read less' : 'read more'}</span>}
        </div>
      </div>
    </div>
  )
}

export default BlogInfoCard
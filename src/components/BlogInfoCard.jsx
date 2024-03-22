import React, { useEffect, useRef, useState } from 'react'
import person from '../assets/person1.png'
import beach from '../assets/beach1.jpg'
import '../styles/bloginfocard.css'
import TagChip from './TagChip'
import Badge from '@mui/material/Badge';
import { upVoter } from '../api/upVoter'
import { voteChecker } from '../helpers/voteChecker'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { card, cardText } from '../animations/cardAnim'

const BlogInfoCard = ({ blog,auth,totalBlogsVoted }) => {
  const [readMore, setReadMore] = useState({
    showBtn: false,
    expand: false
  });
  const [upvote,setUpvote] = useState({
    voted:voteChecker(totalBlogsVoted,blog._id),
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
  
  const navigate = useNavigate();
  const handleVoting = () => {
    if(auth){
      if(!upvote.voted){
        setUpvote(prev => ({...prev,voted:!prev.voted,voteCount:prev.voteCount+1}));
      }else{
        setUpvote(prev => ({...prev,voted:!prev.voted,voteCount:prev.voteCount-1}));
      }
      upVoter(blog._id,!upvote.voted);
    }else{
      navigate('/login');
    }
  }

  return (
    <motion.div className='blog_info_card_frame' variants={card} initial="start" animate="end" >
      <div className='blog_info_card_header'>
        <h4>{blog.title}</h4>
      </div>
      <div className='blog_info_card_midsection'>
        <motion.img className='blog_info_card_img' src={blog.image} alt={blog.placetag} variants={cardText} initial="start" animate="end"  />
        <div className='blog_info_card_content'>
          <div className='blog_info_card_header'>
            <img src={person} alt={`${blog.author}`} />
            <div className='blog_info_card_details'>
              <motion.h6 variants={cardText} initial="start" animate="end">{blog.author}</motion.h6>
              <motion.p variants={cardText} initial="start" animate="end">{new Date(blog.date).toDateString()}</motion.p>
            </div>
            <Badge badgeContent={upvote.voteCount} sx={{ marginLeft:'auto',marginRight:'1.2rem'}} color='warning'>
            {
              !upvote.voted?<i className="fa-regular fa-thumbs-up" id='blog_vote_up' style={{alignSelf:'auto',fontSize:'1.5rem'}} onClick={() => handleVoting()}></i>
              :<i className="fa-solid fa-thumbs-up" id='blog_vote_up' style={{alignSelf:'auto',fontSize:'1.5rem',color:'orange'}} onClick={() => handleVoting()}></i>}
              </Badge>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <TagChip variants={cardText} initial="start" animate="end" name={blog.placetag} />
          </div>
          <motion.p style={readMore.expand ? height : null} ref={contentRef} variants={cardText} initial="start" animate="end">{blog.content}</motion.p>
          {readMore.showBtn && <motion.span id='blog_info_card_readmore' onClick={() => viewFullBlog()} variants={cardText} initial="start" animate="end" >{readMore.expand ? 'read less' : 'read more'}</motion.span>}
        </div>
      </div>
    </motion.div>
  )
}

export default BlogInfoCard
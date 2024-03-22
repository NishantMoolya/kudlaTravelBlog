import React, { useEffect, useRef, useState } from 'react'
import '../styles/blogpage.css'
import BlogInfoCard from './BlogInfoCard'
import { Fab } from '@mui/material'
import { EditNote } from '@mui/icons-material'
import Search from './Search'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogResults } from '../redux/api/searchApi'
import { lazyBlogFetcher } from '../redux/api/LazyFetcherApi'
import { NavLink } from 'react-router-dom'
import { totalBlogsVoted } from '../api/upVoter'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'

const BlogPage = () => {
  const blogInfoRef = useRef();
  const [page,setPage] = useState(1);
  const [totalVotes,setTotalVotes] = useState([]);

  const canScroll = useSelector(state => state.blogInfos.canScroll);
  const isLoading = useSelector(state => state.blogInfos.isLoading);
  const blogInfos = useSelector(state => state.blogInfos.data);
  const auth = useSelector(state => state.user.auth);
  
  const lazyDispatch = useDispatch();
  useEffect(() => {
    lazyDispatch(lazyBlogFetcher(page));
  },[page]);
  
  useEffect(() => {
    totalBlogsVoted().then(data => setTotalVotes(data));
  },[]);
  
  const searchResults = (_id) =>  lazyDispatch(fetchBlogResults(_id));

  const handleScroll = () => {
    if(blogInfoRef.current.clientHeight + blogInfoRef.current.scrollTop+1 >= blogInfoRef.current.scrollHeight){
      if(canScroll) setPage(prev => prev+1);
    }
  }
  
  
  document.title = "Blogs-Namma Kudla";
  return (
    <>
    <motion.div variants={route} initial="start" animate="end" exit="exit" className='blog_page_frame'>
      <div className='blog_page_search'>
      <Search searchResults={searchResults} label={'search blogs...'} />
      </div>
      <div>
      <div className='blog_view_frame' ref={blogInfoRef} onScroll={() => handleScroll()}>
      {blogInfos.length === 0?<Loader />:null}
      {
        blogInfos?.map((blog,ind) => (
          <>
        <BlogInfoCard key={ind} blog={blog} auth={auth} totalBlogsVoted={totalVotes} />
        <hr />
        </>))
      }
      </div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
        {!canScroll?"Reached the end no more blogs avaliable":isLoading && <Loader />}
      </div>
    </div>
    </motion.div>
    <div className='create_blog_btn'>
      <NavLink to='/user/create'>
      <Fab color='warning'>
        <EditNote />
      </Fab>
      </NavLink>
    </div>
    </>
  )
}

export default BlogPage
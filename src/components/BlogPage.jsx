import React, { useEffect, useRef, useState } from 'react'
import '../styles/blogpage.css'
import BlogInfoCard from './BlogInfoCard'
import Search from './Search'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogResults } from '../redux/api/searchApi'
import { lazyBlogFetcher } from '../redux/api/LazyFetcherApi'
import { NavLink } from 'react-router-dom'
import { totalBlogsVoted } from '../api/upVoter'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'
import noInternet from '../assets/noInternet.png'

const BlogPage = () => {
  const blogInfoRef = useRef();
  const [totalVotes,setTotalVotes] = useState([]);

  const canScroll = useSelector(state => state.blogInfos.canScroll);
  const isLoading = useSelector(state => state.blogInfos.isLoading);
  const blogInfos = useSelector(state => state.blogInfos.data);
  const auth = useSelector(state => state.user.auth);
  const page = useSelector(state => state.blogInfos.page);
  
  const lazyDispatch = useDispatch();

  useEffect(() => {
    if(blogInfos.length === 0) lazyDispatch(lazyBlogFetcher(page));
  },[]);
  
  useEffect(() => {
    totalBlogsVoted().then(data => setTotalVotes(data));
  },[]);
  
  const searchResults = (_id) =>  lazyDispatch(fetchBlogResults(_id));

  const handleScroll = () => {
    if(blogInfoRef.current.clientHeight + blogInfoRef.current.scrollTop+1 >= blogInfoRef.current.scrollHeight){
      if(canScroll) lazyDispatch(lazyBlogFetcher(page));
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
      {blogInfos.length === 0?isLoading?<Loader />:<img src={noInternet} alt='no internet' style={{alignSelf:"center",height:"15rem",minWidth:"10rem"}} />:null}
      {
        blogInfos?.map((blog,ind) => (
          <>
        <BlogInfoCard key={ind} blog={blog} auth={auth} totalBlogsVoted={totalVotes} />
        <hr />
        </>))
      }
      </div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center',color:"var(--theme-color)"}}>
        {!canScroll?"No more blogs avaliable":isLoading && <Loader />}
      </div>
    </div>
    </motion.div>
      <NavLink className='create_blog_btn' to='/user/create'>
      <i class="fa-solid fa-pen-to-square"></i>
      </NavLink>
    </>
  )
}

export default BlogPage
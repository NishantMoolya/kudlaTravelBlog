import React, { useEffect, useRef, useState } from 'react'
import '../styles/blogpage.css'
import BlogInfoCard from './BlogInfoCard'
//import blogInfo from '../data/blogInfo'
import { Fab } from '@mui/material'
import { EditNote } from '@mui/icons-material'
import Search from './Search'
//import searchData from '../data/searchData'
//import { fetchResults } from '../api/searchFetcher'
import Loader from './Loader'
//import { lazyFetcher } from '../api/lazyFetcher'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogResults } from '../redux/api/searchApi'
import { lazyBlogFetcher } from '../redux/api/LazyFetcherApi'

const BlogPage = () => {
  const blogInfoRef = useRef();
  const [page,setPage] = useState(1);

  const canScroll = useSelector(state => state.blogInfos.canScroll);
  const isLoading = useSelector(state => state.blogInfos.isLoading);
  const blogInfos = useSelector(state => state.blogInfos.data);
  
  const lazyDispatch = useDispatch();

  useEffect(() => {
    lazyDispatch(lazyBlogFetcher(page));
  },[page]);
  
  const searchResults = (_id) =>  lazyDispatch(fetchBlogResults(_id));

  const handleScroll = () => {
    if(blogInfoRef.current.clientHeight + blogInfoRef.current.scrollTop+1 >= blogInfoRef.current.scrollHeight){
      if(canScroll) setPage(prev => prev+1);
    }
  }
  
  

  return (
    <>
    <div className='blog_page_frame'>
      <div className='blog_page_search'>
      <Search searchResults={searchResults} label={'search blogs...'} />
      </div>
      <div>
      <div className='blog_view_frame' ref={blogInfoRef} onScroll={() => handleScroll()}>
      {blogInfos.length === 0?<Loader />:null}
      {
        blogInfos?.map((blog,ind) => (
          <>
        <BlogInfoCard key={ind} blog={blog} />
        <hr />
        </>))
      }
      </div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
        {!canScroll?"Reached the end no more blogs avaliable":isLoading && <Loader />}
      </div>
    </div>
    </div>
    <div className='create_blog_btn'>
      <Fab color='warning'>
        <EditNote />
      </Fab>
    </div>
    </>
  )
}

export default BlogPage
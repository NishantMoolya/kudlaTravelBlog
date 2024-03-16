import React, { useEffect, useRef, useState } from 'react'
import '../styles/blogpage.css'
import BlogInfoCard from './BlogInfoCard'
import blogInfo from '../data/blogInfo'
import { Fab } from '@mui/material'
import { EditNote } from '@mui/icons-material'
import Search from './Search'
//import searchData from '../data/searchData'
import { fetchResults } from '../api/searchFetcher'
import Loader from './Loader'
import { lazyFetcher } from '../api/lazyFetcher'

const BlogPage = () => {
  const blogInfoRef = useRef();
  const [blogInfos, setBlogInfos] = useState([]);
  const [fetchMore,setFetchMore] = useState({
    page:1,
    isLoading:false,
    canScroll:true
  });

  const searchResults = async (_id) => {
    console.log('searching');
    try {
      const data = await fetchResults(`/place/search/${_id}`);
      console.log(data);
      setBlogInfos(prev => ([...data,...prev]));
    } catch (err) {
      console.log(`an error in fetching search results(blogpage):${err}`);
    }
  }

  const loadMore = async () => {
    try {
      let newBlogsInfo = await lazyFetcher('/blog',fetchMore.page);
      if(newBlogsInfo.length === 0) setFetchMore(prev => ({...prev,canScroll:false}));
      else setBlogInfos(prev => ([...prev,...newBlogsInfo]));
    } catch (err) {
      console.log(`an error in loading more(blogpage):${err}`);
    }finally{
      setFetchMore(prev => ({...prev,isLoading:false}));
    }
  }

  const handleScroll = () => {
    if(blogInfoRef.current.clientHeight + blogInfoRef.current.scrollTop+1 >= blogInfoRef.current.scrollHeight){
      if(fetchMore.canScroll) setFetchMore(prev => ({...prev,page:prev.page+1,isLoading:true}));
    }
  }
  
  useEffect(() => {
    //console.log("page:",fetchMore.page);
    loadMore();
  },[fetchMore.page]);

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
        {!fetchMore.canScroll?"Reached the end no more blogs avaliable":fetchMore.isLoading && <Loader />}
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
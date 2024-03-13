import React, { useState } from 'react'
import '../styles/blogpage.css'
import BlogInfoCard from './BlogInfoCard'
import blogInfo from '../data/blogInfo'
import { Fab } from '@mui/material'
import { EditNote } from '@mui/icons-material'
import Search from './Search'
import searchData from '../data/searchData'
import { fetchResults } from '../api/searchFetcher'

const BlogPage = () => {
  const [blogInfos, setBlogInfos] = useState(blogInfo);
  const searchResults = async (_id) => {
    console.log('searching');
    try {
      const data = await fetchResults(_id);
      console.log(data);
      setBlogInfos(prev => ([...data,...prev]));
    } catch (err) {
      console.log(`an error in fetching search results(blogpage):${err}`);
    }
  }

  return (
    <>
    <div className='blog_page_frame'>
      <div className='blog_page_search'>
      <Search searchResults={searchResults} />
      </div>
      <div className='blog_view_frame'>
      {
        blogInfos.map((blog,ind) => (
        <>
        <BlogInfoCard key={ind} blog={blog} />
        <hr />
        </>))
      }
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
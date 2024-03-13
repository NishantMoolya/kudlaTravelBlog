import React from 'react'
import '../styles/blogpage.css'
import BlogInfoCard from './BlogInfoCard'
import blogInfo from '../data/blogInfo'
import { Fab } from '@mui/material'
import { EditNote } from '@mui/icons-material'

const BlogPage = () => {
  return (
    <>
    <div className='blog_page_frame'>
      <div className='blog_view_frame'>
      {
        blogInfo.map((blog,ind) => (
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
import React from 'react'
import Blog from './Blog'
import '../styles/blogpage.css'
import '../styles/blog.css'
import beach from '../assets/beach1.jpg'
import person from '../assets/person1.png'
import { Badge, IconButton } from '@mui/material'
import { Favorite, LocationOn, RemoveRedEye } from '@mui/icons-material'

const BlogPage = () => {
  return (
    <>
    <div className='frame'>
      <div>
        <h3>Top stories</h3>
      </div>
    <div className='blog_frame'>
    <Blog />
    </div>
    </div>
    
    </>
  )
}

export default BlogPage
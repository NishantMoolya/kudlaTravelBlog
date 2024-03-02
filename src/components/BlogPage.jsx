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
    <div className='blog_card'>
        <div className='blog_head'>
            <img src={person} alt="avatar" />
            <div className='blog_metadata'>
                <h6>Ramesh</h6>
                <p>10-2-2024</p>
            </div>
        </div>
        <div>
            <img className='blog_img' src={beach} />
        </div>
        <div className='blog_content'>
            <div className='location'>
                <IconButton>
                    <LocationOn />
                </IconButton>
            <h3>Mangalore</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae! Soluta quas veritatis libero expedita illum, aperiam consequatur natus tempora?</p>
        </div>
        <div className='btns'>
        <Badge badgeContent={4} color='error'>
            <Favorite />
        </Badge>
        <Badge badgeContent={4} color='error'>
            <RemoveRedEye />
        </Badge>
        </div>
    </div>
    </div>
    <div className='blog_frame'>
    <div className='blog_card'>
        <div className='blog_head'>
            <img src={person} alt="avatar" />
            <div className='blog_metadata'>
                <h6>Ramesh</h6>
                <p>10-2-2024</p>
            </div>
        </div>
        <div>
            <img className='blog_img' src={beach} />
        </div>
        <div className='blog_content'>
            <div className='location'>
                <IconButton>
                    <LocationOn />
                </IconButton>
            <h3>Mangalore</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae! Soluta quas veritatis libero expedita illum, aperiam consequatur natus tempora?</p>
        </div>
        <div className='btns'>
        <Badge badgeContent={4} color='error'>
            <Favorite />
        </Badge>
        <Badge badgeContent={4} color='error'>
            <RemoveRedEye />
        </Badge>
        </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default BlogPage
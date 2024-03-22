import React from 'react'
import '../styles/blog.css'
import beach from '../assets/beach1.jpg'
import person from '../assets/person1.png'
import { Badge, Fab, IconButton } from '@mui/material'
import { ArrowOutward, Favorite, LocationOn } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <div className='blog_card'>
        <div className='blog_head'>
            <img src={person} alt="avatar" />
            <div className='blog_metadata'>
                <h6>Ramesh</h6>
                <p>10-2-2024</p>
            </div>
            <div id='blog_like'>
            <Badge badgeContent={10} color={grey[500]}>
            <Favorite color='error' />
            </Badge>
            </div>
        </div>
        <div className='blog_img_frame'>
            <img className='blog_img' src={beach} />
            <div id='blog_view'> 
                <NavLink to='/blogs'>
                    <Fab size='small'>
                        <ArrowOutward />
                    </Fab>
                </NavLink>
            </div>
        </div>
        <div className='blog_content'>
            <div className='location'>
                <IconButton>
                    <LocationOn />
                </IconButton>
            <h3>panambur beach</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog
import React from 'react'
import '../styles/createblog.css'

const CreateBlog = () => {
  return (
    <div className='create_blog_frame'>
        <form className='create_blog_form' method='post' encType='multipart'>
            <textarea type="text" name="title" id='create_blog_title' placeholder='title' rows='1' />
            <button>add place</button>
            <div>
            <label htmlFor="image">Add relative image</label><input type="file" name="image" id='create_blog_image' />
            </div>
            <textarea name="content" rows="10" id='create_blog_content' placeholder='write your experience about the place...' />
            <div className='create_blog_btns'>
            <button type='reset' id='cancel_btn'>cancel</button>
            <button type="submit" id='post_btn'>post</button>
            </div>
        </form>
    </div>
  )
}

export default CreateBlog
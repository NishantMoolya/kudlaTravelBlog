import React, { useRef, useState } from 'react'
import '../styles/createblog.css'
import { blogCreator } from '../api/blogCreator';

const CreateBlog = () => {
  const blogRef = useRef(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const blogInfo = new FormData(blogRef.current);
      blogInfo.append("date",new Date().toDateString());
      blogInfo.append("author","nishant");
      blogInfo.append("avatar","my pic");
      blogInfo.append("placetag","kadri temple");
      //blogInfo.forEach((val,key) => console.log(key,val))
      const data = await blogCreator('/blog/new',blogInfo);
      console.log(data);
    } catch (err) {
      console.log(`can't upload blog:${err}`);
    }finally{
      blogRef.current.reset();
    }
  }
  return (
    <div className='create_blog_frame'>
        <form ref={blogRef} defaultValue={""} className='create_blog_form' method='post' encType={'multipart/form-data'} onSubmit={(e) => handleSubmit(e)}>
            <textarea type="text" name="title" id='create_blog_title' placeholder='title' rows='1' />
            <button>add place</button>
            <div>
            <label htmlFor="image">Add relative image</label><input type="file" name='image' id='create_blog_image' />
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
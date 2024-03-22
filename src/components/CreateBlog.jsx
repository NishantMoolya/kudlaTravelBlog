import React, { useRef, useState } from 'react'
import '../styles/createblog.css'
//import { blogCreator } from '../api/blogCreator';
import TagChip from './TagChip'
import { useDispatch, useSelector } from 'react-redux'
import { accessSearchData } from '../redux/api/searchApi';
import Loader from './Loader';
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'

const CreateBlog = () => {
  const blogRef = useRef(null);
  const [image,setImage] = useState(null);
  const [place,setPlace] = useState(null);
  const searchDispatch = useDispatch();
  const user = useSelector(state => state.user);
  const auth = useSelector(state => state.user.auth);
  const placeTags = useSelector(state => state.searchplace);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if(place){
        const blogInfo = new FormData(blogRef.current);
        blogInfo.append("date",new Date().toDateString());
        blogInfo.append("author",user.name);
        blogInfo.append("avatar",user.avatar);
        blogInfo.append("placetag",place.name);
        blogInfo.append("placetag_id",place._id);
        //const data = await blogCreator('/blog/new',blogInfo);
        blogInfo.forEach((val,key) => console.log(key,val));
        setImage(null);
        setPlace(null);
        blogRef.current.reset();
      }else{
        alert("Please include all details");
      }
    } catch (err) {
      console.log(`can't upload blog:${err}`);
    }
  }

  const handleImage = (e) => {
    try {
      setImage(URL.createObjectURL(e.target.files[0]));
    } catch (err) {
      setImage(null);
    }
  }
  const [openModal,setOpenModal] = useState(false);
  
  const addTag = (tag) => {
    setOpenModal(false);
    setPlace(tag);
  }
  const handleTags = () => {
    setOpenModal(true); 
    if(placeTags.length === 0) searchDispatch(accessSearchData());
  }
  document.title = "Blog-Share your stories";
  return (
    <>
    <motion.div variants={route} initial="start" animate="end" exit="exit" className='create_blog_frame'>
        <form ref={blogRef} defaultValue={""} className='create_blog_form' method='post' encType={'multipart/form-data'} onSubmit={(e) => handleSubmit(e)}>
            <textarea  name="title" id='create_blog_title' placeholder='title' rows='1' required />
            <div className='create_blog_tag_place'>
              <div>
              {place && <TagChip name={place.name} />}
              </div>
            <button className='create_blog_place_btn' onClick={handleTags}>add place tag</button>
            </div>
            <div className='create_blog_image_div'>
            <img src={image} alt="" srcset="" />
            <label htmlFor="image">Add Image</label><input type="file" accept="image/*" name='image' id='create_blog_image' onChange={handleImage} required />
            </div>
            <textarea name="content" rows="10" id='create_blog_content' placeholder='write your experience about the place...' required />
            <div className='create_blog_btns'>
            <button type='reset' id='cancel_btn'>cancel</button>
            <button type="submit" id='post_btn'>post</button>
            </div>
        </form>
    </motion.div>
    
        {openModal && <div className='create_blog_modal'>
              <div className='search_places_frame'>
                <button className='search_places_close_btn' onClick={() => setOpenModal(false)}><i className="fa-solid fa-xmark"></i></button>
                <ul className='search_places_list'>
                {
                  placeTags.length !== 0?placeTags.toSorted((a,b) => a.name.localeCompare(b.name))?.map((tag,ind) => (<li onClick={() => addTag(tag)} key={ind}>{tag.name}</li>)):<Loader />
                }
                </ul>
              </div>
          </div>}
    </>
  )
}

export default CreateBlog
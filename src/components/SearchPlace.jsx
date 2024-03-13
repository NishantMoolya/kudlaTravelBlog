import React, { useState } from 'react'
import '../styles/searchplace.css'
import { ArrowForwardIos } from '@mui/icons-material';
import TagChip from './TagChip';

const SearchPlace = () => {
const [search, setSearch] = useState('');
const arr = ["kadri","hello","subramanya","ganapathi"]
const [searchArr,setSearchArr] = useState(arr);
const getTag = (name,ind) => {
  if(search) searchArr.push(search);
  setSearch(name);
  searchArr.splice(ind,1);
}
const handleSearch = () => {
  alert(`hello bro ${search}`);
}
  return (
    <div className='searchplace_frame'>
        <div className='search_header'><h4>Check out some recent places</h4></div>
        <div className='search_bar'>
            <input type="text" disabled placeholder='Select tags' value={search} />
            <div className='search_explore_btn' onClick={() => handleSearch()}>
              <span>Explore</span>
              <ArrowForwardIos />
            </div>
        </div>
        <div className='search_tags'>
            <h4>Popular recent search</h4>
            {/* <div className='tags_block'>
              {
                searchArr.map((name,ind) => (<div key={ind} className='recent_search_tags'><p onClick={() => getTag(name,ind)}>{name}</p></div>))
              }
            </div> */}
            <div className='tags_block'>
              {
                searchArr.map((name,ind) => <TagChip key={ind} name={name} />)
              }
            </div>
        </div>
    </div>
  )
}

export default SearchPlace
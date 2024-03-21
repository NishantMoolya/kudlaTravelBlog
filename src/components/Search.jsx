import React, { useState } from 'react'
import '../styles/search.css'
//import { accessSearchData } from '../api/searchFetcher';
import { useDispatch, useSelector } from 'react-redux';
import { accessSearchData } from '../redux/api/searchApi';

//add fontawesome cdn link for icons in index.html
const Search = ({ searchResults,label }) => {
  const [search, setSearch] = useState({
    name:'',
    _id:''
  });

  const searchData = useSelector(state => state.searchplace);
  const searchDispatch = useDispatch();
  const [openBox, setOpenBox] = useState(false);

  const handleSearchInput = (e) => {
    setSearch(prev => ({...prev,name:e.target.value}));
    if(!openBox) setOpenBox(true);
    if(searchData.length === 0) searchDispatch(accessSearchData());
  }

  return (
    <div className='search_frame'>
        <div className='search_box'>
        <input className='search_bar' value={search.name} onChange={(e) =>handleSearchInput(e)} placeholder={label} />
        <div>{!search.name?null:<i className="fa-solid fa-xmark" onClick={() => setSearch({name:'',_id:''})}></i>}</div>
        </div>
        <button className='search_btn' onClick={() => {searchResults(search._id); setOpenBox(false)}}><i className="fa-solid fa-magnifying-glass"></i></button>

       {(openBox && search.name) && <ul>
          {
                  searchData?.filter(item => item.name.toLowerCase().startsWith(search.name.toLowerCase())).map((item,ind) => {
                    return(<><li className='suggestions' key={ind} onClick={() => {setSearch({name:item.name,_id:item._id}); setOpenBox(false);}}>{item.name}</li><hr key={-(ind+1)}/></>)
                })
              }
              <li className='suggestions' style={{'opacity':'0.5'}} key={-1000000}>No more suggestions found</li>
        </ul>}
    </div>
  )
}

export default Search
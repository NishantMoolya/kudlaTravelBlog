import React, { useState } from 'react'
import '../styles/search.css'

//add fontawesome cdn link for icons in index.html
const Search = ({ searchData,width }) => {
  const [search, setSearch] = useState('');
  return (
    <div className='search_frame' style={{width:`${width}rem`}}>
        <div className='search_box'>
        <input className='search_bar' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Explore Mangalore...' />
        <div>{!search?<i className="fa-solid fa-magnifying-glass"></i>:<i className="fa-solid fa-xmark" onClick={() => setSearch('')}></i>}</div>
        </div>

       {search && <ul>
          {
                  searchData?.filter(item => item.song_name.toLowerCase().startsWith(search.toLowerCase())).map((item,ind) => {
                    return(<><li className='suggestions' key={ind} onClick={() => setSearch(item.song_name)}>{item.song_name}</li><hr key={-ind+1}/></>)
                })
              }
              <li className='suggestions' style={{'opacity':'0.5'}} key={-1}>No more suggestions found</li>
        </ul>}
    </div>
  )
}

export default Search
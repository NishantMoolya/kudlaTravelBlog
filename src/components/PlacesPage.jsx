import React, { useEffect, useRef, useState } from 'react'
import '../styles/placespage.css'
//import placesInfo from '../data/placeInfo'
import { Divider } from '@mui/material'
import PlaceInfoCard from './PlaceInfoCard'
//import placesGuide from '../data/placesGuide'
import Search from './Search'
import { fetchResults } from '../api/searchFetcher'
import { lazyFetcher } from '../api/lazyFetcher'
import Loader from './Loader'

const PlacesPage = () => {
  const placeInfoRef = useRef();
  const [placesInfos, setPlacesInfos] = useState([]);
  const [fetchMore,setFetchMore] = useState({
    page:1,
    isLoading:false,
    canScroll:true
  });

  const searchResults = async (_id) => {
    console.log('searching');
    try {
      const data = await fetchResults(`/place/search/${_id}`);
      setPlacesInfos(prev => ([...data,...prev]));
    } catch (err) {
      console.log(`an error in fetching search results(blogpage):${err}`);
    }
  }

  const loadMore = async () => {
    try {
      let newPlacesInfo = await lazyFetcher('/place',fetchMore.page);
      if(newPlacesInfo.length === 0) setFetchMore(prev => ({...prev,canScroll:false}));
      else setPlacesInfos(prev => ([...prev,...newPlacesInfo]));
    } catch (err) {
      console.log(`an error in loading more(placepage):${err}`);
    }finally{
      setFetchMore(prev => ({...prev,isLoading:false}));
    }
  }

  const handleScroll = () => {
    if(placeInfoRef.current.clientHeight + placeInfoRef.current.scrollTop+1 >= placeInfoRef.current.scrollHeight){
      if(fetchMore.canScroll) setFetchMore(prev => ({...prev,page:prev.page+1,isLoading:true}));
    }
  }
  
  useEffect(() => {
    //console.log("page:",fetchMore.page);
    loadMore();
  },[fetchMore.page]);

  return (
    <div className='place_page_frame'>
      <div className='place_page_searchbar'>
        <Search searchResults={searchResults} label={'search places...'} />
      </div>
      <div>
      <div className='place_page_info' ref={placeInfoRef} onScroll={() => handleScroll()} >
      {placesInfos.length === 0?<Loader />:null}
        {
          placesInfos?.map((place,ind) => (<>
          <PlaceInfoCard key={ind} place={place} />
          <Divider />
          </>
          ))
        }
      </div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
        {!fetchMore.canScroll?"Reached the end no more places avaliable":fetchMore.isLoading && <Loader />}
      </div>
      </div>
    </div>
  )
}

export default PlacesPage
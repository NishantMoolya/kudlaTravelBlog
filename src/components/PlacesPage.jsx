import React, { useEffect, useRef, useState } from 'react'
import '../styles/placespage.css'
//import placesInfo from '../data/placeInfo'
import { Divider } from '@mui/material'
import PlaceInfoCard from './PlaceInfoCard'
//import placesGuide from '../data/placesGuide'
import Search from './Search'
//import { fetchResults } from '../api/searchFetcher'
//import { lazyFetcher } from '../api/lazyFetcher'
import Loader from './Loader'
import { lazyPlaceFetcher } from '../redux/api/LazyFetcherApi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaceResults } from '../redux/api/searchApi'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'

const PlacesPage = () => {
  const placeInfoRef = useRef(null);
  const [page,setPage] = useState(1);

  const placeInfos = useSelector(state => state.placeInfos.data);
  const canScroll = useSelector(state => state.placeInfos.canScroll);
  const isLoading = useSelector(state => state.placeInfos.isLoading);

  const lazyDispatch = useDispatch();

  useEffect(() => {
    lazyDispatch(lazyPlaceFetcher(page));
  },[page]);
  
  const searchResults = (_id) =>  lazyDispatch(fetchPlaceResults(_id));

  const handleScroll = () => {
    if(placeInfoRef.current.clientHeight + placeInfoRef.current.scrollTop+1 >= placeInfoRef.current.scrollHeight){
      if(canScroll) setPage(prev => prev+1);
    }
  }

  document.title = "Places-Namma Kudla";
  return (
    <motion.div variants={route} initial="start" animate="end" exit="exit" className='place_page_frame'>
      <div className='place_page_searchbar'>
        <Search searchResults={searchResults} label={'search places...'} />
      </div>
      <div>
      <div className='place_page_info' ref={placeInfoRef} onScroll={() => handleScroll()} >
      {placeInfos.length === 0?<Loader />:null}
        {
          placeInfos?.map((place,ind) => (<>
          <PlaceInfoCard key={ind} place={place} />
          <Divider />
          </>
          ))
        }
      </div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>
        {!canScroll?"Reached the end no more places avaliable":isLoading && <Loader />}
      </div>
      </div>
    </motion.div>
  )
}

export default PlacesPage
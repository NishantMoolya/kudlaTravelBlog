import React, { useEffect, useRef } from 'react'
import '../styles/placespage.css'
import { Divider } from '@mui/material'
import PlaceInfoCard from './PlaceInfoCard'
import Search from './Search'
import Loader from './Loader'
import { lazyPlaceFetcher } from '../redux/api/LazyFetcherApi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaceResults } from '../redux/api/searchApi'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'
import noInternet from '../assets/noInternet.png'

const PlacesPage = () => {
  const placeInfoRef = useRef(null);

  const placeInfos = useSelector(state => state.placeInfos.data);
  const canScroll = useSelector(state => state.placeInfos.canScroll);
  const isLoading = useSelector(state => state.placeInfos.isLoading);
  const page = useSelector(state => state.placeInfos.page);

  const lazyDispatch = useDispatch();

  useEffect(() => {
    if(placeInfos.length === 0) lazyDispatch(lazyPlaceFetcher(page));
  },[]);
  
  const searchResults = (_id) =>  lazyDispatch(fetchPlaceResults(_id));

  const handleScroll = () => {
    if(placeInfoRef.current.clientHeight + placeInfoRef.current.scrollTop+1 >= placeInfoRef.current.scrollHeight){
      if(canScroll) lazyDispatch(lazyPlaceFetcher(page));
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
      {placeInfos.length === 0?isLoading?<Loader />:<img src={noInternet} alt='no internet' style={{alignSelf:"center",height:"15rem",minWidth:"10rem"}} />:null}
        {
          placeInfos?.map((place,ind) => (<>
          <PlaceInfoCard key={ind} place={place} />
          <Divider />
          </>
          ))
        }
      </div>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'center',color:"var(--theme-color)"}}>
        {!canScroll?"No more places avaliable":isLoading && <Loader />}
      </div>
      </div>
    </motion.div>
  )
}

export default PlacesPage
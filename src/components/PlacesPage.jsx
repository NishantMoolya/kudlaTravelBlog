import React, { useState } from 'react'
import '../styles/placespage.css'
import placesInfo from '../data/placeInfo'
import { Divider } from '@mui/material'
import PlaceInfoCard from './PlaceInfoCard'
import placesGuide from '../data/placesGuide'
import Search from './Search'
import { fetchResults } from '../api/searchFetcher'

const PlacesPage = () => {
  const [placesInfos, setPlacesInfos] = useState(placesGuide);
  const searchResults = async (_id) => {
    console.log('searching');
    try {
      const data = await fetchResults(`/place/search/${_id}`);
      console.log(data);
      setPlacesInfos(prev => ([...data,...prev]));
    } catch (err) {
      console.log(`an error in fetching search results(blogpage):${err}`);
    }
  }
  return (
    <div className='place_page_frame'>
      <div className='place_page_searchbar'>
        <Search searchResults={searchResults} label={'search places...'} />
      </div>
      <div className='place_page_info'>
        {
          placesInfos.map((place,ind) => (<>
          <PlaceInfoCard key={ind} place={place} />
          <Divider />
          </>
          ))
        }
      </div>
    </div>
  )
}

export default PlacesPage
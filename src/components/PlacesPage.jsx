import React from 'react'
import '../styles/placespage.css'
import placesInfo from '../data/placeInfo'
import { Divider } from '@mui/material'
import PlaceInfoCard from './PlaceInfoCard'
import placesGuide from '../data/placesGuide'

const PlacesPage = () => {
  return (
    <div className='place_page_frame'>
       <Divider />
      <div className='place_page_searchbar'>search bar</div>
      <Divider />
      <div className='place_page_info'>
        {
          placesGuide.map((place,ind) => (<>
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
import React from 'react'
import PlaceCard from './PlaceCard'
import '../styles/placespage.css'
import placesInfo from '../data/placeInfo'

const PlacesPage = () => {
  return (
    <div className='frame'>
      <div>
        <h3>Top attractive places</h3>
      </div>
    <div className='places_frame'>
    {placesInfo?.map((place,ind) => (<PlaceCard key={ind} place={place} />))}
</div>
    </div>
  )
}

export default PlacesPage
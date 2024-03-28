import React from 'react'
import '../styles/placecard.css'
const Places = ({ place }) => {
  return (
    <div className='place_card' style={{ backgroundImage:`url(${place?.img})`}}>
        <div className='place_content'>
            <h2>{place?.placeName}</h2>
            <p>{place?.placeContent.substring(0,70)}...Read more</p>
        </div>
    </div>
  )
}

export default Places
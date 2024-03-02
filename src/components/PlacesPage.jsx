import React from 'react'
import Places from './Places'
import '../styles/placespage.css'
import { Button, IconButton } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
import temple from '../assets/kudroli.jpg'
import beach from '../assets/Panambur-Beach.jpg'

const PlacesPage = () => {
  const arr = [temple,beach];
  return (
    <div className='frame'>
      <div>
        <h3>Top attractive places</h3>
      </div>
    <div className='places_frame'>
    {arr?.map((ele,ind) => (<Places key={ind} img={ele} />))}
</div>
    </div>
  )
}

export default PlacesPage